import { useState, type ReactNode } from 'react'

export function AdminMockups() {
  return (
    <div className="space-y-8">
      <CrmRequestsMock />
      <AdsAdminMock />
    </div>
  )
}

function CrmShell({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-[#16306e] shadow-[0_16px_50px_-28px_rgba(8,20,60,0.9)]">
      <figcaption className="flex items-center justify-between gap-3 bg-[#0a1a4a] px-4 py-3 text-white">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
            {eyebrow}
          </p>
          <p className="text-sm font-semibold">{title}</p>
        </div>
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        </div>
      </figcaption>
      <div className="bg-[linear-gradient(160deg,#082056_0%,#0b2a7a_45%,#123a8c_100%)] p-3 md:p-4">
        {children}
      </div>
    </figure>
  )
}

function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl bg-white p-4 shadow-[0_8px_24px_-18px_rgba(8,20,60,0.8)] ${className}`}>
      {children}
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <label className="block text-xs">
      <span className="mb-1 block font-medium text-slate-700">{label}</span>
      <span className="block rounded-md border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-800">
        {value || '\u00a0'}
      </span>
    </label>
  )
}

function Pill({
  children,
  tone = 'neutral',
}: {
  children: string
  tone?: 'ok' | 'warn' | 'bad' | 'neutral' | 'info'
}) {
  const map = {
    ok: 'bg-emerald-50 text-emerald-700',
    warn: 'bg-amber-50 text-amber-800',
    bad: 'bg-rose-50 text-rose-700',
    info: 'bg-sky-50 text-sky-800',
    neutral: 'bg-slate-100 text-slate-600',
  }
  return (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ${map[tone]}`}>
      {children}
    </span>
  )
}

function CrmRequestsMock() {
  return (
    <CrmShell eyebrow="Сотрудник и админ · v1" title="Все запросы — редизайн текущего списка">
      <div className="space-y-3">
        <Card>
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-base font-semibold text-slate-900">Фильтрация</h3>
            <span className="rounded bg-rose-500 px-2 py-0.5 text-[11px] font-semibold text-white">
              сброс
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Field label="Дата" value="24.09.2026, 11:27  —  24.09.2026, 11:28" />
            <Field label="Бренд" value="dongfeng" />
            <Field label="Сайт" value="dongfeng.by" />
            <Field label="Тип запроса" value="Все" />
            <Field label="UTM метка" value="" />
            <Field label="Имя" value="" />
            <Field label="Телефон" value="" />
            <Field label="Кто создал" value="Все" />
          </div>
          <button
            type="button"
            className="mt-3 rounded-md bg-[#1d6fe8] px-10 py-2 text-sm font-semibold text-white"
          >
            Найти
          </button>
        </Card>
        <Card className="p-0">
          <div className="flex items-center justify-between px-4 py-3">
            <h3 className="text-base font-semibold text-slate-900">Список заявок</h3>
            <span className="rounded-md bg-[#f97316] px-3 py-1.5 text-[12px] font-semibold text-white">
              Скачать отчёт
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[920px] text-left text-[12px]">
              <thead className="bg-slate-50 text-[11px] uppercase tracking-wide text-slate-500">
                <tr>
                  {['ID', 'Бренд', 'Сайт', 'Тип', 'Имя', 'Телефон', 'Дата', 'UTM', 'Дилерский центр', 'Статус'].map(
                    (h) => (
                      <th key={h} className="px-3 py-2 font-semibold">
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100 bg-sky-50/80 text-slate-700">
                  <td className="px-3 py-2.5 font-medium text-slate-900">389101</td>
                  <td className="px-3 py-2.5">dongfeng</td>
                  <td className="px-3 py-2.5">dongfeng.by</td>
                  <td className="px-3 py-2.5">общие вопросы</td>
                  <td className="px-3 py-2.5">test</td>
                  <td className="px-3 py-2.5">375290000000</td>
                  <td className="px-3 py-2.5 whitespace-nowrap">24.09.2026 11:27</td>
                  <td className="px-3 py-2.5 text-slate-400">—</td>
                  <td className="px-3 py-2.5">г. Минск, ул. Каменногорская</td>
                  <td className="px-3 py-2.5">
                    <Pill tone="ok">новая</Pill>
                  </td>
                </tr>
                <tr className="border-t border-slate-100 text-slate-700">
                  <td className="px-3 py-2.5 font-medium text-slate-900">389188</td>
                  <td className="px-3 py-2.5">dongfeng</td>
                  <td className="px-3 py-2.5">dongfeng.by</td>
                  <td className="px-3 py-2.5">тест-драйв</td>
                  <td className="px-3 py-2.5">Иван Петров</td>
                  <td className="px-3 py-2.5">+375 29 123-45-67</td>
                  <td className="px-3 py-2.5 whitespace-nowrap">25.09.2026 10:12</td>
                  <td className="px-3 py-2.5">utm_source=ig</td>
                  <td className="px-3 py-2.5">Dongfeng Юг</td>
                  <td className="px-3 py-2.5">
                    <Pill tone="info">в работе</Pill>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between px-4 py-3 text-[12px] text-slate-500">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-sky-100 font-semibold text-sky-800">
              1
            </span>
            <span>Всего 2</span>
          </div>
        </Card>
        <p className="px-1 text-[11px] text-white/70">
          Было: плотная полоса без статуса и с обрезанными подписями колонок. Стало: читаемые
          заголовки, статус заявки, нормальные отступы. Дашборд на этом экране не показывается —
          он в версии 2.
        </p>
      </div>
    </CrmShell>
  )
}

function AdsAdminMock() {
  const [tab, setTab] = useState<'leads' | 'telegram' | 'campaigns'>('leads')
  const [settingsOpen, setSettingsOpen] = useState(true)

  const tabs = [
    { id: 'leads' as const, label: 'Запросы' },
    { id: 'telegram' as const, label: 'Telegram' },
    { id: 'campaigns' as const, label: 'Рекламные кампании' },
  ]

  return (
    <CrmShell eyebrow="Только админ · раздел Instagram / TikTok" title="Админка рекламных заявок">
      <div className="space-y-3">
        <div className="flex flex-wrap gap-1 rounded-xl bg-white/10 p-1">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                tab === item.id ? 'bg-white text-slate-900' : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        {tab === 'leads' ? (
          <AdsLeadsTab settingsOpen={settingsOpen} onOpenSettings={() => setSettingsOpen(true)} onCloseSettings={() => setSettingsOpen(false)} />
        ) : null}
        {tab === 'telegram' ? <TelegramTab /> : null}
        {tab === 'campaigns' ? <CampaignsTab /> : null}
      </div>
    </CrmShell>
  )
}

function AdsLeadsTab({
  settingsOpen,
  onOpenSettings,
  onCloseSettings,
}: {
  settingsOpen: boolean
  onOpenSettings: () => void
  onCloseSettings: () => void
}) {
  return (
    <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_280px]">
      <Card className="p-0">
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Запросы · Instagram и TikTok</h3>
            <p className="text-[11px] text-slate-500">Сайтовые заявки сюда не попадают. Только реклама → Telegram.</p>
          </div>
          <span className="rounded-md bg-[#f97316] px-3 py-1.5 text-[12px] font-semibold text-white">
            Скачать отчёт
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] text-left text-[12px]">
            <thead className="bg-slate-50 text-[11px] uppercase tracking-wide text-slate-500">
              <tr>
                {['Площадка', 'ID', 'Имя', 'Телефон', 'Кампания', 'Дилер', 'Статус', ''].map((h) => (
                  <th key={h || 'act'} className="px-3 py-2 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-t border-slate-100">
                <td className="px-3 py-2.5">
                  <Pill tone="info">TikTok</Pill>
                </td>
                <td className="px-3 py-2.5">TT-9182</td>
                <td className="px-3 py-2.5">Мария Смирнова</td>
                <td className="px-3 py-2.5">+375 29 330-00-14</td>
                <td className="px-3 py-2.5">Group A · Кроссовер</td>
                <td className="px-3 py-2.5">Dongfeng Центр</td>
                <td className="px-3 py-2.5">
                  <Pill tone="ok">отправлено</Pill>
                </td>
                <td className="px-3 py-2.5" />
              </tr>
              <tr className="border-t border-slate-100 bg-amber-50/60">
                <td className="px-3 py-2.5">
                  <Pill tone="info">Instagram</Pill>
                </td>
                <td className="px-3 py-2.5">2384870</td>
                <td className="px-3 py-2.5">Анна К.</td>
                <td className="px-3 py-2.5">+375 29 204-11-90</td>
                <td className="px-3 py-2.5">Весна — тест-драйв</td>
                <td className="px-3 py-2.5">Dongfeng Юг</td>
                <td className="px-3 py-2.5">
                  <Pill tone="warn">не распределён</Pill>
                </td>
                <td className="px-3 py-2.5">
                  <button
                    type="button"
                    onClick={onOpenSettings}
                    className="rounded-md border border-slate-300 px-2 py-1 text-[11px] font-semibold text-slate-800"
                  >
                    Настроить
                  </button>
                </td>
              </tr>
              <tr className="border-t border-slate-100 bg-rose-50/50">
                <td className="px-3 py-2.5">
                  <Pill tone="info">TikTok</Pill>
                </td>
                <td className="px-3 py-2.5">TT-9177</td>
                <td className="px-3 py-2.5">Павел Н.</td>
                <td className="px-3 py-2.5">+375 29 440-19-02</td>
                <td className="px-3 py-2.5">Group B · Trade-in</td>
                <td className="px-3 py-2.5">Dongfeng Юг</td>
                <td className="px-3 py-2.5">
                  <Pill tone="bad">ошибка Telegram</Pill>
                </td>
                <td className="px-3 py-2.5">
                  <button
                    type="button"
                    onClick={onOpenSettings}
                    className="rounded-md border border-slate-300 px-2 py-1 text-[11px] font-semibold text-slate-800"
                  >
                    Настроить
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
      {settingsOpen ? (
        <Card>
          <div className="mb-3 flex items-start justify-between gap-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Кампания этого запроса
              </p>
              <h4 className="text-sm font-semibold text-slate-900">Весна — тест-драйв</h4>
            </div>
            <button type="button" onClick={onCloseSettings} className="text-slate-400">
              ×
            </button>
          </div>
          <div className="space-y-3">
            <Field label="Бот" value="@dongfeng_leads_bot" />
            <Field label="Группа" value="Юг · заявки" />
            <Field label="Заголовок сообщения в Telegram" value="Новый лид · тест-драйв Юг" />
            <div>
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Предпросмотр сообщения
              </p>
              <div className="rounded-2xl rounded-tl-sm bg-[#e8def6] px-3 py-2 text-[12px] leading-5 text-slate-900">
                Новый лид · тест-драйв Юг
                <br />
                <br />
                Имя: Анна К.
                <br />
                Телефон: +375 29 204-11-90
                <br />
                Автоцентр: Dongfeng Юг
                <br />
                Площадка: Instagram
                <br />
                Кампания: Весна — тест-драйв
                <br />
                ID: 2384870
              </div>
            </div>
            <button
              type="button"
              className="w-full rounded-md border border-slate-300 py-2 text-sm font-semibold text-slate-800"
            >
              Отправить тест
            </button>
            <button
              type="button"
              className="w-full rounded-md bg-[#1d6fe8] py-2 text-sm font-semibold text-white"
            >
              Сохранить и отправить
            </button>
            <p className="text-[11px] leading-4 text-slate-500">
              Сохранение пишет бота, группу и заголовок в рекламную кампанию и сразу
              повторяет отправку этой заявки.
            </p>
          </div>
        </Card>
      ) : (
        <Card>
          <p className="text-sm text-slate-500">
            Кнопка «Настроить» есть только у статусов «не распределён» и «ошибка Telegram».
          </p>
        </Card>
      )}
    </div>
  )
}

function TelegramTab() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <Card className="p-0">
        <div className="flex items-center justify-between px-4 py-3">
          <h3 className="text-sm font-semibold text-slate-900">Боты</h3>
          <span className="rounded-md bg-[#1d6fe8] px-3 py-1 text-[12px] font-semibold text-white">
            Добавить бота
          </span>
        </div>
        <table className="w-full text-left text-[12px]">
          <thead className="bg-slate-50 text-[11px] uppercase text-slate-500">
            <tr>
              {['Имя', 'Username', 'Статус', ''].map((h) => (
                <th key={h || 'a'} className="px-3 py-2 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {[
              ['Заявки Юг', '@dongfeng_leads_bot', 'активен'],
              ['Заявки Север', '@dongfeng_north_bot', 'активен'],
              ['Старый промо', '@old_promo_bot', 'выключен'],
            ].map(([name, user, status]) => (
              <tr key={user} className="border-t border-slate-100">
                <td className="px-3 py-2.5">{name}</td>
                <td className="px-3 py-2.5">{user}</td>
                <td className="px-3 py-2.5">
                  <Pill tone={status === 'активен' ? 'ok' : 'neutral'}>{status}</Pill>
                </td>
                <td className="px-3 py-2.5 text-right text-[11px] text-sky-700">изм. · удал.</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Card className="p-0">
        <div className="flex items-center justify-between px-4 py-3">
          <h3 className="text-sm font-semibold text-slate-900">Группы</h3>
          <span className="rounded-md bg-[#1d6fe8] px-3 py-1 text-[12px] font-semibold text-white">
            Добавить группу
          </span>
        </div>
        <table className="w-full text-left text-[12px]">
          <thead className="bg-slate-50 text-[11px] uppercase text-slate-500">
            <tr>
              {['Название', 'chat_id', ''].map((h) => (
                <th key={h || 'a'} className="px-3 py-2 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {[
              ['Юг · заявки', '-1001234567890'],
              ['Север · заявки', '-1001987654321'],
              ['Юрлица', '-1001112223334'],
            ].map(([name, id]) => (
              <tr key={id} className="border-t border-slate-100">
                <td className="px-3 py-2.5">{name}</td>
                <td className="px-3 py-2.5 font-mono text-[11px]">{id}</td>
                <td className="px-3 py-2.5 text-right text-[11px] text-sky-700">изм. · удал.</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}

function CampaignsTab() {
  return (
    <div className="space-y-3">
      <CampaignTable
        title="TikTok"
        rows={[
          ['Group A · Кроссовер', '@dongfeng_leads_bot', 'Юг · заявки', 'Лид TikTok · кроссовер'],
          ['Group B · Trade-in', '@dongfeng_leads_bot', 'Юг · заявки', 'Лид TikTok · trade-in'],
        ]}
      />
      <CampaignTable
        title="Instagram"
        rows={[
          ['Весна — тест-драйв', '—', '—', '—'],
          ['Кредит 0.01%', '@dongfeng_north_bot', 'Север · заявки', 'Лид Instagram · кредит'],
        ]}
      />
      <Card>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          Форма кампании · предпросмотр Telegram
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <Field label="Название РК" value="Group A · Кроссовер" />
            <Field label="Бот" value="@dongfeng_leads_bot" />
            <Field label="Группа" value="Юг · заявки" />
            <Field label="Заголовок" value="Лид TikTok · кроссовер" />
          </div>
          <div>
            <p className="mb-1 text-[11px] font-medium text-slate-500">
              POST /campaigns/preview → пузырь, в Telegram не уходит
            </p>
            <div className="rounded-2xl rounded-tl-sm bg-[#e8def6] px-3 py-2 text-[12px] leading-5 text-slate-900">
              Лид TikTok · кроссовер
              <br />
              <br />
              Имя: Мария Смирнова
              <br />
              Телефон: +375 29 330-00-14
              <br />
              Автоцентр: Dongfeng Центр
              <br />
              Площадка: TikTok
              <br />
              Кампания: Group A · Кроссовер
              <br />
              ID: TT-9182
            </div>
            <p className="mt-2 text-[11px] text-slate-500">
              «Отправить тест» → POST /campaigns/test. Сохранить → POST /campaigns/add или PATCH /campaigns/update.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

function CampaignTable({ title, rows }: { title: string; rows: string[][] }) {
  return (
    <Card className="p-0">
      <div className="flex items-center justify-between px-4 py-3">
        <h3 className="text-sm font-semibold text-slate-900">Рекламные кампании · {title}</h3>
        <span className="rounded-md bg-[#1d6fe8] px-3 py-1 text-[12px] font-semibold text-white">
          Добавить
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-[12px]">
          <thead className="bg-slate-50 text-[11px] uppercase text-slate-500">
            <tr>
              {['Кампания', 'Бот', 'Группа', 'Заголовок', ''].map((h) => (
                <th key={h || 'a'} className="px-3 py-2 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {rows.map((row) => (
              <tr key={row[0]} className="border-t border-slate-100">
                {row.map((cell, i) => (
                  <td key={`${row[0]}-${i}`} className="px-3 py-2.5">
                    {cell}
                  </td>
                ))}
                <td className="px-3 py-2.5 text-right text-[11px] text-sky-700">изм. · удал.</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
