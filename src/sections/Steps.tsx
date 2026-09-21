import { LINKS } from '@/data/site'
import { useLang } from '@/i18n'

export default function Steps() {
  const { t } = useLang()
  return (
    <section id="start" className="epr-skew bg-[var(--epr-light)] -mt-[46px] -mb-[46px] relative z-10">
      <div className="epr-unskew mx-auto max-w-7xl px-5 md:px-8 pt-[110px] pb-[120px] text-[var(--epr-light-text)]">
        <p className="font-code text-[12px] tracking-[0.25em] uppercase text-[#0e6ebd] mb-4">
          {t.steps.kicker}
        </p>
        <h2 className="font-display font-extrabold text-[clamp(1.9rem,4vw,3rem)] leading-tight tracking-tight mb-16">
          {t.steps.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {t.steps.items.map((s, i) => (
            <div key={s.title} className="relative">
              {i < t.steps.items.length - 1 && (
                <div className="hidden md:block absolute top-9 left-[calc(100%-20px)] w-10 h-px bg-[#b9d3d9]" />
              )}
              <div
                className="epr-lift h-full rounded-xl bg-white border border-[#dfe9ec] p-7 flex flex-col"
                style={{ boxShadow: '0 4px 14px rgba(10,40,55,0.06)' }}
              >
                <span className="font-display font-extrabold text-[44px] leading-none bg-gradient-to-r from-[#23a460] to-[#0e6ebd] bg-clip-text text-transparent">
                  0{i + 1}
                </span>
                <h3 className="font-display font-bold text-[19px] mt-5 mb-3">{s.title}</h3>
                <p className="text-[14px] leading-[1.85] text-[#4a6a72] flex-1">{s.desc}</p>
                <a
                  href={LINKS[s.linkKey]}
                  className="mt-6 inline-flex items-center gap-1.5 font-code text-[12.5px] font-semibold text-[#0e6ebd] hover:gap-3 transition-all"
                >
                  {s.linkText}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
