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
        <h2 className="uppercase text-right text-xs">My Bridal Assistant</h2>
        <Dialog.Trigger asChild>
          <button className="border-b-1 border-[#afafaf] p-2 cursor-pointer min-w-1/2 text-center sm:text-right relative uppercase text-sm text-[#afafaf]">
            <span className="absolute left-0 sm:text-2xl sm:top-0">✨</span>
            <span className="pl-2 sm:pl-6 text-xs">
              {input || 'Ask anything'}
            </span>
          </button>
        </Dialog.Trigger>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-40 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="font-libredisplay fixed left-1/2 top-1/2 translate-y-[-50%] md:translate-y-0 md:top-3 max-h-[85vh] w-[95vw] md:max-w-3/4 -translate-x-1/2 bg-white p-6 md:p-8 shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="uppercase text-2xl">
            Ask me anything!
          </Dialog.Title>
          <Dialog.Description className="my-3 leading-normal text-mauve11">
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
              placeholder="Ask a question"
              className="border-b-1 border-[#afafaf] p-3 w-full"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </form>
          <div className="mt-6">
            <h4 className="mb-3 uppercase">Suggested searches</h4>
            <ul className="flex flex-col gap-3 p-0 m-0">
              {SUGGESTED_QUESTIONS.map((question) => (
                <li key={question}>
                  <Link
                    className="italic hover:bg-gray-100 p-2 pl-0 w-full text-left cursor-pointer uppercase text-[#afafaf]"
                    onClick={() => {
                      setInput(question)
                      setOpen(false)
                    }}
                    href={`/search?query=${encodeURIComponent(question)}`}
                  >
                    ✨ {question}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
              aria-label="Close"
            >
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
