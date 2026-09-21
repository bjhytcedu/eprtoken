import { useLang } from '@/i18n'

const BORDER_CLASS: Record<string, string> = {
  green: 'epr-h3-green',
  purple: 'epr-h3-purple',
  blue: 'epr-h3-blue',
  gold: 'epr-h3-gold',
}

const TINT: Record<string, string> = {
  green: '#47E27C',
  purple: '#d573d7',
  blue: '#4ED3FB',
  gold: '#e8c84a',
}

export default function Features() {
  const { t } = useLang()
  return (
    <section id="features" className="relative bg-[var(--epr-bg)] overflow-hidden">
      <div className="epr-ghost top-10 right-[-4vw]">GATEWAY</div>
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-[120px]">
        <p className="font-code text-[12px] tracking-[0.25em] uppercase text-[#4ED3FB] mb-4">
          {t.features.kicker}
        </p>
        <h2 className="font-display font-extrabold text-white text-[clamp(1.9rem,4vw,3rem)] leading-tight tracking-tight mb-16">
          {t.features.title1}
          <br />
          <span className="epr-grad-text">{t.features.title2}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-x-14 gap-y-14">
          {t.features.items.map((f, i) => (
            <article key={f.title} className="group">
              <div className={`pl-5 ${BORDER_CLASS[f.accent]} mb-4`}>
                <span className="font-code text-[11px] text-[#5e7f86] tracking-widest">
                  0{i + 1}
                </span>
                <h3 className="font-display font-bold text-white text-[21px] mt-1">
                  {f.title}
                </h3>
              </div>
              <p className="text-[14.5px] leading-[1.9] text-[#9dc3c9] mb-5">
                {f.desc}
              </p>
              <div className="epr-terminal !rounded-lg px-4 py-3 font-code text-[12.5px]">
                <span style={{ color: TINT[f.accent] }}>{f.code}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
