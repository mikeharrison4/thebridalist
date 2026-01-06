'use client'

import { useCompletion } from '@ai-sdk/react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { AiAssistant } from '@/app/components/AiAssistant/AiAssistant'

export default function Search() {
  const completed = useRef(false)

  const { complete, completion, isLoading } = useCompletion()

  const searchParams = useSearchParams()
  const query = searchParams.get('query')

  useEffect(() => {
    if (!query || completed.current) return

    complete(query)
    completed.current = true
  }, [complete, query])

  useEffect(() => {
    if (isLoading) {
      completed.current = false
    }
  }, [isLoading])

  return (
    <div className="min-h-screen bg-gray-50 font-libredisplay">
      <div className="px-6 sm:px-28 md:px-48 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-12 text-gray-600 hover:text-gray-900 transition-colors duration-200 tracking-wider uppercase text-sm"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>
        {query && (
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl uppercase mb-4 tracking-wider text-center">
              {query}
            </h1>
            <div className="w-24 h-0.5 bg-gray-300 mx-auto"></div>
          </div>
        )}
        {isLoading && !completion && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-gray-600 mb-6"></div>
            </div>
            <p className="text-gray-600 tracking-wider uppercase text-sm">
              Thinking...
            </p>
          </div>
        )}
        {completion && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12">
              <div className="tracking-wider leading-relaxed text-gray-800 text-lg space-y-4">
                {completion.split('\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="mb-4 last:mb-0">
                      {paragraph}
                      {index === completion.split('\n').length - 1 && isLoading && (
                        <span className="inline-block w-2 h-5 bg-gray-400 ml-1 animate-pulse"></span>
                      )}
                    </p>
                  )
                ))}
                {!completion.includes('\n') && (
                  <>
                    {completion}
                    {isLoading && (
                      <span className="inline-block w-2 h-5 bg-gray-400 ml-1 animate-pulse"></span>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
