import { useState } from 'react'
import { LINKS } from '@/data/site'
import { useLang } from '@/i18n'

export default function Faq() {
  const [open, setOpen] = useState(0)
  const { t } = useLang()

  return (
    <section id="faq" className="epr-skew bg-[var(--epr-light)] -mt-[46px] -mb-[46px] relative z-10">
      <div className="epr-unskew mx-auto max-w-4xl px-5 md:px-8 pt-[110px] pb-[120px] text-[var(--epr-light-text)]">
        <p className="font-code text-[12px] tracking-[0.25em] uppercase text-[#0e6ebd] mb-4">
          {t.faq.kicker}
        </p>
        <h2 className="font-display font-extrabold text-[clamp(1.9rem,4vw,3rem)] leading-tight tracking-tight mb-14">
          {t.faq.title}
        </h2>

        <div className="divide-y divide-[#dfe9ec] border-y border-[#dfe9ec]">
          {t.faq.items.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-[16.5px] group-hover:text-[#0e6ebd] transition-colors">
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full border border-[#b9d3d9] flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-[#0e6ebd] border-[#0e6ebd] text-white' : 'text-[#4a6a72]'
                    }`}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-400 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 pr-10 text-[14.5px] leading-[1.95] text-[#4a6a72]">
                      {f.a}
                      {f.linkKey && f.linkText && (
                        <>
                          {' '}
                          <a href={LINKS[f.linkKey]} className="font-semibold text-[#0e6ebd] hover:underline">
                            {f.linkText} →
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
