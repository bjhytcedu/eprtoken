import { LINKS } from '@/data/site'
import { useLang } from '@/i18n'

export default function Cta() {
  const { t } = useLang()
  return (
    <section className="relative epr-hero-bg overflow-hidden">
      <div className="absolute inset-0 epr-grid-lines" />
      <div className="relative mx-auto max-w-5xl px-5 md:px-8 py-[130px] text-center">
        <p className="font-code text-[12px] tracking-[0.25em] uppercase text-[#4ED3FB] mb-6">
          {t.cta.kicker}
        </p>
        <h2 className="font-display font-extrabold text-white leading-[1.15] tracking-tight text-[clamp(2.2rem,5vw,4rem)]">
          {t.cta.title1}
          <br />
          <span className="epr-grad-text">{t.cta.title2}</span>
        </h2>
        <p className="mt-7 mx-auto max-w-xl text-[15.5px] leading-[1.9] text-[#9dc3c9]">
          {t.cta.desc}
        </p>
        <div className="mt-11 flex flex-wrap justify-center gap-4">
          <a
            href={LINKS.register}
            className="epr-btn-glow inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#47E27C] to-[#4ED3FB] px-9 py-4 text-[16px] font-bold text-[#071722]"
          >
            {t.cta.primary}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href={LINKS.docs}
            className="inline-flex items-center gap-2 rounded-xl border border-[rgba(120,200,210,0.3)] px-9 py-4 text-[16px] font-semibold text-[#cbe2e4] hover:border-[rgba(78,211,251,0.6)] hover:text-white transition-colors"
          >
            {t.cta.secondary}
          </a>
        </div>
      </div>
    </section>
  )
}
