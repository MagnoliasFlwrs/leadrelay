import type { ReactNode } from 'react'

export function Req({
  id,
  title,
  priority = 'must',
  children,
}: {
  id: string
  title: string
  priority?: 'must' | 'should' | 'could'
  children: ReactNode
}) {
  const label =
    priority === 'must' ? 'Must' : priority === 'should' ? 'Should' : 'Could'
  const tone =
    priority === 'must'
      ? 'bg-accent/10 text-accent-2'
      : priority === 'should'
        ? 'bg-teal/10 text-teal'
        : 'bg-paper-2 text-ink-soft'

  return (
    <article className="rounded-xl border border-rule bg-white/70 p-4 shadow-[0_1px_0_rgba(26,23,20,0.04)]">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <code className="num rounded bg-ink px-1.5 py-0.5 text-[11px] font-semibold tracking-wide text-paper">
          {id}
        </code>
        <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${tone}`}>
          {label}
        </span>
        <h3 className="text-[15px] font-semibold text-ink">{title}</h3>
      </div>
      <div className="text-sm leading-relaxed text-ink-soft">{children}</div>
    </article>
  )
}

export function Callout({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <aside className="border-l-2 border-accent bg-accent/5 px-4 py-3">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent-2">
        {title}
      </p>
      <div className="text-sm leading-relaxed text-ink-soft">{children}</div>
    </aside>
  )
}

export function DataTable({
  columns,
  rows,
  caption,
}: {
  columns: string[]
  rows: ReactNode[][]
  caption?: string
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-rule bg-white">
      {caption ? (
        <p className="border-b border-rule px-4 py-2 text-xs font-medium uppercase tracking-wider text-ink-soft">
          {caption}
        </p>
      ) : null}
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-paper-2/80">
            {columns.map((col) => (
              <th
                key={col}
                className="whitespace-nowrap px-3 py-2.5 font-semibold text-ink"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-rule align-top">
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2.5 text-ink-soft">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string
  kicker: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-5">
      <header className="border-b border-rule pb-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {kicker}
        </p>
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {title}
        </h2>
      </header>
      {children}
    </section>
  )
}
