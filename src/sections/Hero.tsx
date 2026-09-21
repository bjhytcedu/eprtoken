import { LINKS } from '@/data/site'
import { useLang } from '@/i18n'
import Terminal from './Terminal'

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="relative epr-hero-bg overflow-hidden">
      <div className="absolute inset-0 epr-grid-lines" />
      <div className="epr-ghost top-6 left-[-2vw]">UNIFIED&nbsp;AI&nbsp;HUB</div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-[150px] pb-[130px] grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
        {/* 左侧：大字标题 */}
        <div>
          <p className="epr-chunk font-code text-[12px] tracking-[0.25em] text-[#4ED3FB] uppercase mb-6 flex items-center gap-3" style={{ animationDelay: '100ms' }}>
            <span className="inline-block w-8 h-px bg-[#4ED3FB]" />
            {t.hero.kicker}
          </p>

          <h1 className="font-display font-extrabold text-white leading-[1.08] tracking-tight text-[clamp(2.4rem,4.9vw,4.1rem)]">
            <span className="epr-chunk block" style={{ animationDelay: '220ms' }}>{t.hero.title1}</span>
            <span className="epr-chunk block epr-grad-text" style={{ animationDelay: '380ms' }}>
              {t.hero.title2}
            </span>
          </h1>

          <p className="epr-chunk mt-7 max-w-xl text-[15.5px] md:text-[17px] leading-[1.9] text-[#9dc3c9]" style={{ animationDelay: '560ms' }}>
            {t.hero.descPre}{' '}
            <b className="text-white font-semibold">{t.hero.descMid}</b>{' '}
            {t.hero.descPost}
          </p>

          <div className="epr-chunk mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: '720ms' }}>
            <a
              href={LINKS.register}
              className="epr-btn-glow inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#47E27C] to-[#4ED3FB] px-7 py-3.5 text-[15px] font-bold text-[#071722]"
            >
              {t.hero.ctaPrimary}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href={LINKS.pricing}
              className="inline-flex items-center gap-2 rounded-xl border border-[rgba(120,200,210,0.3)] px-7 py-3.5 text-[15px] font-semibold text-[#cbe2e4] hover:border-[rgba(78,211,251,0.6)] hover:text-white transition-colors"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="epr-chunk mt-12 flex flex-wrap gap-x-10 gap-y-4" style={{ animationDelay: '880ms' }}>
            {t.hero.stats.map(([num, label]) => (
              <div key={label}>
                <div className="font-display font-bold text-[26px] epr-grad-text">{num}</div>
                <div className="mt-1 text-[12px] font-code text-[#5e7f86] tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 右侧：3D 终端 */}
        <div className="epr-chunk hidden md:block" style={{ animationDelay: '480ms' }}>
          <Terminal />
        </div>
      </div>
    </section>
  )
}
