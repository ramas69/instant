'use client'
import { useState } from 'react'

type FaqItem = { question: string; answer: string }

export default function FaqAccordion({ items, title = 'Questions fréquentes' }: { items: FaqItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="faq-section">
      <h2>{title}</h2>
      {items.map((item, i) => (
        <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
          <button className="faq-q" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            {item.question}
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-a">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
