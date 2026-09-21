import { TICKER_MODELS, LINKS } from '@/data/site'
import { useLang } from '@/i18n'

export function Ticker() {
  const doubled = [...TICKER_MODELS, ...TICKER_MODELS]
  return (
    <div className="epr-marquee-mask overflow-hidden py-5 border-y border-[rgba(120,200,210,0.12)] bg-[var(--epr-bg-deep)]">
      <div className="epr-marquee-track gap-3 px-3">
        {doubled.map((m, i) => (
          <span
            key={`${m}-${i}`}
            className="font-code text-[12px] text-[#9dc3c9] px-4 py-1.5 rounded-full border border-[rgba(120,200,210,0.18)] bg-[rgba(15,42,56,0.6)] whitespace-nowrap hover:text-[#47E27C] hover:border-[rgba(71,226,124,0.4)] transition-colors"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Models() {
  const { t } = useLang()
  return (
    <section id="models" className="epr-skew bg-[var(--epr-light)] -mt-[46px] -mb-[46px] relative z-10">
      <div className="epr-unskew mx-auto max-w-7xl px-5 md:px-8 pt-[110px] pb-[110px] text-[var(--epr-light-text)]">
        <p className="font-code text-[12px] tracking-[0.25em] uppercase text-[#0e6ebd] mb-4">
          {t.models.kicker}
        </p>
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <h2 className="font-display font-extrabold text-[clamp(1.9rem,4vw,3rem)] leading-tight tracking-tight">
            {t.models.title}
          </h2>
          <p className="max-w-md text-[14.5px] leading-relaxed text-[#4a6a72]">
            {t.models.desc}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {t.models.groups.map((g) => (
            <div
              key={g.vendor}
              className="epr-lift rounded-xl bg-white border border-[#dfe9ec] p-5"
              style={{ boxShadow: '0 4px 14px rgba(10,40,55,0.06)' }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span
                  className="w-2.5 h-2.5 rounded-[3px]"
                  style={{ background: g.tint }}
                />
                <h3 className="font-display font-bold text-[15px]">{g.vendor}</h3>
                <span className="ml-auto font-code text-[10.5px] text-[#8aa3a8]">
                  {g.models.length} {t.models.countSuffix}
                </span>
              </div>
              <ul className="space-y-2">
                {g.models.map((m) => (
                  <li key={m} className="font-code text-[12px] text-[#33555e] flex items-center gap-2">
                    <span className="text-[#8aa3a8]">▸</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 查看完整定价卡片 */}
          <a
            href={LINKS.pricing}
            className="epr-lift rounded-xl border-2 border-dashed border-[#b9d3d9] p-5 flex flex-col justify-center items-center text-center gap-3 hover:bg-white transition-colors"
          >
            <span className="font-display font-bold text-[15px] text-[#0e6ebd]">
              {t.models.moreTitle}
            </span>
            <span className="inline-flex items-center gap-1.5 font-code text-[12px] text-[#4a6a72]">
              eprtoken.com/pricing
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
