import type { ReactNode } from 'react'
import { Callout, DataTable, Req, Section } from '../components/ui'
import { AdminMockups } from '../components/AdminMockups'
import { ArchitectureDiagram, FlowDiagram } from '../components/Diagrams'

export function SpecSections() {
  return (
    <div className="space-y-20">
      <Passport />
      <Goal />
      <Glossary />
      <Roles />
      <Architecture />
      <Flows />
      <Leads />
      <Instagram />
      <TikTok />
      <Telegram />
      <Campaigns />
      <Admin />
      <Mockups />
      <Model />
      <Api />
      <Nfr />
      <Plan />
    </div>
  )
}

function P({ children }: { children: ReactNode }) {
  return <p className="text-[15px] leading-7 text-ink-soft">{children}</p>
}

function Passport() {
  return (
    <section id="passport" className="scroll-mt-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        ТЗ-LR-001 · к согласованию
      </p>
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-ink md:text-[3.25rem] md:leading-[1.12]">
        Сервис маршрутизации лидов Instagram и TikTok в Telegram
      </h1>
      <P>
        Документ описывает фронтенд (админ-панель) и бэкенд сервиса, который
        принимает рекламные заявки из Instagram Lead Ads и TikTok Lead
        Generation, хранит их в единой таблице и пересылает в выбранный
        Telegram-бот и Telegram-канал в зависимости от рекламной кампании.
      </P>
      <dl className="mt-8 grid gap-3 sm:grid-cols-2">
        {[
          ['Заказчик / контекст', 'Автоцентры Dongfeng: лиды с форм записи и подбора дилера'],
          ['Код документа', 'ТЗ-LR-001'],
          ['Версия', '1.0 от 25 сентября 2026'],
          ['Статус', 'Черновик к согласованию'],
          ['Платформы-источники', 'Instagram (Meta Lead Ads), TikTok Lead Generation'],
          ['Канал доставки', 'Telegram Bot API → канал или чат'],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl border border-rule bg-white/60 px-4 py-3">
            <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-soft">{k}</dt>
            <dd className="mt-1 text-sm font-medium text-ink">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function Goal() {
  return (
    <Section id="goal" kicker="01" title="Цель и границы проекта">
      <P>
        Цель — собрать все заявки с рекламы Instagram и TikTok в одном сервисе,
        показать их менеджеру в таблице и автоматически отправить в Telegram
        тому боту и в тот канал, которые привязаны к конкретной рекламной
        кампании.
      </P>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-rule bg-white p-4">
          <h3 className="mb-2 text-sm font-semibold text-ink">Входит в первую версию</h3>
          <ul className="list-disc space-y-1.5 pl-4 text-sm text-ink-soft">
            <li>Приём вебхуков Instagram и TikTok и сохранение лида</li>
            <li>Таблица запросов с фильтрами, карточкой лида и повторной отправкой</li>
            <li>CRUD рекламных кампаний, Telegram-ботов и Telegram-каналов</li>
            <li>Привязка к кампании бота и канала, шаблон сообщения</li>
            <li>Админ-панель с авторизацией сотрудников</li>
            <li>Очередь отправки в Telegram с ретраями и статусом доставки</li>
          </ul>
        </div>
        <div className="rounded-xl border border-rule bg-white p-4">
          <h3 className="mb-2 text-sm font-semibold text-ink">Вне скоупа v1</h3>
          <ul className="list-disc space-y-1.5 pl-4 text-sm text-ink-soft">
            <li>Создание и управление рекламой внутри Meta/TikTok Ads Manager</li>
            <li>CRM, коллтрекинг, скоринг, распределение между менеджерами</li>
            <li>WhatsApp, email, SMS как каналы доставки</li>
            <li>Мультитенантность для нескольких юридических лиц с изоляцией данных</li>
            <li>Публичный кабинет дилера без роли администратора</li>
          </ul>
        </div>
      </div>
      <Callout title="Ключевое правило маршрутизации">
        Лид никогда не «теряется»: если кампания не сопоставлена или Telegram
        недоступен, заявка всё равно сохраняется в таблице со статусом
        «не распределён» или «ошибка доставки». Повторная отправка доступна из админки.
      </Callout>
    </Section>
  )
}

function Glossary() {
  return (
    <Section id="glossary" kicker="02" title="Глоссарий">
      <DataTable
        columns={['Термин', 'Значение в этом ТЗ']}
        rows={[
          ['Лид / запрос', 'Заявка человека с рекламной формы: имя, телефон, дилер, служебные поля объявления'],
          ['Кампания (внутренняя)', 'Правило маршрутизации в LeadRelay: какие объявления куда слать в Telegram'],
          ['Рекламная кампания (внешняя)', 'Кампания в Ads Manager Instagram/TikTok; её id используется для сопоставления'],
          ['Бот', 'Telegram-бот, через который сервис отправляет сообщения. Хранится токен'],
          ['Канал', 'Telegram-канал, супергруппа или чат. Идентификатор — chat_id'],
          ['Маршрут', 'Связка «внутренняя кампания → бот + канал + шаблон»'],
          ['Lead status', 'Статус заявки на стороне рекламной платформы (новый, просмотрен и т.д.)'],
          ['Delivery status', 'Статус доставки в Telegram: queued, sent, failed'],
        ]}
      />
    </Section>
  )
}

function Roles() {
  return (
    <Section id="roles" kicker="03" title="Роли пользователей">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Администратор', 'Полный доступ: боты, каналы, кампании, просмотр и повторная отправка лидов, настройки интеграций.'],
          ['Оператор', 'Таблица и карточка лидов, фильтры, повторная отправка. Без удаления ботов и токенов.'],
          ['Система', 'Приём вебхуков, нормализация, сопоставление кампании, постановка в очередь Telegram.'],
        ].map(([title, text]) => (
          <div key={title} className="rounded-xl border border-rule bg-white p-4">
            <h3 className="font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
          </div>
        ))}
      </div>
      <P>
        В v1 достаточно ролей «администратор» и «оператор». Вход по email и
        паролю, сессия JWT + httpOnly cookie. Приглашение пользователей — из
        раздела «Сотрудники».
      </P>
    </Section>
  )
}

function Architecture() {
  return (
    <Section id="architecture" kicker="04" title="Архитектура">
      <P>
        Один backend принимает вебхуки и отдаёт REST для админки. Админ-панель —
        SPA. Хранение — PostgreSQL. Отправка в Telegram идёт через очередь, чтобы
        всплеск заявок не упирался в лимиты Bot API.
      </P>
      <ArchitectureDiagram />
      <DataTable
        caption="Рекомендуемый стек"
        columns={['Слой', 'Технология', 'Зачем']}
        rows={[
          ['Админ-панель', 'React + TypeScript', 'Таблица лидов, CRUD кампаний/ботов/каналов'],
          ['API', 'NestJS (Node.js) или FastAPI (Python)', 'Вебхуки, REST, авторизация, очередь'],
          ['БД', 'PostgreSQL', 'Лиды, кампании, боты, каналы, пользователи, журнал доставок'],
          ['Очередь', 'Redis + BullMQ / RQ', 'Ретраи Telegram, идемпотентная обработка вебхуков'],
          ['Инфра', 'Docker Compose, HTTPS, секреты в env', 'Локальный запуск и стенд'],
        ]}
      />
      <Callout title="Стек можно заменить">
        Требования привязаны к сущностям, контрактам API и интеграциям, а не к
        конкретному фреймворку. Обязательны: PostgreSQL, очередь с ретраями,
        раздельные токены Meta / TikTok / Telegram.
      </Callout>
    </Section>
  )
}

function Flows() {
  return (
    <Section id="flows" kicker="05" title="Потоки данных">
      <P>
        Источники не пишут в Telegram напрямую. Все заявки проходят сервис:
        проверка подписи → идемпотентная запись → сопоставление кампании →
        постановка сообщения в очередь.
      </P>
      <FlowDiagram />
      <Req id="FR-01" title="Единая точка входа лидов">
        Сервис предоставляет HTTPS-эндпоинты <code className="text-ink">POST /webhooks/instagram</code> и{' '}
        <code className="text-ink">POST /webhooks/tiktok</code>. Лиды, загруженные вручную
        оператором (CSV), используют тот же конвейер нормализации и маршрутизации.
      </Req>
      <Req id="FR-02" title="Идемпотентность">
        Повтор вебхука с тем же внешним id не создаёт дубль. Уникальность:{' '}
        <code className="text-ink">(platform, external_lead_id)</code>. Повтор
        обновляет служебные поля платформы, если они изменились, и не шлёт
        Telegram второй раз, если доставка уже <code className="text-ink">sent</code>.
      </Req>
      <Req id="FR-03" title="Сопоставление кампании">
        После сохранения лид сопоставляется с внутренней кампанией по правилам
        ниже. Если совпадений нет — кампания «Нераспределённые», доставка не
        выполняется, в таблице статус маршрута <code className="text-ink">unmatched</code>.
      </Req>
    </Section>
  )
}

function Leads() {
  return (
    <Section id="leads" kicker="06" title="Таблица запросов">
      <P>
        Основной рабочий экран. Список всех лидов с фильтрами. Набор колонок
        зависит от платформы: у Instagram и TikTok разные поля форм, поэтому в
        ТЗ фиксируются оба состава и общая проекция для сводного вида.
      </P>
      <h3 className="font-serif text-xl font-semibold text-ink">Сводные колонки (все платформы)</h3>
      <DataTable
        columns={['Поле', 'Источник', 'Описание']}
        rows={[
          ['created_at', 'сервис / платформа', 'Время поступления, часовой пояс Europe/Moscow'],
          ['platform', 'сервис', 'instagram | tiktok'],
          ['external_lead_id', 'платформа', 'id лида Instagram или TikTok Lead ID'],
          ['name', 'форма', 'полное_имя / Name'],
          ['phone', 'форма', 'номер телефона, нормализованный в E.164'],
          ['dealer', 'форма', 'автоцентр / Dealer'],
          ['person_type', 'Instagram', 'физлицо / юрлицо; у TikTok пусто, если нет в форме'],
          ['campaign_name', 'платформа', 'campaign_name / Group Ads'],
          ['ad_name', 'платформа', 'ad_name / Ad name'],
          ['lead_status', 'платформа', 'lead_status / TikTok Lead Status'],
          ['route_status', 'сервис', 'matched | unmatched'],
          ['delivery_status', 'сервис', 'queued | sent | failed | skipped'],
          ['internal_campaign', 'сервис', 'название внутренней кампании LeadRelay'],
        ]}
      />
      <Req id="FR-10" title="Фильтры и поиск">
        Фильтры: период, платформа, внутренняя кампания, дилер, delivery_status,
        route_status. Поиск по имени, телефону, внешнему id, названию объявления.
        Пагинация, сортировка по дате по убыванию. Экспорт CSV текущего фильтра.
      </Req>
      <Req id="FR-11" title="Карточка лида">
        По клику открывается карточка: все исходные поля платформы, сырой JSON,
        сопоставленная кампания, бот, канал, лог попыток Telegram, кнопка
        «Отправить снова».
      </Req>
      <Req id="FR-12" title="Пустые и ошибочные состояния">
        Нет лидов — пояснение и ссылка на настройки вебхуков. Ошибка загрузки —
        сообщение и повтор. Невалидный телефон сохраняется как есть, в карточке
        пометка «не нормализован», в Telegram уходит исходная строка.
      </Req>
    </Section>
  )
}

function Instagram() {
  return (
    <Section id="instagram" kicker="07" title="Поля Instagram">
      <P>
        Источник — Instagram / Meta Lead Ads (Instant Forms). Ниже состав полей,
        который обязан отображаться в таблице и карточке, если платформа
        Instagram. Имена кастомных вопросов формы сохраняются как пришло из Meta.
      </P>
      <DataTable
        caption="Состав лида Instagram (обязательный минимум отображения)"
        columns={['Поле', 'Тип', 'Назначение']}
        rows={[
          ['id', 'string', 'Идентификатор лида в Meta'],
          ['created_time', 'datetime', 'Время создания заявки на стороне Meta'],
          ['ad_id', 'string', 'ID объявления'],
          ['ad_name', 'string', 'Название объявления'],
          ['adset_id', 'string', 'ID группы объявлений'],
          ['adset_name', 'string', 'Название группы объявлений'],
          ['campaign_id', 'string', 'ID рекламной кампании Meta'],
          ['campaign_name', 'string', 'Название кампании Meta'],
          ['form_id', 'string', 'ID формы мгновенных ответов'],
          ['form_name', 'string', 'Название формы'],
          ['is_organic', 'boolean', 'Органическая заявка или рекламная'],
          ['platform', 'string', 'Площадка, как отдаёт Meta (instagram / fb)'],
          ['выберите_автоцентр_dongfeng_ближайший_к_вам', 'string', 'Выбранный автоцентр'],
          ['вы_обращаетесь_как_физическое_или_юридическое_лицо?', 'string', 'Тип обращения'],
          ['полное_имя', 'string', 'Имя лида'],
          ['номер_телефона', 'string', 'Телефон лида'],
          ['lead_status', 'string', 'Статус лида на стороне Meta'],
        ]}
      />
      <Req id="FR-20" title="Вебхук Meta">
        Подписка на <code className="text-ink">leadgen</code>. GET-верификация
        hub.challenge. POST проверяет X-Hub-Signature-256. По leadgen_id сервис
        забирает полный лид через Graph API (page token), включая field_data формы.
      </Req>
      <Req id="FR-21" title="Нормализация Instagram">
        Field_data мапится в колонки: полное_имя → name, номер_телефона → phone,
        вопрос про автоцентр → dealer, вопрос про физ/юрлицо → person_type.
        Неизвестные вопросы складываются в jsonb extra_fields без потери.
      </Req>
    </Section>
  )
}

function TikTok() {
  return (
    <Section id="tiktok" kicker="08" title="Поля TikTok">
      <P>
        Источник — TikTok Lead Generation. Состав колонок для таблицы и карточки
        при platform = tiktok фиксируется как в выгрузке кабинета.
      </P>
      <DataTable
        caption="Состав лида TikTok (обязательный минимум отображения)"
        columns={['Поле', 'Тип', 'Назначение']}
        rows={[
          ['Name', 'string', 'Имя лида'],
          ['Phone', 'string', 'Телефон'],
          ['Dealer', 'string', 'Автоцентр / дилер'],
          ['Select', 'string', 'Значение выпадающего поля формы'],
          ['Data', 'string / date', 'Дата или доп. поле формы, как приходит из TikTok'],
          ['Group Ads', 'string', 'Группа объявлений'],
          ['Ad name', 'string', 'Название объявления'],
          ['Name Ads', 'string', 'Доп. имя объявления / креатива, если отличается от Ad name'],
          ['Status', 'string', 'Статус в кабинете рекламы'],
          ['TikTok Lead ID', 'string', 'Внешний идентификатор лида'],
          ['TikTok Lead Status', 'string', 'Статус лида TikTok'],
        ]}
      />
      <Req id="FR-30" title="Вебхук / выгрузка TikTok">
        Приём Lead Webhook TikTok с проверкой подписи. Если вебхук недоступен на
        стороне кабинета — фоновая синхронизация через Marketing API не реже чем
        раз в 5 минут. Ручная загрузка CSV с теми же колонками для аварийного контура.
      </Req>
      <Req id="FR-31" title="Нормализация TikTok">
        Name → name, Phone → phone, Dealer → dealer, TikTok Lead ID →
        external_lead_id, Group Ads → campaign_name, Ad name → ad_name,
        TikTok Lead Status → lead_status. Select, Data, Name Ads, Status
        сохраняются в extra_fields и показываются в карточке и в «тикток-виде»
        таблицы.
      </Req>
    </Section>
  )
}

function Telegram() {
  return (
    <Section id="telegram" kicker="09" title="Доставка в Telegram">
      <P>
        Для каждой внутренней кампании администратор выбирает бота и канал.
        Сообщение отправляется Bot API методом sendMessage от имени выбранного
        бота в chat_id канала. Бот должен быть администратором канала с правом
        публикации.
      </P>
      <Req id="FR-40" title="Шаблон сообщения">
        У кампании свой шаблон. Плейсхолдеры: {'{name}'}, {'{phone}'}, {'{dealer}'},
        {'{person_type}'}, {'{platform}'}, {'{campaign_name}'}, {'{ad_name}'},
        {'{form_name}'}, {'{lead_status}'}, {'{created_at}'}, {'{external_lead_id}'},
        {'{select}'}, {'{data}'}. Незаполненные плейсхолдеры удаляются вместе с
        подписью строки. Значение по умолчанию — шаблон из макета ниже.
      </Req>
      <pre className="overflow-x-auto rounded-xl border border-rule bg-ink p-4 text-[12px] leading-5 text-paper">
{`🆕 Новый лид · {platform}

Имя: {name}
Телефон: {phone}
Автоцентр: {dealer}
Тип: {person_type}

Кампания: {campaign_name}
Объявление: {ad_name}
Форма: {form_name}
Статус: {lead_status}
Время: {created_at}
ID: {external_lead_id}`}
      </pre>
      <Req id="FR-41" title="Очередь и ретраи">
        Отправка асинхронная. 5 попыток с экспоненциальной паузой (5с, 20с, 1м,
        5м, 15м). Учитывается 429 Retry-After. После исчерпания — delivery_status
        = failed, ошибка в логе, лид остаётся в таблице. Оператор жмёт
        «Отправить снова».
      </Req>
      <Req id="FR-42" title="Проверка бота и канала">
        При создании/редактировании бота сервис вызывает getMe. При привязке
        канала — getChat и пробное право отправки. Невалидный токен или канал
        без прав нельзя сохранить как «активный».
      </Req>
    </Section>
  )
}

function Campaigns() {
  return (
    <Section id="campaigns" kicker="10" title="Кампании и правила маршрутов">
      <P>
        Внутренняя кампания — главное правило «какие лиды куда слать». Это не
        копия Ads Manager, а маршрутизатор: набор условий сопоставления + бот +
        канал.
      </P>
      <DataTable
        columns={['Поле кампании', 'Обязательно', 'Описание']}
        rows={[
          ['name', 'да', 'Человекочитаемое имя в админке'],
          ['status', 'да', 'active | paused'],
          ['platform', 'да', 'instagram | tiktok | both'],
          ['telegram_bot_id', 'да, если active', 'Кто отправляет'],
          ['telegram_channel_id', 'да, если active', 'Куда отправляет'],
          ['message_template', 'нет', 'Переопределение шаблона'],
          ['match_rules', 'да', 'Набор условий, см. таблицу ниже'],
          ['notes', 'нет', 'Комментарий для операторов'],
        ]}
      />
      <h3 className="font-serif text-xl font-semibold text-ink">Правила сопоставления</h3>
      <P>
        Кампания срабатывает, если платформа лида входит в platform и выполнено
        хотя бы одно включённое условие (логика OR внутри кампании). Если
        подошло несколько кампаний — берётся с наивысшим priority, при равенстве
        более специфичная (больше заполненных id), затем более новая.
      </P>
      <DataTable
        columns={['Условие', 'Платформа', 'С чем сравнивать']}
        rows={[
          ['instagram_campaign_id', 'Instagram', 'campaign_id лида'],
          ['instagram_adset_id', 'Instagram', 'adset_id'],
          ['instagram_ad_id', 'Instagram', 'ad_id'],
          ['instagram_form_id', 'Instagram', 'form_id'],
          ['tiktok_group_ads', 'TikTok', 'Group Ads (точное совпадение строки)'],
          ['tiktok_ad_name', 'TikTok', 'Ad name'],
          ['tiktok_name_ads', 'TikTok', 'Name Ads'],
        ]}
      />
      <Req id="FR-50" title="CRUD кампаний">
        Создание, редактирование, удаление, пауза. Удаление запрещено, если по
        кампании уже есть лиды: только архивация (status = archived), лиды
        сохраняют ссылку. Нельзя активировать кампанию без бота и канала.
      </Req>
      <Req id="FR-51" title="CRUD ботов">
        Поля: имя, токен, is_active. После getMe сохраняются username и bot_id.
        Токен в API наружу не отдаётся, только маска. Удаление: если бот
        привязан к активной кампании — отказ с перечнем кампаний.
      </Req>
      <Req id="FR-52" title="CRUD каналов">
        Поля: имя, chat_id, username (@channel), комментарий. Проверка, что
        выбранный бот может писать в канал. Один канал можно использовать в
        нескольких кампаниях и с разными ботами, если оба бота — админы канала.
      </Req>
    </Section>
  )
}

function Admin() {
  return (
    <Section id="admin" kicker="11" title="Админ-панель">
      <P>
        Закрытый веб-интерфейс. Десктоп — основная рабочая ширина, мобильный —
        просмотр лидов и статусов, создание кампаний возможно, но таблицы с
        горизонтальным скроллом.
      </P>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ['Вход', 'Email/пароль, восстановление пароля, блокировка после 10 неудачных попыток.'],
          ['Дашборд', 'Лиды за сегодня/7 дней, ошибки доставки, нераспределённые, последние 10 заявок.'],
          ['Запросы', 'Таблица, фильтры, карточка, экспорт, повторная отправка.'],
          ['Кампании', 'Список маршрутов, создание/правка формы с выбором бота и канала.'],
          ['Боты', 'Список, добавление токена, проверка getMe, деактивация.'],
          ['Каналы', 'Список, chat_id, проверка доступа ботом.'],
          ['Сотрудники', 'Приглашение администратора и оператора, деактивация.'],
          ['Интеграции', 'Секреты Meta и TikTok, URL вебхуков, Verify Token, тест-кнопка.'],
        ].map(([t, d]) => (
          <div key={t} className="rounded-xl border border-rule bg-white px-4 py-3">
            <h3 className="text-sm font-semibold text-ink">{t}</h3>
            <p className="mt-1 text-sm text-ink-soft">{d}</p>
          </div>
        ))}
      </div>
      <Req id="FR-60" title="Выбор бота и канала в кампании">
        В форме кампании обязательные селекты «Telegram-бот» и «Telegram-канал»
        из активных сущностей. Предпросмотр шаблона сообщения на тестовых данных.
        Кнопка «Отправить тест» пишет в канал контрольное сообщение.
      </Req>
      <Req id="FR-61" title="Журнал действий">
        Кто создал/изменил/архивировал кампанию, бота, канал. Просмотр токена
        бота не логируется целиком. Вход и смена интеграционных секретов —
        в аудит-лог.
      </Req>
    </Section>
  )
}

function Mockups() {
  return (
    <Section id="mockups" kicker="12" title="Макеты экранов">
      <P>
        Визуальный ориентир первой версии админки. Это не интерактивный продукт,
        а спецификация компоновки: что видит оператор в таблице запросов и как
        выглядит форма кампании с выбором бота и канала.
      </P>
      <AdminMockups />
    </Section>
  )
}

function Model() {
  return (
    <Section id="model" kicker="13" title="Модель данных">
      <DataTable
        caption="Основные сущности"
        columns={['Таблица', 'Ключевые поля', 'Ограничения']}
        rows={[
          ['users', 'id, email, password_hash, role, is_active', 'email unique'],
          ['telegram_bots', 'id, name, token_enc, telegram_id, username, is_active', 'token только в зашифрованном виде'],
          ['telegram_channels', 'id, name, chat_id, username, notes, is_active', 'chat_id unique'],
          [
            'campaigns',
            'id, name, status, platform, priority, bot_id, channel_id, template, match_rules jsonb',
            'FK на bots/channels; нельзя active без FK',
          ],
          [
            'leads',
            'id, platform, external_lead_id, created_at, name, phone, dealer, person_type, campaign_id, payload jsonb, extra_fields jsonb, lead_status, route_status, delivery_status',
            'unique (platform, external_lead_id)',
          ],
          [
            'delivery_attempts',
            'id, lead_id, bot_id, channel_id, status, http_code, error, telegram_message_id, attempted_at',
            'история ретраев',
          ],
          ['audit_log', 'id, user_id, action, entity, entity_id, at, meta', 'append-only'],
        ]}
      />
      <P>
        payload jsonb — полный ответ платформы. extra_fields — кастомные вопросы
        формы, которых нет в фиксированной схеме. Колонки name/phone/dealer
        дублируются для фильтров и таблицы.
      </P>
    </Section>
  )
}

function Api() {
  return (
    <Section id="api" kicker="14" title="API">
      <DataTable
        caption="Админский REST, префикс /api, JWT"
        columns={['Метод', 'Путь', 'Назначение']}
        rows={[
          ['POST', '/auth/login', 'Вход'],
          ['POST', '/auth/logout', 'Выход'],
          ['GET', '/leads', 'Список, фильтры, пагинация'],
          ['GET', '/leads/:id', 'Карточка + попытки доставки'],
          ['POST', '/leads/:id/resend', 'Повторная отправка в Telegram'],
          ['GET', '/leads/export', 'CSV'],
          ['GET/POST', '/campaigns', 'Список и создание'],
          ['GET/PATCH/DELETE', '/campaigns/:id', 'Чтение, правка, архивация'],
          ['GET/POST', '/telegram-bots', 'Список и создание'],
          ['PATCH/DELETE', '/telegram-bots/:id', 'Правка, удаление'],
          ['POST', '/telegram-bots/:id/verify', 'getMe'],
          ['GET/POST', '/telegram-channels', 'Список и создание'],
          ['PATCH/DELETE', '/telegram-channels/:id', 'Правка, удаление'],
          ['POST', '/telegram-channels/:id/verify', 'Проверка прав бота'],
          ['GET', '/dashboard', 'Счётчики дашборда'],
          ['GET/PUT', '/settings/integrations', 'Токены Meta/TikTok, verify token'],
        ]}
      />
      <DataTable
        caption="Публичные вебхуки без JWT, с подписью платформы"
        columns={['Метод', 'Путь', 'Назначение']}
        rows={[
          ['GET', '/webhooks/instagram', 'Verify hub.challenge'],
          ['POST', '/webhooks/instagram', 'leadgen'],
          ['POST', '/webhooks/tiktok', 'Lead webhook'],
        ]}
      />
      <Req id="FR-70" title="Контракт ошибок">
        JSON {'{ error: { code, message } }'}, коды 400/401/403/404/409/422/429.
        409 — удаление бота, занятого кампанией. 422 — невалидный токен Telegram
        или неполный match_rules у активной кампании.
      </Req>
    </Section>
  )
}

function Nfr() {
  return (
    <Section id="nfr" kicker="15" title="Нефункциональные требования и безопасность">
      <div className="grid gap-4 md:grid-cols-2">
        <Req id="NFR-01" title="Доступность">
          Обработка вебхука &lt; 3 с до постановки в очередь (Meta/TikTok ждут
          быстрый 200). Отправка в Telegram не блокирует ответ вебхука.
        </Req>
        <Req id="NFR-02" title="Нагрузка v1">
          До 50 лидов в минуту пик, 20k лидов в месяц. Таблица лидов остаётся
          отзывчивой на 200k строк за счёт индексов и пагинации.
        </Req>
        <Req id="NFR-03" title="Аудит и хранение">
          Лиды и логи доставки хранятся не менее 24 месяцев. Персональные данные
          (имя, телефон) не пишутся в обычные application-логи.
        </Req>
        <Req id="NFR-04" title="Секреты">
          Токены ботов, page token Meta, ключи TikTok — только encrypted at rest
          и env. HTTPS обязателен. Вебхуки без валидной подписи — 401, тело не
          сохраняется.
        </Req>
      </div>
      <Req id="NFR-05" title="Локализация и время">
        Интерфейс на русском. Даты в Europe/Moscow. Телефоны нормализуются к
        +7… где возможно. Копирайт в UI — рабочие формулировки, без латиницы
        «lorem» и без «welcome to your app».
      </Req>
    </Section>
  )
}

function Plan() {
  return (
    <Section id="plan" kicker="16" title="Этапы реализации и приёмка">
      <DataTable
        columns={['Этап', 'Состав', 'Результат']}
        rows={[
          ['1. Каркас', 'Авторизация, сущности бот/канал/кампания, пустая таблица лидов', 'Админ может завести маршрут'],
          ['2. Приём', 'Вебхуки IG/TT, нормализация, таблица с полями обеих платформ', 'Лид виден в админке'],
          ['3. Доставка', 'Очередь, шаблон, ретраи, статусы, resend', 'Сообщение в выбранном канале'],
          ['4. Эксплуатация', 'Дашборд, экспорт CSV, аудит, страница интеграций, алерты failed', 'Готовность к бою'],
        ]}
      />
      <h3 className="font-serif text-xl font-semibold text-ink">Критерии приёмки</h3>
      <ul className="list-disc space-y-2 pl-5 text-[15px] leading-7 text-ink-soft">
        <li>Тестовый лид Instagram с полным набором полей появляется в таблице и в Telegram-канале, указанном у кампании.</li>
        <li>Тестовый лид TikTok с полями Name, Phone, Dealer, Group Ads, Ad name, TikTok Lead ID — аналогично.</li>
        <li>Смена бота или канала у кампании влияет только на новые лиды; старые записи не переписываются.</li>
        <li>Повтор вебхука не создаёт второй лид и не шлёт второе сообщение, если первое уже sent.</li>
        <li>Неизвестная рекламная кампания: лид в таблице, route_status = unmatched, в Telegram не уходит.</li>
        <li>Удаление бота, занятого активной кампанией, блокируется. Архивация кампании с лидами сохраняет историю.</li>
        <li>Невалидный токен бота нельзя сохранить как активный. Ошибка доставки видна в карточке и на дашборде.</li>
        <li>Оператор без прав администратора не видит токены и не удаляет ботов/каналы.</li>
      </ul>
      <Callout title="Открытые решения, зафиксированные в v1">
        Часовой пояс Europe/Moscow. Органические заявки (is_organic = true)
        принимаются и маршрутизируются так же. Несколько внутренних кампаний на
        один внешний campaign_id допустимы — побеждает priority. Ручная смена
        дилера в карточке лида в v1 не нужна.
      </Callout>
    </Section>
  )
}
