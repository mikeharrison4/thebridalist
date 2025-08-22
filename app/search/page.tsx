'use client'

import { useCompletion } from '@ai-sdk/react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { AiAssistant } from '@/app/components/AiAssistant/AiAssistant'

export default function Search() {
  const completed = useRef(false)

  const { complete, completion, isLoading } = useCompletion()

  const searchParams = useSearchParams()
  const query = searchParams.get('query')

  const [input, setInput] = useState(query)

  useEffect(() => {
    if (!query || completed.current) return

    console.log(query)
    complete(query)
    completed.current = true
  }, [complete, query])

  useEffect(() => {
    if (isLoading) {
      completed.current = false
    }
  }, [isLoading])

  return (
    <div>
      <div className="flex justify-center">
        <AiAssistant inputValue={query || ''} />
      </div>
      {completion}
    </div>
  )
}
