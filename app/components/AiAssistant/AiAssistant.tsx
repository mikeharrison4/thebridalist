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
      <Dialog.Trigger asChild>
        <button className="border-1 border-black p-3 rounded-md cursor-pointer w-1/2 text-left">
          ✨ {input || 'Ask me anything...'}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-40 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-1/2 top-3 max-h-[85vh] w-[90vw] max-w-1/2 -translate-x-1/2 border-1 border-black rounded-md bg-white p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
            Ask me anything!
          </Dialog.Title>
          <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
            This is my personal AI assistant who will be able to tell you
            everything you need to know about the bridalist!
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
              placeholder="Enter your name"
              className="border-1 border-gray-200 p-3 w-full"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </form>
          <div className="mt-6">
            <h4 className="mb-2">Suggested searches</h4>
            <ul className="flex flex-col gap-2">
              {SUGGESTED_QUESTIONS.map((question) => (
                <li key={question}>
                  <Link
                    className="italic hover:bg-gray-100 p-2 w-full text-left cursor-pointer"
                    onClick={() => {
                      setInput(question)
                      setOpen(false)
                    }}
                    href={`/search?query=${encodeURIComponent(question)}`}
                  >
                    🔍 {question}
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
