export type EventLink = { label: string; href: string }

export type EventItem = {
  title: string
  role: string
  summary: string
  responsibilities: string[]
  impact: string[]
  links: EventLink[]
  thumb?: string
  images?: string[]
}

type Translator = (key: string) => string

export const getEventsData = (t: Translator): EventItem[] => [
  {
    title: t('events.items.0.title'),
    role: t('events.items.0.role'),
    thumb: '/images/events/ws2022/thumb.jpg',
    images: [
      '/images/events/ws2022/1.jpg',
      '/images/events/ws2022/2.jpg',
      '/images/events/ws2022/3.jpg',
      '/images/events/ws2022/4.jpg',
      '/images/events/ws2022/5.jpg',
      '/images/events/ws2022/6.jpg',
      '/images/events/ws2022/7.jpg',
      '/images/events/ws2022/8.jpg',
      '/images/events/ws2022/9.jpg',
      '/images/events/ws2022/10.jpg',
      '/images/events/ws2022/11.jpg',
    ],
    summary: t('events.items.0.summary'),
    responsibilities: [
      t('events.items.0.responsibilities.0'),
      t('events.items.0.responsibilities.1'),
      t('events.items.0.responsibilities.2'),
      t('events.items.0.responsibilities.3'),
    ],
    impact: [
      t('events.items.0.impact.0'),
      t('events.items.0.impact.1'),
      t('events.items.0.impact.2'),
      t('events.items.0.impact.3'),
    ],
    links: [
      { label: t('events.items.0.links.0.label'), href: 'https://www.facebook.com/share/p/1CcM9BroKK/' },
      // {
      //   label: t('events.items.0.links.1.label'),
      //   href: 'https://drive.google.com/drive/folders/1TpD6Q1cWHCzcZu6WhgoBO2Cu3xH0ml3x?usp=drive_link',
      // },
      { label: t('events.items.0.links.2.label'), href: 'https://www.facebook.com/share/p/1YHY2915cF/' },
      { label: t('events.items.0.links.3.label'), href: 'https://www.facebook.com/share/p/18776HHQ5a/' },
      { label: t('events.items.0.links.4.label'), href: 'https://www.facebook.com/share/p/18BJHABnaf/' },
    ],
  },
  {
    title: t('events.items.1.title'),
    role: t('events.items.1.role'),
    thumb: '/images/events/xtn2022/thumb.jpg',
    images: [
      '/images/events/xtn2022/1.jpg',
      '/images/events/xtn2022/2.jpg',
      '/images/events/xtn2022/3.jpg',
      '/images/events/xtn2022/4.jpg',
    ],
    summary: t('events.items.1.summary'),
    responsibilities: [
      t('events.items.1.responsibilities.0'),
      t('events.items.1.responsibilities.1'),
    ],
    impact: [
      t('events.items.1.impact.0'),
      t('events.items.1.impact.1'),
    ],
    links: [
      { label: t('events.items.1.links.0.label'), href: 'https://www.facebook.com/share/p/19NLT2mvud/' },
      // {
      //   label: t('events.items.1.links.1.label'),
      //   href: 'https://drive.google.com/drive/folders/1HIB2RDfBwU_eM46G0jUEVtBXgBKdWuCX?usp=drive_link',
      // },
    ],
  },
  {
    title: t('events.items.2.title'),
    role: t('events.items.2.role'),
    thumb: '/images/events/xsc2023/thumb.jpg',
    images: [
      '/images/events/xsc2023/1.jpg',
      '/images/events/xsc2023/2.jpg',
      '/images/events/xsc2023/3.jpg',
      '/images/events/xsc2023/4.jpg',
      '/images/events/xsc2023/5.jpg',
      '/images/events/xsc2023/6.jpg',
      '/images/events/xsc2023/7.jpg',
      '/images/events/xsc2023/8.jpg',
    ],
    summary: t('events.items.2.summary'),
    responsibilities: [
      t('events.items.2.responsibilities.0'),
      t('events.items.2.responsibilities.1'),
      t('events.items.2.responsibilities.2'),
      t('events.items.2.responsibilities.3'),
      t('events.items.2.responsibilities.4'),
    ],
    impact: [
      t('events.items.2.impact.0'),
      t('events.items.2.impact.1'),
      t('events.items.2.impact.2'),
    ],
    links: [
      { label: t('events.items.2.links.0.label'), href: 'https://www.facebook.com/share/p/16hyS7NHwR/' },
      // {
      //   label: t('events.items.2.links.1.label'),
      //   href: 'https://drive.google.com/drive/folders/1UFdKIkak2WcURRhlz7i5KzhkDTTm5e3d?usp=drive_link',
      // },
    ],
  },
  {
    title: t('events.items.3.title'),
    role: t('events.items.3.role'),
    thumb: '/images/events/mm2023/thumb.jpg',
    images: ['/images/events/mm2023/1.jpg', '/images/events/mm2023/2.jpg'],
    summary: t('events.items.3.summary'),
    responsibilities: [
      t('events.items.3.responsibilities.0'),
      t('events.items.3.responsibilities.1'),
      t('events.items.3.responsibilities.2'),
      t('events.items.3.responsibilities.3'),
      t('events.items.3.responsibilities.4'),
    ],
    impact: [
      t('events.items.3.impact.0'),
      t('events.items.3.impact.1'),
      t('events.items.3.impact.2'),
    ],
    links: [
      { label: t('events.items.3.links.0.label'), href: 'https://www.facebook.com/share/p/1EkzovC5uP/' },
      // {
      //   label: t('events.items.3.links.1.label'),
      //   href: 'https://drive.google.com/drive/folders/1dXW4pBkYKI2T1G5c-lT8YEsVfVejlltF?usp=drive_link',
      // },
    ],
  },
  {
    title: t('events.items.4.title'),
    role: t('events.items.4.role'),
    thumb: '/images/events/sr2023/thumb.jpg',
    images: [
      '/images/events/sr2023/1.jpg',
      '/images/events/sr2023/2.jpg',
      '/images/events/sr2023/3.jpg',
      '/images/events/sr2023/4.jpg',
      '/images/events/sr2023/5.jpg',
      '/images/events/sr2023/6.jpg',
      '/images/events/sr2023/7.jpg',
    ],
    summary: t('events.items.4.summary'),
    responsibilities: [
      t('events.items.4.responsibilities.0'),
      t('events.items.4.responsibilities.1'),
      t('events.items.4.responsibilities.2'),
      t('events.items.4.responsibilities.3'),
      t('events.items.4.responsibilities.4'),
    ],
    impact: [
      t('events.items.4.impact.0'),
      t('events.items.4.impact.1'),
      t('events.items.4.impact.2'),
      t('events.items.4.impact.3'),
    ],
    links: [
      { label: t('events.items.4.links.0.label'), href: 'https://www.facebook.com/StartupRunwayDUE' },
      // {
      //   label: t('events.items.4.links.1.label'),
      //   href: 'https://drive.google.com/drive/folders/1ewmbp6Cd7CBI2ROjnSnzX5er_HiWySqB?usp=drive_link',
      // },
    ],
  },
  {
    title: t('events.items.5.title'),
    role: t('events.items.5.role'),
    thumb: '/images/events/xsc2024/thumb.jpg',
    images: ['/images/events/xsc2024/1.jpg'],
    summary: t('events.items.5.summary'),
    responsibilities: [
      t('events.items.5.responsibilities.0'),
      t('events.items.5.responsibilities.1'),
      t('events.items.5.responsibilities.2'),
      t('events.items.5.responsibilities.3'),
      t('events.items.5.responsibilities.4'),
    ],
    impact: [
      t('events.items.5.impact.0'),
      t('events.items.5.impact.1'),
      t('events.items.5.impact.2'),
      t('events.items.5.impact.3'),
      t('events.items.5.impact.4'),
    ],
    links: [
      { label: t('events.items.5.links.0.label'), href: 'https://www.facebook.com/share/p/16CKc8eKuN/' },
      // {
      //   label: t('events.items.5.links.1.label'),
      //   href: 'https://drive.google.com/drive/folders/1l6i94A7VxaFmAD6nka43ifPWs2dFaBZm?usp=drive_link',
      // },
    ],
  },
]
