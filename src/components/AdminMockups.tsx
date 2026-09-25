import type { ReactNode } from 'react'

const igRows = [
  ['2384921', '25.09 10:12', 'Dongfeng Юг', 'Иван Петров', '+7 900 123-45-67', 'Физлицо', 'Весна — тест-драйв', 'sent'],
  ['2384908', '25.09 09:41', 'Dongfeng Север', 'ООО «Логистика»', '+7 921 555-01-20', 'Юрлицо', 'Кредит 0.01%', 'queued'],
  ['2384870', '24.09 18:03', 'Dongfeng Юг', 'Анна К.', '+7 911 204-11-90', 'Физлицо', 'Органика · форма сайта', 'unmatched'],
]

const ttRows = [
  ['TT-9182', '25.09 11:04', 'Dongfeng Центр', 'Мария Смирнова', '+7 952 330-00-14', 'Group A · Кроссовер', 'New', 'sent'],
  ['TT-9177', '25.09 08:22', 'Dongfeng Юг', 'Павел Н.', '+7 981 440-19-02', 'Group B · Trade-in', 'New', 'failed'],
]

export function AdminMockups() {
  return (
    <div className="space-y-8">
      <LeadsMock />
      <CampaignFormMock />
      <BotsChannelsMock />
    </div>
  )
}

function Window({
  title,
  eyebrow,
  children,
}: {
  title: string
  eyebrow: string
  children: ReactNode
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-rule bg-[#f7f4ee] shadow-[0_12px_40px_-24px_rgba(26,23,20,0.45)]">
      <figcaption className="flex items-center justify-between gap-3 border-b border-rule bg-white px-4 py-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
            {eyebrow}
          </p>
          <p className="text-sm font-semibold text-ink">{title}</p>
        </div>
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-rule" />
          <span className="h-2.5 w-2.5 rounded-full bg-rule" />
          <span className="h-2.5 w-2.5 rounded-full bg-rule" />
        </div>
      </figcaption>
      {children}
    </figure>
  )
}

function Pill({
  children,
  tone = 'neutral',
}: {
  children: string
  tone?: 'ok' | 'warn' | 'bad' | 'neutral'
}) {
  const map = {
    ok: 'bg-teal/10 text-teal',
    warn: 'bg-amber-100 text-amber-800',
    bad: 'bg-accent/10 text-accent-2',
    neutral: 'bg-paper-2 text-ink-soft',
  }
  return (
    <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${map[tone]}`}>
      {children}
    </span>
  )
}

function LeadsMock() {
  return (
    <Window eyebrow="Экран · Запросы" title="Таблица лидов с переключением платформы">
      <div className="space-y-3 p-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-lg bg-ink px-3 py-1.5 text-xs text-paper">Все</span>
          <span className="rounded-lg border border-rule bg-white px-3 py-1.5 text-xs text-ink">
            Instagram
          </span>
          <span className="rounded-lg border border-rule bg-white px-3 py-1.5 text-xs text-ink">
            TikTok
          </span>
          <span className="rounded-lg border border-rule bg-white px-3 py-1.5 text-xs text-ink-soft">
            Период: 7 дней
          </span>
          <span className="rounded-lg border border-rule bg-white px-3 py-1.5 text-xs text-ink-soft">
            Статус доставки
          </span>
        </div>
        <p className="text-xs font-medium text-ink">Вид Instagram</p>
        <div className="overflow-x-auto rounded-lg border border-rule bg-white">
          <table className="w-full min-w-[760px] text-left text-[11px]">
            <thead className="bg-paper-2 text-ink">
              <tr>
                {['id', 'created_time', 'автоцентр', 'полное_имя', 'телефон', 'физ/юр', 'campaign_name', 'delivery'].map(
                  (h) => (
                    <th key={h} className="px-2 py-2 font-semibold">
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {igRows.map((row) => (
                <tr key={row[0]} className="border-t border-rule text-ink-soft">
                  {row.map((cell, i) => (
                    <td key={i} className="px-2 py-2">
                      {i === 7 ? (
                        <Pill tone={cell === 'sent' ? 'ok' : cell === 'unmatched' ? 'warn' : 'neutral'}>
                          {cell}
                        </Pill>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs font-medium text-ink">Вид TikTok</p>
        <div className="overflow-x-auto rounded-lg border border-rule bg-white">
          <table className="w-full min-w-[760px] text-left text-[11px]">
            <thead className="bg-paper-2 text-ink">
              <tr>
                {['TikTok Lead ID', 'Data', 'Dealer', 'Name', 'Phone', 'Group Ads', 'Lead Status', 'delivery'].map(
                  (h) => (
                    <th key={h} className="px-2 py-2 font-semibold">
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {ttRows.map((row) => (
                <tr key={row[0]} className="border-t border-rule text-ink-soft">
                  {row.map((cell, i) => (
                    <td key={i} className="px-2 py-2">
                      {i === 7 ? (
                        <Pill tone={cell === 'sent' ? 'ok' : 'bad'}>{cell}</Pill>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Window>
  )
}

function CampaignFormMock() {
  return (
    <Window eyebrow="Экран · Кампании" title="Создание маршрута: бот и канал обязательны">
      <div className="grid gap-4 p-4 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <label className="block text-xs">
            <span className="mb-1 block font-medium text-ink">Название</span>
            <span className="block rounded-lg border border-rule bg-white px-3 py-2 text-sm text-ink">
              Dongfeng Юг · Instagram тест-драйв
            </span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="block text-xs">
              <span className="mb-1 block font-medium text-ink">Платформа</span>
              <span className="block rounded-lg border border-rule bg-white px-3 py-2 text-sm text-ink">
                Instagram
              </span>
            </label>
            <label className="block text-xs">
              <span className="mb-1 block font-medium text-ink">Статус</span>
              <span className="block rounded-lg border border-rule bg-white px-3 py-2 text-sm text-ink">
                Активна
              </span>
            </label>
          </div>
          <label className="block text-xs">
            <span className="mb-1 block font-medium text-ink">Условие: campaign_id Meta</span>
            <span className="block rounded-lg border border-rule bg-white px-3 py-2 font-mono text-sm text-ink">
              12021099887766
            </span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="block text-xs">
              <span className="mb-1 block font-medium text-accent-2">Telegram-бот *</span>
              <span className="block rounded-lg border border-accent/40 bg-white px-3 py-2 text-sm text-ink">
                @dongfeng_leads_bot
              </span>
            </label>
            <label className="block text-xs">
              <span className="mb-1 block font-medium text-accent-2">Telegram-канал *</span>
              <span className="block rounded-lg border border-accent/40 bg-white px-3 py-2 text-sm text-ink">
                Юг · заявки
              </span>
            </label>
          </div>
        </div>
        <div className="rounded-xl border border-dashed border-rule bg-white p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
            Предпросмотр сообщения
          </p>
          <div className="mt-2 rounded-2xl rounded-tl-sm bg-[#e8def6] px-3 py-2 text-[12px] leading-5 text-ink">
            🆕 Новый лид · Instagram
            <br />
            <br />
            Имя: Иван Петров
            <br />
            Телефон: +7 900 123-45-67
            <br />
            Автоцентр: Dongfeng Юг
            <br />
            Тип: Физическое лицо
            <br />
            <br />
            Кампания: Весна — тест-драйв
            <br />
            Объявление: Кроссовер — кредит
          </div>
          <p className="mt-3 text-[11px] text-ink-soft">
            Кнопки формы: Сохранить, Отправить тест в канал, Архивировать.
          </p>
        </div>
      </div>
    </Window>
  )
}

function BotsChannelsMock() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Window eyebrow="Экран · Боты" title="Telegram-боты">
        <ul className="divide-y divide-rule bg-white text-sm">
          {[
            ['@dongfeng_leads_bot', 'Активен · getMe ok'],
            ['@dongfeng_north_bot', 'Активен · getMe ok'],
            ['@old_promo_bot', 'Выключен · токен отозван'],
          ].map(([n, s]) => (
            <li key={n} className="flex items-center justify-between px-4 py-3">
              <span className="font-medium text-ink">{n}</span>
              <span className="text-xs text-ink-soft">{s}</span>
            </li>
          ))}
        </ul>
        <p className="border-t border-rule px-4 py-2 text-[11px] text-ink-soft">
          Действия: добавить, проверить, редактировать имя, удалить если нет активных кампаний.
        </p>
      </Window>
      <Window eyebrow="Экран · Каналы" title="Telegram-каналы">
        <ul className="divide-y divide-rule bg-white text-sm">
          {[
            ['Юг · заявки', '-1001234567890'],
            ['Север · заявки', '-1001987654321'],
            ['Юрлица', '-1001112223334'],
          ].map(([n, id]) => (
            <li key={n} className="flex items-center justify-between px-4 py-3">
              <span className="font-medium text-ink">{n}</span>
              <span className="font-mono text-[11px] text-ink-soft">{id}</span>
            </li>
          ))}
        </ul>
        <p className="border-t border-rule px-4 py-2 text-[11px] text-ink-soft">
          Действия: добавить chat_id, проверить право публикации, редактировать, удалить.
        </p>
      </Window>
    </div>
  )
}
