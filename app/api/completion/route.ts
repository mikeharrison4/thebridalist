import { readFile } from 'node:fs/promises'
import path from 'node:path'

import { toUIMessageStream } from '@ai-sdk/langchain'
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf'
import { StringOutputParser } from '@langchain/core/output_parsers'
import { PromptTemplate } from '@langchain/core/prompts'
import { RunnableSequence } from '@langchain/core/runnables'
import { ChatOpenAI } from '@langchain/openai'
import { createUIMessageStreamResponse } from 'ai'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

// Utility function to format documents as string
function formatDocumentsAsString(docs: Array<{ pageContent: string }>): string {
  return docs.map((doc) => doc.pageContent).join('\n\n')
}

// Simple TextLoader implementation
async function loadTextFile(filePath: string): Promise<Array<{ pageContent: string }>> {
  const content = await readFile(filePath, 'utf-8')
  return [{ pageContent: content }]
}

const TEMPLATE = `You are the bridalists friendly and knowledgable AI assistant. You help potential customers find out valuable information about the bridalists business using information from her terms and conditions, price list and preparation guidance. Answer the user's questions based only on the following context. If the answer is not in the context reply politely that you do not have that information available.:
Instructions:
- Answer questions in a warm, helpful, and engaging tone — like a personal assistant who knows The Bridalist well.
- Use ONLY the provided context to answer questions. Don’t guess or make up anything.
- When possible, include specific examples from the context to support your answers.
- If a question goes beyond the available context, say so politely and offer to help with what is available. Do not fill in gaps with assumed or general knowledge.
- You may not generate any information that is not explicitly present in the context.
- Keep answers clear, concise, and informative — but never robotic.
- Highlight The bridalists real-world experience, projects, and achievements in a way that’s easy to understand and relevant to someone reviewing her for a role.
- Never include personal opinions, speculation, or assumptions beyond what is in the context.
- Do not generate content that is offensive, discriminatory, sensitive, or inappropriate in any way.
- If a question is irrelevant, inappropriate, or not covered by the context, respond respectfully and decline to answer.
===================
Context: {context}
===================

user: {question}
assistant:`

export async function POST(req: Request) {
  try {
    const { prompt: question } = await req.json()

    if (!question) {
      return new Response(JSON.stringify({ error: 'Question is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const publicDir = path.join(process.cwd(), 'public')
    const termsAndConditionsPath = `${publicDir}/terms-and-conditions.pdf`
    const prepGuidancePath = `${publicDir}/prep-guidance.pdf`
    const pricesPath = `${publicDir}/prices.txt`

    // Load documents individually
    const [termsDocs, prepDocs, pricesDocs] = await Promise.all([
      new PDFLoader(termsAndConditionsPath).load(),
      new PDFLoader(prepGuidancePath).load(),
      loadTextFile(pricesPath)
    ])

    const docs = [...termsDocs, ...prepDocs, ...pricesDocs]

    const prompt = PromptTemplate.fromTemplate(TEMPLATE)

    const model = new ChatOpenAI({
      model: 'gpt-3.5-turbo-0125',
      temperature: 0,
      streaming: true
    })

    const parser = new StringOutputParser()

    const chain = RunnableSequence.from([
      {
        question: (input: { question: string }) => input.question,
        context: () => formatDocumentsAsString(docs)
      },
      prompt,
      model,
      parser
    ] as any)

    const stream = await chain.stream({ question })

    return createUIMessageStreamResponse({
      stream: toUIMessageStream(stream)
    })
  } catch (error) {
    console.error('Error in completion route:', error)
    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
