import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Locale, Strings } from './types'
import { LOCALES } from './types'
import { zh } from './zh'
import { en } from './en'
import { ja } from './ja'
import { ko } from './ko'
import { es } from './es'

const DICTS: Record<Locale, Strings> = { zh, en, ja, ko, es }

interface LangCtx {
  locale: Locale
  t: Strings
  setLocale: (l: Locale) => void
}

const Ctx = createContext<LangCtx>({ locale: 'zh', t: zh, setLocale: () => {} })

function detectLocale(): Locale {
  const saved = localStorage.getItem('epr-lang')
  if (saved === 'zh' || saved === 'en' || saved === 'ja' || saved === 'ko' || saved === 'es') return saved
  const nav = navigator.language.toLowerCase()
  if (nav.startsWith('zh')) return 'zh'
  if (nav.startsWith('ja')) return 'ja'
  if (nav.startsWith('ko')) return 'ko'
  if (nav.startsWith('es')) return 'es'
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('zh')
  const t = DICTS[locale]

  useEffect(() => {
    setLocaleState(detectLocale())
  }, [])

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.title = t.seo.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.seo.description)
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute('content', t.seo.keywords)
  }, [t])

  const setLocale = (l: Locale) => {
    localStorage.setItem('epr-lang', l)
    setLocaleState(l)
  }

  return <Ctx.Provider value={{ locale, t, setLocale }}>{children}</Ctx.Provider>
}

export function useLang() {
  return useContext(Ctx)
}

export { LOCALES }
export type { Locale }
