import { LINKS } from '@/data/site'
import { useLang } from '@/i18n'

export default function Footer() {
  const { t } = useLang()
  const fl = t.footer.links
  return (
    <footer className="bg-[var(--epr-bg-deep)] border-t border-[rgba(120,200,210,0.12)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <a href={LINKS.home} className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#47E27C] to-[#4ED3FB] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#071722" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
              </svg>
            </span>
            <span className="font-display font-bold text-lg text-white">
              EPR<span className="epr-grad-text"> Token</span>
            </span>
          </a>
          <p className="mt-5 max-w-xs text-[13px] leading-[1.9] text-[#5e7f86]">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h4 className="font-code text-[11px] tracking-[0.2em] uppercase text-[#5e7f86] mb-5">{t.footer.product}</h4>
          <ul className="space-y-3 text-[13.5px] text-[#9dc3c9]">
            <li><a className="hover:text-white transition-colors" href={LINKS.pricing}>{fl.pricing}</a></li>
            <li><a className="hover:text-white transition-colors" href={LINKS.console}>{fl.console}</a></li>
            <li><a className="hover:text-white transition-colors" href={LINKS.token}>{fl.token}</a></li>
            <li><a className="hover:text-white transition-colors" href={LINKS.topup}>{fl.topup}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-code text-[11px] tracking-[0.2em] uppercase text-[#5e7f86] mb-5">{t.footer.resources}</h4>
          <ul className="space-y-3 text-[13.5px] text-[#9dc3c9]">
            <li><a className="hover:text-white transition-colors" href={LINKS.docs}>{fl.docs}</a></li>
            <li><a className="hover:text-white transition-colors" href={`${LINKS.docs}/apps/cherry-studio`}>{fl.cherry}</a></li>
            <li><a className="hover:text-white transition-colors" href={LINKS.about}>{fl.about}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-code text-[11px] tracking-[0.2em] uppercase text-[#5e7f86] mb-5">{t.footer.start}</h4>
          <ul className="space-y-3 text-[13.5px] text-[#9dc3c9]">
            <li><a className="hover:text-white transition-colors" href={LINKS.register}>{fl.register}</a></li>
            <li><a className="hover:text-white transition-colors" href={LINKS.login}>{fl.login}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[rgba(120,200,210,0.1)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-code text-[11.5px] text-[#3f5e66]">
            {t.footer.copyright}
          </p>
          <p className="font-code text-[11.5px] text-[#3f5e66]">
            {t.footer.note}{' '}
            <a href={LINKS.home} className="text-[#4ED3FB] hover:underline">eprtoken.com</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
