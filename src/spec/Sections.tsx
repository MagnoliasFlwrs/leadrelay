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
        ТЗ-LR-001 · версия 1.1
      </p>
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-ink md:text-[3.25rem] md:leading-[1.12]">
        Сервис маршрутизации лидов Instagram и TikTok в Telegram
      </h1>
      <P>
        Документ описывает фронтенд (админ-панель) и бэкенд сервиса, который
        принимает рекламные заявки из Instagram Lead Ads и TikTok Lead
        Generation, кладёт их в таблицу и пересылает в выбранный Telegram-бот
        и Telegram-группу в зависимости от рекламной кампании.
      </P>
      <dl className="mt-8 grid gap-3 sm:grid-cols-2">
        {[
          ['Заказчик / контекст', 'Автоцентры Dongfeng: лиды с форм записи и подбора дилера'],
          ['Код документа', 'ТЗ-LR-001'],
          ['Версия', '1.1 от 25 сентября 2026'],
          ['Статус', 'Черновик к согласованию'],
          ['Платформы-источники', 'Instagram (Meta Lead Ads), TikTok Lead Generation'],
          ['Канал доставки', 'Telegram Bot API → группа'],
          ['Роли', 'Админ и сотрудник'],
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
        Цель — собрать заявки с рекламы Instagram и TikTok, показать их в
        таблицах и автоматически отправить в Telegram тому боту и в ту группу,
        которые привязаны к рекламной кампании. Общий список всех заявок
        (сайт + реклама) доступен сотруднику и админу; настройка маршрутов
        Instagram/TikTok — только админу.
      </P>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-rule bg-white p-4">
          <h3 className="mb-2 text-sm font-semibold text-ink">Входит в первую версию</h3>
          <ul className="list-disc space-y-1.5 pl-4 text-sm text-ink-soft">
            <li>Редизайн общего списка всех заявок (сотрудник и админ)</li>
            <li>Приём вебхуков Instagram и TikTok, таблица рекламных заявок</li>
            <li>Раздел админки со вкладками: Запросы, Telegram, Рекламные кампании</li>
            <li>CRUD ботов, групп, кампаний TikTok и Instagram (бот, группа, заголовок)</li>
            <li>Кнопка «Настроить» для статусов «не распределён» и «ошибка Telegram»</li>
            <li>Очередь отправки в Telegram с ретраями</li>
          </ul>
        </div>
        <div className="rounded-xl border border-rule bg-white p-4">
          <h3 className="mb-2 text-sm font-semibold text-ink">Вне скоупа v1</h3>
          <ul className="list-disc space-y-1.5 pl-4 text-sm text-ink-soft">
            <li>Дашборд — версия 2 (и для админа, и для сотрудника)</li>
            <li>Создание и управление рекламой внутри Meta/TikTok Ads Manager</li>
            <li>Коллтрекинг, скоринг, распределение между менеджерами</li>
            <li>WhatsApp, email, SMS как каналы доставки</li>
            <li>Публичный кабинет дилера</li>
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
          ['Группа', 'Telegram-группа, супергруппа или канал. Идентификатор — chat_id'],
          ['Заголовок', 'Первая строка сообщения в Telegram у рекламной кампании'],
          ['Маршрут', 'Связка «рекламная кампания → бот + группа + заголовок»'],
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
          [
            'Сотрудник',
            'Общий список всех заявок (сайт, Instagram, TikTok) с фильтрами и экспортом. Дашборд — только в версии 2. Раздел админки Instagram/TikTok недоступен.',
          ],
          [
            'Админ',
            'Всё, что видит сотрудник, плюс раздел админки для Instagram и TikTok: вкладки «Запросы», «Telegram», «Рекламные кампании». Управление пользователями. Дашборд — в версии 2.',
          ],
          [
            'Система',
            'Приём вебхуков, нормализация, сопоставление кампании, очередь Telegram.',
          ],
        ].map(([title, text]) => (
          <div key={title} className="rounded-xl border border-rule bg-white p-4">
            <h3 className="font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
          </div>
        ))}
      </div>
      <P>
        Вход по email и паролю, JWT в httpOnly cookie. Роль задаётся при
        приглашении. Сотрудник, открывший URL раздела админки, получает 403.
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
          ['Админ-панель', 'React + TypeScript', 'Список заявок, вкладки админки, CRUD ботов/групп/кампаний'],
          ['API', 'NestJS (Node.js) или FastAPI (Python)', 'Вебхуки, REST, авторизация, очередь'],
          ['БД', 'PostgreSQL', 'Лиды, кампании, боты, группы, пользователи, журнал доставок'],
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
        сотрудником (CSV), используют тот же конвейер нормализации и маршрутизации.
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
        Два разных экрана. Общий список всех заявок видят сотрудник и админ —
        это редизайн текущего экрана с фильтрами (дата, бренд, сайт, тип, UTM,
        имя, телефон, кто создал). Отдельная вкладка «Запросы» в разделе
        админки показывает только рекламные заявки Instagram и TikTok,
        которые уходят в Telegram.
      </P>
      <h3 className="font-serif text-xl font-semibold text-ink">Общий список (сотрудник и админ)</h3>
      <DataTable
        columns={['Колонка', 'Описание']}
        rows={[
          ['id', 'Внутренний номер заявки'],
          ['бренд', 'dongfeng и др.'],
          ['сайт', 'dongfeng.by и др.'],
          ['тип запроса', 'общие вопросы, тест-драйв, …'],
          ['имя', 'Имя клиента'],
          ['телефон', 'Телефон'],
          ['дата запроса', 'Europe/Moscow'],
          ['UTM', 'Метка, если есть'],
          ['дилерский центр', 'Адрес / название автоцентра'],
          ['статус', 'новая / в работе / закрыта — статус в CRM, не доставка в Telegram'],
        ]}
      />
      <h3 className="font-serif text-xl font-semibold text-ink">Вкладка админки «Запросы» (Instagram и TikTok)</h3>
      <DataTable
        columns={['Колонка', 'Описание']}
        rows={[
          ['площадка', 'instagram | tiktok'],
          ['id', 'внешний id лида'],
          ['имя / телефон / дилер', 'из формы'],
          ['кампания', 'campaign_name / Group Ads'],
          ['статус', 'отправлено | не распределён | ошибка Telegram | в очереди'],
          ['действие', 'кнопка «Настроить» только для не распределён / ошибка Telegram'],
        ]}
      />
      <Req id="FR-10" title="Фильтры общего списка">
        Как на текущем экране: период, бренд, сайт, тип запроса, UTM, имя,
        телефон, кто создал. Кнопки «Найти» и «сброс». Экспорт «Скачать отчёт».
        Пагинация. Добавляется колонка статуса заявки.
      </Req>
      <Req id="FR-11" title="Кнопка «Настроить»">
        На вкладке админских запросов у строк со статусом «не распределён» или
        «ошибка Telegram» справа кнопка «Настроить». Открывает панель кампании
        этого запроса: бот, группа, заголовок сообщения. Сохранение обновляет
        кампанию и сразу повторяет отправку этой заявки. Если внутренней
        кампании ещё нет — она создаётся по внешнему id / Group Ads лида.
      </Req>
      <Req id="FR-12" title="Пустые и ошибочные состояния">
        Нет заявок — пояснение. Ошибка загрузки — повтор. Сотрудник не видит
        кнопку «Настроить» и весь раздел админки.
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
        Для каждой рекламной кампании администратор выбирает бота, группу и
        заголовок. Сообщение отправляется Bot API методом sendMessage от имени
        выбранного бота в chat_id группы. Бот должен быть администратором группы
        с правом публикации.
      </P>
      <Req id="FR-40" title="Заголовок сообщения">
        У кампании поле «заголовок» — первая строка сообщения в Telegram. Тело
        ниже стандартное: имя, телефон, автоцентр, площадка, id. Пустой заголовок
        допускается; тогда сообщение начинается сразу с полей.
      </Req>
      <pre className="overflow-x-auto rounded-xl border border-rule bg-ink p-4 text-[12px] leading-5 text-paper">
{`{заголовок}

Имя: {name}
Телефон: {phone}
Автоцентр: {dealer}
Площадка: {platform}
Кампания: {campaign_name}
ID: {external_lead_id}`}
      </pre>
      <Req id="FR-41" title="Очередь и ретраи">
        Отправка асинхронная. 5 попыток с экспоненциальной паузой (5с, 20с, 1м,
        5м, 15м). Учитывается 429 Retry-After. После исчерпания — статус
        «ошибка Telegram». Админ жмёт «Настроить» или повтор на кампании.
      </Req>
      <Req id="FR-42" title="Проверка бота и группы">
        При создании/редактировании бота сервис вызывает getMe. При привязке
        группы — getChat и право отправки. Невалидный токен или группу без прав
        нельзя сохранить как активные.
      </Req>
    </Section>
  )
}

function Campaigns() {
  return (
    <Section id="campaigns" kicker="10" title="Кампании и правила маршрутов">
      <P>
        Внутренняя кампания — правило «какие лиды куда слать». На вкладке
        «Рекламные кампании» две отдельные таблицы: TikTok и Instagram.
        CRUD: добавить / изменить / удалить. В строке обязательны поля бот,
        группа, заголовок.
      </P>
      <DataTable
        columns={['Поле кампании', 'Обязательно', 'Описание']}
        rows={[
          ['name', 'да', 'Человекочитаемое имя в админке'],
          ['status', 'да', 'active | paused'],
          ['platform', 'да', 'instagram | tiktok'],
          ['telegram_bot_id', 'да, если active', 'Кто отправляет'],
          ['telegram_group_id', 'да, если active', 'Куда отправляет'],
          ['message_title', 'нет', 'Заголовок сообщения в Telegram'],
          ['match_rules', 'да', 'Набор условий, см. таблицу ниже'],
          ['notes', 'нет', 'Комментарий для админа'],
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
        Две таблицы на одной вкладке: TikTok и Instagram. Создание, редактирование,
        удаление. Удаление запрещено, если по кампании уже есть лиды: только
        архивация. Нельзя активировать без бота и группы. Заголовок можно оставить
        пустым.
      </Req>
      <Req id="FR-51" title="CRUD ботов">
        Вкладка Telegram, таблица ботов. Поля: имя, токен, is_active. После getMe
        сохраняются username и bot_id. Токен наружу не отдаётся. Удаление: если
        бот в активной кампании — отказ с перечнем кампаний.
      </Req>
      <Req id="FR-52" title="CRUD групп">
        Вкладка Telegram, таблица групп. Поля: имя, chat_id, username, комментарий.
        Проверка, что бот может писать в группу. Одна группа — в нескольких
        кампаниях, если бот админ группы.
      </Req>
    </Section>
  )
}

function Admin() {
  return (
    <Section id="admin" kicker="11" title="Интерфейс: сотрудник и админ">
      <P>
        Общий каркас как у текущего кабинета Dongfeng: тёмный фон, белые карточки.
        Десктоп — основная ширина. Мобильный — фильтры стопкой, таблицы со
        горизонтальным скроллом.
      </P>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ['Вход', 'Email/пароль. Роль из профиля: сотрудник или админ.'],
          ['Все запросы', 'Общий список заявок. Видят обе роли. Редизайн текущего экрана. v1.'],
          ['Дашборд', 'Только версия 2. Для обеих ролей.'],
          ['Админка · Запросы', 'Только админ. Instagram и TikTok, статусы доставки, кнопка «Настроить».'],
          ['Админка · Telegram', 'Только админ. Таблица ботов и таблица групп.'],
          ['Админка · Рекламные кампании', 'Только админ. Таблица TikTok и таблица Instagram. Бот, группа, заголовок.'],
          ['Сотрудники', 'Только админ. Пригласить админа или сотрудника, деактивировать.'],
          ['Интеграции', 'Только админ. Секреты Meta и TikTok, URL вебхуков.'],
        ].map(([t, d]) => (
          <div key={t} className="rounded-xl border border-rule bg-white px-4 py-3">
            <h3 className="text-sm font-semibold text-ink">{t}</h3>
            <p className="mt-1 text-sm text-ink-soft">{d}</p>
          </div>
        ))}
      </div>
      <Req id="FR-60" title="Вкладки раздела админки">
        Три вкладки на одном экране: «Запросы», «Telegram», «Рекламные кампании».
        URL с query или hash сохраняет вкладку. Сотрудник этот раздел не видит в
        меню и получает 403 по прямому URL.
      </Req>
      <Req id="FR-61" title="Журнал действий">
        Кто создал/изменил/архивировал кампанию, бота, группу. Просмотр токена
        бота не логируется целиком.
      </Req>
    </Section>
  )
}

function Mockups() {
  return (
    <Section id="mockups" kicker="12" title="Макеты экранов">
      <P>
        Первый макет — редизайн общего списка заявок относительно текущего
        экрана (фильтры + таблица на синем фоне). Второй — раздел админки,
        вкладки кликабельны: запросы с кнопкой «Настроить», боты и группы,
        две таблицы кампаний.
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
          ['users', 'id, email, password_hash, role (admin|staff), is_active', 'email unique'],
          ['telegram_bots', 'id, name, token_enc, telegram_id, username, is_active', 'токен только encrypted'],
          ['telegram_groups', 'id, name, chat_id, username, notes, is_active', 'chat_id unique'],
          [
            'campaigns',
            'id, name, status, platform (instagram|tiktok), bot_id, group_id, message_title, match_rules jsonb',
            'FK на bots/groups',
          ],
          [
            'leads',
            'id, source (site|instagram|tiktok), external_lead_id, created_at, name, phone, dealer, campaign_id, payload jsonb, crm_status, delivery_status',
            'unique (source, external_lead_id) где source ≠ site',
          ],
          [
            'delivery_attempts',
            'id, lead_id, bot_id, group_id, status, http_code, error, telegram_message_id, attempted_at',
            'история ретраев',
          ],
          ['audit_log', 'id, user_id, action, entity, entity_id, at, meta', 'append-only'],
        ]}
      />
      <P>
        role = staff — сотрудник. delivery_status пустой у сайтовых заявок.
        message_title — заголовок Telegram, не полный шаблон.
      </P>
    </Section>
  )
}

function Api() {
  return (
    <Section id="api" kicker="14" title="API">
      <DataTable
        caption="REST, префикс /api, JWT"
        columns={['Метод', 'Путь', 'Роль', 'Назначение']}
        rows={[
          ['POST', '/auth/login', 'все', 'Вход'],
          ['GET', '/leads', 'staff, admin', 'Общий список заявок'],
          ['GET', '/leads/export', 'staff, admin', 'Отчёт'],
          ['GET', '/ads/leads', 'admin', 'Заявки Instagram и TikTok'],
          ['POST', '/ads/leads/:id/route', 'admin', 'Настроить кампанию лида и отправить'],
          ['GET/POST', '/campaigns', 'admin', 'Список и создание, фильтр platform'],
          ['PATCH/DELETE', '/campaigns/:id', 'admin', 'Правка, удаление'],
          ['GET/POST', '/telegram-bots', 'admin', 'Боты'],
          ['PATCH/DELETE', '/telegram-bots/:id', 'admin', 'Правка, удаление'],
          ['POST', '/telegram-bots/:id/verify', 'admin', 'getMe'],
          ['GET/POST', '/telegram-groups', 'admin', 'Группы'],
          ['PATCH/DELETE', '/telegram-groups/:id', 'admin', 'Правка, удаление'],
          ['POST', '/telegram-groups/:id/verify', 'admin', 'Проверка прав бота'],
          ['GET', '/dashboard', 'staff, admin', 'Только версия 2'],
          ['GET/PUT', '/settings/integrations', 'admin', 'Токены Meta/TikTok'],
        ]}
      />
      <DataTable
        caption="Публичные вебхуки без JWT"
        columns={['Метод', 'Путь', 'Назначение']}
        rows={[
          ['GET', '/webhooks/instagram', 'Verify hub.challenge'],
          ['POST', '/webhooks/instagram', 'leadgen'],
          ['POST', '/webhooks/tiktok', 'Lead webhook'],
        ]}
      />
      <Req id="FR-70" title="Контракт ошибок">
        JSON {'{ error: { code, message } }'}. 403 — сотрудник на админских
        эндпоинтах. 409 — удаление бота, занятого кампанией.
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
          ['1. Каркас', 'Роли, редизайн общего списка, пустые вкладки админки', 'Сотрудник и админ входят раздельно'],
          ['2. Telegram и РК', 'Таблицы ботов, групп, кампаний TikTok и Instagram', 'CRUD бот / группа / заголовок'],
          ['3. Приём и доставка', 'Вебхуки, статусы, кнопка «Настроить», очередь', 'Лид в группе Telegram'],
          ['v2', 'Дашборд для обеих ролей', 'Сводки и графики'],
        ]}
      />
      <h3 className="font-serif text-xl font-semibold text-ink">Критерии приёмки v1</h3>
      <ul className="list-disc space-y-2 pl-5 text-[15px] leading-7 text-ink-soft">
        <li>Сотрудник видит общий список заявок и не видит раздел админки Instagram/TikTok.</li>
        <li>Админ видит общий список и три вкладки: Запросы, Telegram, Рекламные кампании.</li>
        <li>Во вкладке «Запросы» только Instagram и TikTok. У «не распределён» и «ошибка Telegram» есть «Настроить».</li>
        <li>«Настроить» задаёт бота, группу и заголовок кампании этого запроса и повторяет отправку.</li>
        <li>Вкладка Telegram: таблица ботов и таблица групп, добавить / изменить / удалить.</li>
        <li>Вкладка кампаний: отдельная таблица TikTok и отдельная Instagram, поля бот, группа, заголовок, CRUD.</li>
        <li>Тестовый лид Instagram и тестовый лид TikTok приходят в выбранную группу с заданным заголовком.</li>
        <li>Дашборд в v1 отсутствует у обеих ролей.</li>
      </ul>
      <Callout title="Зафиксировано в v1.1">
        Роли админ и сотрудник. Канал заменён на группу. Шаблон сообщения заменён
        на заголовок. Дашборд отложен на версию 2. Общий список заявок
        перерисовывается с текущего экрана Dongfeng.
      </Callout>
    </Section>
  )
}
