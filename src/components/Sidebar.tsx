import { NAV } from '../spec/nav'

export function Sidebar({
  active,
  open,
  onClose,
}: {
  active: string
  open: boolean
  onClose: () => void
}) {
  const groups = [...new Set(NAV.map((item) => item.group))]

  return (
    <>
      {open ? (
        <button
          type="button"
          aria-label="Закрыть меню"
          className="fixed inset-0 z-30 bg-ink/40 md:hidden"
          onClick={onClose}
        />
      ) : null}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[272px] flex-col bg-sidebar text-paper transition-transform md:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="border-b border-white/10 px-5 py-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/50">
            Техническое задание
          </p>
          <p className="mt-2 font-serif text-2xl leading-none text-paper">Notify 2.0</p>
          <p className="mt-2 text-xs leading-snug text-paper/55">
            Приём лидов Instagram и TikTok и перенаправление в Telegram
          </p>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {groups.map((group) => (
            <div key={group} className="mb-5">
              <p className="mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-paper/40">
                {group}
              </p>
              <ul className="space-y-0.5">
                {NAV.filter((item) => item.group === group).map((item) => {
                  const isActive = active === item.id
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={onClose}
                        className={`block rounded-md px-2 py-1.5 text-[13px] leading-snug transition ${
                          isActive
                            ? 'bg-white/10 font-medium text-paper'
                            : 'text-paper/65 hover:bg-white/5 hover:text-paper'
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>
        <div className="border-t border-white/10 px-5 py-4 text-[11px] text-paper/45">
          Версия 1.2 · 25 сентября 2026
        </div>
      </aside>
    </>
  )
}
