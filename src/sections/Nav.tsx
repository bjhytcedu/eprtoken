import { useEffect, useRef, useState } from 'react'
import { LINKS } from '@/data/site'
import { useLang, LOCALES } from '@/i18n'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { locale, t, setLocale } = useLang()
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('mousedown', onClick)
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mousedown', onClick)
    }
  }, [])

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-[rgba(7,23,34,0.72)] border-b border-[rgba(120,200,210,0.12)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-[61px] flex items-center justify-between">
        <a href={LINKS.home} className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#47E27C] to-[#4ED3FB] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#071722" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
          </span>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            EPR<span className="epr-grad-text"> Token</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-code text-[#9dc3c9]">
          <a href="#models" className="hover:text-white transition-colors">{t.nav.models}</a>
          <a href="#features" className="hover:text-white transition-colors">{t.nav.features}</a>
          <a href="#start" className="hover:text-white transition-colors">{t.nav.start}</a>
          <a href="#clients" className="hover:text-white transition-colors">{t.nav.clients}</a>
          <a href="#faq" className="hover:text-white transition-colors">{t.nav.faq}</a>
          <a href={LINKS.docs} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.nav.docs}</a>
        </nav>

        <div className="flex items-center gap-3">
          {/* 语言切换 */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="inline-flex items-center gap-1.5 text-[12.5px] font-code text-[#9dc3c9] hover:text-white transition-colors border border-[rgba(120,200,210,0.25)] rounded-lg px-2.5 py-1.5"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              {current.label}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${langOpen ? 'rotate-180' : ''}`}>
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {langOpen && (
              <div
                className="absolute right-0 top-[calc(100%+8px)] min-w-[140px] rounded-xl border border-[rgba(120,200,210,0.2)] bg-[#0d2733] shadow-[0_18px_40px_rgba(0,0,0,0.5)] overflow-hidden"
                role="listbox"
              >
                {LOCALES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLocale(l.code); setLangOpen(false) }}
                    className={`w-full text-left px-4 py-2.5 text-[13px] transition-colors flex items-center justify-between gap-3 ${
                      l.code === locale
                        ? 'text-[#47E27C] bg-[rgba(71,226,124,0.08)]'
                        : 'text-[#cbe2e4] hover:bg-[rgba(120,200,210,0.08)]'
                    }`}
                    role="option"
                    aria-selected={l.code === locale}
                  >
                    {l.label}
                    {l.code === locale && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href={LINKS.login}
            className="hidden sm:inline-block text-[13px] font-code text-[#9dc3c9] hover:text-white transition-colors"
          >
            {t.nav.login}
          </a>
          <a
            href={LINKS.register}
            className="epr-btn-glow inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#47E27C] to-[#4ED3FB] px-4 py-2 text-[13px] font-semibold text-[#071722] transition-transform"
          >
            {t.nav.register}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
