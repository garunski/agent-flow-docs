'use client'

import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

interface MermaidProps {
  chart: string
  className?: string
}

const Mermaid = ({ chart, className = '' }: MermaidProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient && containerRef.current && chart) {
      // Initialize Mermaid once
      mermaid.initialize({
        startOnLoad: true,
        theme: 'base',
        flowchart: {
          useMaxWidth: true,
        },
      })
      
      // Clear and set content
      containerRef.current.innerHTML = chart
      
      // Let Mermaid auto-render
      mermaid.contentLoaded()
    }
  }, [chart, isClient])

  // Don't render on server to prevent hydration mismatch
  if (!isClient) {
    return <div className={`mermaid ${className}`}>Loading diagram...</div>
  }

  return (
    <div 
      ref={containerRef} 
      className={`mermaid ${className}`}
    />
  )
}

export default Mermaid
