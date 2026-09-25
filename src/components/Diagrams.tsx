export function ArchitectureDiagram() {
  const boxes = [
    { title: 'Instagram\nLead Ads', note: 'webhook leadgen' },
    { title: 'TikTok\nLead Gen', note: 'webhook / sync' },
    { title: 'LeadRelay API', note: 'нормализация · маршруты' },
    { title: 'PostgreSQL', note: 'лиды · кампании' },
    { title: 'Очередь', note: 'отправка · ретраи' },
    { title: 'Telegram\nканал', note: 'Bot API' },
  ]

  return (
    <div className="overflow-x-auto rounded-2xl border border-rule bg-white p-4 md:p-6">
      <div className="flex min-w-[720px] items-stretch gap-2">
        {boxes.map((box, i) => (
          <div key={box.title} className="flex flex-1 items-center gap-2">
            <div className="flex h-full min-h-[108px] flex-1 flex-col justify-center rounded-xl border border-rule bg-paper px-3 py-3 text-center">
              <p className="whitespace-pre-line text-sm font-semibold text-ink">{box.title}</p>
              <p className="mt-1 text-[11px] text-ink-soft">{box.note}</p>
            </div>
            {i < boxes.length - 1 ? (
              <span aria-hidden className="text-accent">
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-ink-soft">
        Админ-панель ходит только в LeadRelay API. Платформы рекламы и Telegram с
        браузером сотрудников не связаны.
      </p>
    </div>
  )
}

export function FlowDiagram() {
  const steps = [
    {
      n: '1',
      t: 'Заявка',
      d: 'Человек отправляет форму в Instagram или TikTok.',
    },
    {
      n: '2',
      t: 'Вебхук',
      d: 'Платформа вызывает сервис. Подпись проверяется, ответ 200 сразу после постановки в обработку.',
    },
    {
      n: '3',
      t: 'Запись',
      d: 'Лид пишется в таблицу. Дубль по (platform, external_lead_id) отбрасывается.',
    },
    {
      n: '4',
      t: 'Маршрут',
      d: 'Подбирается активная внутренняя кампания: бот + канал.',
    },
    {
      n: '5',
      t: 'Telegram',
      d: 'Шаблон рендерится и уходит в канал. Статус доставки обновляется у лида.',
    },
  ]

  return (
    <ol className="grid gap-3 md:grid-cols-5">
      {steps.map((step) => (
        <li
          key={step.n}
          className="rounded-xl border border-rule bg-white p-3"
        >
          <span className="num inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink text-[11px] font-semibold text-paper">
            {step.n}
          </span>
          <h3 className="mt-2 text-sm font-semibold text-ink">{step.t}</h3>
          <p className="mt-1 text-xs leading-5 text-ink-soft">{step.d}</p>
        </li>
      ))}
    </ol>
  )
}
