'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Dialog } from 'radix-ui'
import { useState } from 'react'

const SUGGESTED_QUESTIONS = [
  'What services do you offer?',
  'What are your prices?',
  'What are your terms and conditions?'
]

export function AiAssistant({ inputValue = '' }) {
  const [input, setInput] = useState(inputValue)
  const [open, setOpen] = useState(false)

  const router = useRouter()

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <div className="flex flex-col sm:w-full items-center sm:items-end font-libredisplay">
        <h2 className="uppercase text-right text-xs tracking-wider text-gray-600 mb-2">
          My Bridal Assistant
        </h2>
        <Dialog.Trigger asChild>
          <button className="border border-gray-300 px-4 py-2 cursor-pointer text-center sm:text-right uppercase text-sm tracking-wider hover:bg-gray-50 transition-colors duration-200 font-libredisplay">
            <span className="pr-2">✨</span>
            Ask anything
          </button>
        </Dialog.Trigger>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="font-libredisplay fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[85vh] w-[95vw] md:max-w-2xl bg-white p-8 shadow-lg focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="uppercase text-3xl tracking-wider mb-4">
            Ask me anything!
          </Dialog.Title>
          <Dialog.Description className="mb-6 leading-relaxed tracking-wider text-gray-600">
            This is my personal AI assistant who will be able to tell you
            everything you need to know about the Bridalist!
          </Dialog.Description>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              setOpen(false)
              router.replace(`/search?query=${encodeURIComponent(input)}`)
            }}
          >
            <input
              type="text"
              placeholder="Ask a question..."
              className="border-b border-gray-300 p-3 w-full focus:outline-none focus:border-gray-500 transition-colors duration-200 tracking-wider font-libredisplay"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </form>
          <div className="mt-8">
            <h4 className="mb-4 uppercase tracking-wider text-sm text-gray-600">
              Suggested searches
            </h4>
            <ul className="flex flex-col gap-2 p-0 m-0">
              {SUGGESTED_QUESTIONS.map((question) => (
                <li key={question}>
                  <Link
                    className="block hover:bg-gray-100 p-3 transition-colors duration-200 tracking-wider text-gray-700 border-b border-gray-100 hover:border-gray-300"
                    onClick={() => {
                      setInput(question)
                      setOpen(false)
                    }}
                    href={`/search?query=${encodeURIComponent(question)}`}
                  >
                    <span className="pr-2">✨</span>
                    {question}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute right-4 top-4 inline-flex h-8 w-8 appearance-none items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              aria-label="Close"
            >
              <span className="text-xl">×</span>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
