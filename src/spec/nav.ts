export type NavItem = {
  id: string
  label: string
  group: string
}

export const NAV: NavItem[] = [
  { group: 'Документ', id: 'passport', label: 'Паспорт' },
  { group: 'Документ', id: 'goal', label: 'Цель и границы' },
  { group: 'Документ', id: 'glossary', label: 'Глоссарий' },
  { group: 'Документ', id: 'roles', label: 'Роли' },
  { group: 'Продукт', id: 'architecture', label: 'Архитектура' },
  { group: 'Продукт', id: 'flows', label: 'Потоки данных' },
  { group: 'Продукт', id: 'leads', label: 'Таблица запросов' },
  { group: 'Продукт', id: 'instagram', label: 'Instagram' },
  { group: 'Продукт', id: 'tiktok', label: 'TikTok' },
  { group: 'Продукт', id: 'telegram', label: 'Telegram' },
  { group: 'Продукт', id: 'campaigns', label: 'Кампании и маршруты' },
  { group: 'Интерфейс', id: 'admin', label: 'Роли и экраны' },
  { group: 'Интерфейс', id: 'mockups', label: 'Макеты экранов' },
  { group: 'Реализация', id: 'model', label: 'Модель данных' },
  { group: 'Реализация', id: 'api', label: 'API' },
  { group: 'Реализация', id: 'nfr', label: 'НФТ и безопасность' },
  { group: 'Реализация', id: 'plan', label: 'Этапы и приёмка' },
]
