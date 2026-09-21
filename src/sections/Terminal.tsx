import { useEffect, useMemo, useState } from 'react'
import { useLang } from '@/i18n'

interface Line {
  prompt?: boolean
  html: string
  delay: number
}

const LINES: Line[] = [
  {
    prompt: true,
    html: `<span class="tok-cmd">curl</span> <span class="tok-body">https://eprtoken.com/v1/chat/completions</span> \\`,
    delay: 500,
  },
  {
    html: `  <span class="tok-flag">-H</span> <span class="tok-str">"Authorization: Bearer sk-epr-••••••••"</span> \\`,
    delay: 1300,
  },
  {
    html: `  <span class="tok-flag">-d</span> <span class="tok-str">'{"model": "<span class="tok-key">Kimi-K3</span>", "messages": [{"role":"user","content":"..."}]}'</span>`,
    delay: 2100,
  },
]

export default function Terminal() {
  const { t } = useLang()
  const [visibleLines, setVisibleLines] = useState(0)
  const [streamed, setStreamed] = useState(0)
  const [started, setStarted] = useState(false)

  const streamText = useMemo(
    () => `{"choices":[{"delta":{"content":"${t.terminal.stream}"}}]}`,
    [t.terminal.stream]
  )

  useEffect(() => {
    const timers = LINES.map((l, i) =>
      window.setTimeout(() => setVisibleLines(i + 1), l.delay)
    )
    const startStream = window.setTimeout(() => setStarted(true), 3300)
    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(startStream)
    }
  }, [])

  useEffect(() => {
    setStreamed(0)
  }, [t.terminal.stream])

  useEffect(() => {
    if (!started) return
    if (streamed >= streamText.length) return
    const timer = window.setTimeout(() => setStreamed((s) => s + 3), 28)
    return () => clearTimeout(timer)
  }, [started, streamed, streamText.length])

  const streamHtml = useMemo(() => {
    const text = streamText.slice(0, streamed)
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/content/g, '<span class="tok-key">content</span>')
  }, [streamed, streamText])

  return (
    <div className="epr-perspective-wrap">
      <div className="epr-terminal epr-terminal-3d font-code text-[12px] md:text-[12.5px] leading-[1.85]">
        {/* 窗口栏 */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(120,200,210,0.14)]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[11px] text-[#5e7f86] tracking-wide">
            {t.terminal.title}
          </span>
          <span className="ml-auto text-[10px] px-2 py-0.5 rounded border border-[rgba(71,226,124,0.35)] text-[#47E27C]">
            {t.terminal.badge}
          </span>
        </div>

        <div className="px-5 py-4 min-h-[300px] md:min-h-[330px]">
          {LINES.slice(0, visibleLines).map((l, i) => (
            <div key={i} className="epr-chunk whitespace-pre-wrap break-all">
              {l.prompt && <span className="tok-key mr-2">➜ ~</span>}
              <span dangerouslySetInnerHTML={{ __html: l.html }} />
            </div>
          ))}

          {visibleLines >= LINES.length && (
            <div className="epr-chunk whitespace-pre-wrap break-all">
              <span className="tok-dim">{t.terminal.comment}</span>
            </div>
          )}

          {started && (
            <div className="epr-chunk mt-1 whitespace-pre-wrap break-all">
              <span className="tok-body" dangerouslySetInnerHTML={{ __html: streamHtml }} />
              {streamed < streamText.length && <span className="epr-cursor" />}
            </div>
          )}
          {streamed >= streamText.length && (
            <div className="epr-chunk mt-2">
              <span className="tok-key mr-2">➜ ~</span>
              <span className="epr-cursor" />
            </div>
          )}
        </div>

        {/* 底部状态条 */}
        <div className="flex items-center gap-4 px-5 py-2.5 border-t border-[rgba(120,200,210,0.14)] text-[10.5px] text-[#5e7f86]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#47E27C] animate-pulse" />
            {t.terminal.online}
          </span>
          <span>{t.terminal.latency}</span>
          <span className="ml-auto">https://eprtoken.com/v1</span>
        </div>
      </div>
    </div>
  )
}
