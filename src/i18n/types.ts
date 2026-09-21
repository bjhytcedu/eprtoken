export type Locale = 'zh' | 'en' | 'ja' | 'ko' | 'es'

export const LOCALES: { code: Locale; label: string; htmlLang: string }[] = [
  { code: 'zh', label: '简体中文', htmlLang: 'zh-CN' },
  { code: 'en', label: 'English', htmlLang: 'en' },
  { code: 'ja', label: '日本語', htmlLang: 'ja' },
  { code: 'ko', label: '한국어', htmlLang: 'ko' },
  { code: 'es', label: 'Español', htmlLang: 'es' },
]

export interface FeatureItem {
  accent: 'green' | 'purple' | 'blue' | 'gold'
  title: string
  desc: string
  code: string
}

export interface StepItem {
  title: string
  desc: string
  linkText: string
  linkKey: 'register' | 'token' | 'docs'
}

export interface ClientItem {
  name: string
  kind: string
  desc: string
}

export interface FaqItem {
  q: string
  a: string
  linkText?: string
  linkKey?: 'pricing' | 'docs'
}

export interface ModelGroupItem {
  vendor: string
  tint: string
  models: string[]
}

export interface Strings {
  htmlLang: string
  seo: { title: string; description: string; keywords: string }
  nav: {
    models: string
    features: string
    start: string
    clients: string
    faq: string
    docs: string
    login: string
    register: string
  }
  hero: {
    kicker: string
    title1: string
    title2: string
    descPre: string
    descMid: string
    descPost: string
    ctaPrimary: string
    ctaSecondary: string
    stats: [string, string][]
  }
  terminal: {
    title: string
    badge: string
    comment: string
    stream: string
    online: string
    latency: string
  }
  models: {
    kicker: string
    title: string
    desc: string
    countSuffix: string
    moreTitle: string
    groups: ModelGroupItem[]
  }
  features: {
    kicker: string
    title1: string
    title2: string
    items: FeatureItem[]
  }
  steps: {
    kicker: string
    title: string
    items: StepItem[]
  }
  clients: {
    kicker: string
    title1: string
    title2: string
    tutorial: string
    items: ClientItem[]
  }
  faq: {
    kicker: string
    title: string
    items: FaqItem[]
  }
  cta: {
    kicker: string
    title1: string
    title2: string
    desc: string
    primary: string
    secondary: string
  }
  footer: {
    tagline: string
    product: string
    resources: string
    start: string
    links: {
      pricing: string
      console: string
      token: string
      topup: string
      docs: string
      cherry: string
      about: string
      register: string
      login: string
    }
    copyright: string
    note: string
  }
}
