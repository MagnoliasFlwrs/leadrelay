import { useEffect, useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { SpecSections } from './spec/Sections'
import { NAV } from './spec/nav'

export default function App() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('passport')

  useEffect(() => {
    const ids = NAV.map((item) => item.id)
    const observers: IntersectionObserver[] = []

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    observers.push(io)
    return () => observers.forEach((item) => item.disconnect())
  }, [])

  return (
    <div className="min-h-svh bg-paper">
      <Sidebar active={active} open={open} onClose={() => setOpen(false)} />
      <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-rule bg-paper/90 px-4 py-3 backdrop-blur md:hidden">
        <button
          type="button"
          className="rounded-md border border-rule px-3 py-1.5 text-sm"
          onClick={() => setOpen(true)}
        >
          Разделы
        </button>
        <p className="font-serif text-lg text-ink">LeadRelay · ТЗ</p>
      </header>
      <main className="md:pl-[272px]">
        <div className="mx-auto max-w-4xl px-4 py-10 md:px-10 md:py-14">
          <SpecSections />
          <footer className="mt-20 border-t border-rule pt-6 text-sm text-ink-soft">
            Каноническая копия:{' '}
            <a className="font-medium text-accent-2 underline decoration-rule underline-offset-4" href="/TZ.md">
              скачать TZ.md
            </a>
            . Документ можно отдать команде как постановку на фронт и бэк.
          </footer>
        </div>
      </main>
    </div>
  )
}
