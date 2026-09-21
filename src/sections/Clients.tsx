import { LINKS } from '@/data/site'
import { useLang } from '@/i18n'

export default function Clients() {
  const { t } = useLang()
  return (
    <section id="clients" className="relative bg-[var(--epr-bg-deep)] overflow-hidden">
      <div className="absolute inset-0 epr-dotgrid opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-[120px]">
        <p className="font-code text-[12px] tracking-[0.25em] uppercase text-[#4ED3FB] mb-4">
          {t.clients.kicker}
        </p>
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <h2 className="font-display font-extrabold text-white text-[clamp(1.9rem,4vw,3rem)] leading-tight tracking-tight">
            {t.clients.title1}
            <br />
            <span className="epr-grad-text">{t.clients.title2}</span>
          </h2>
          <a
            href={LINKS.docs}
            className="inline-flex items-center gap-2 font-code text-[13px] text-[#9dc3c9] hover:text-white transition-colors"
          >
            {t.clients.tutorial}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.clients.items.map((c) => (
            <div
              key={c.name}
              className="epr-lift rounded-xl border border-[rgba(120,200,210,0.16)] bg-[rgba(15,42,56,0.55)] backdrop-blur-sm p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-code text-[10.5px] px-2 py-0.5 rounded border border-[rgba(78,211,251,0.3)] text-[#4ED3FB]">
                  {c.kind}
                </span>
              </div>
              <h3 className="font-display font-bold text-white text-[16.5px] mb-2">{c.name}</h3>
              <p className="text-[13px] leading-relaxed text-[#7fa3a8]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
