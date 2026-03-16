type Translator = (key: string) => string

type AwardLink = {
  label: string
  href: string
}

type AwardItem = {
  title: string
  role: string
  thumb: string
  images: string[]
  summary: string
  responsibilities: string[]
  impact: string[]
  links: AwardLink[]
}

export const getAwardsData = (t: Translator): AwardItem[] => [
  {
    title: t('awards.data.0.title'),
    role: t('awards.data.0.role'),
    thumb: '/images/awards/tlt/thumb.jpg',
    images: ['/images/awards/tlt/1.jpg'],
    summary: t('awards.data.0.summary'),
    responsibilities: [
      t('awards.data.0.responsibilities.0'),
      t('awards.data.0.responsibilities.1'),
      t('awards.data.0.responsibilities.2'),
    ],
    impact: [t('awards.data.0.impact.0')],
    links: [{ label: t('awards.data.0.links.0.label'), href: 'https://www.facebook.com/share/p/19JyTew6gS/' }],
  },
  {
    title: t('awards.data.1.title'),
    role: t('awards.data.1.role'),
    thumb: '/images/awards/3th/thumb.jpg',
    images: ['/images/awards/3th/1.jpg', '/images/awards/3th/2.jpg'],
    summary: t('awards.data.1.summary'),
    responsibilities: [
      t('awards.data.1.responsibilities.0'),
      t('awards.data.1.responsibilities.1'),
      t('awards.data.1.responsibilities.2'),
    ],
    impact: [t('awards.data.1.impact.0')],
    links: [
      { label: t('awards.data.1.links.0.label'), href: 'https://www.facebook.com/share/p/1FQnUzTvV7/' },
      {
        label: t('awards.data.1.links.1.label'),
        href: 'https://drive.google.com/file/d/1HLE5H-g6rKfWXH9xVja-bLhsen02zAk6/view?usp=drive_link',
      },
    ],
  },
  {
    title: t('awards.data.2.title'),
    role: t('awards.data.2.role'),
    thumb: '/images/awards/ef/thumb.jpg',
    images: ['/images/awards/ef/1.jpg', '/images/awards/ef/2.jpg'],
    summary: t('awards.data.2.summary'),
    responsibilities: [
      t('awards.data.2.responsibilities.0'),
      t('awards.data.2.responsibilities.1'),
      t('awards.data.2.responsibilities.2'),
    ],
    impact: [t('awards.data.2.impact.0')],
    links: [
      { label: t('awards.data.2.links.0.label'), href: 'https://www.facebook.com/share/p/1AkwvLeRCV/' },
      {
        label: t('awards.data.2.links.1.label'),
        href: 'https://www.facebook.com/BrandingContestDUE/videos/1254842885766074',
      },
    ],
  },
  {
    title: t('awards.data.3.title'),
    role: t('awards.data.3.role'),
    thumb: '/images/awards/tvc/thumb.jpg',
    images: [],
    summary: t('awards.data.3.summary'),
    responsibilities: [
      t('awards.data.3.responsibilities.0'),
      t('awards.data.3.responsibilities.1'),
      t('awards.data.3.responsibilities.2'),
    ],
    impact: [t('awards.data.3.impact.0')],
    links: [
      { label: t('awards.data.3.links.0.label'), href: 'https://www.facebook.com/share/p/1G1rK8HUs9/' },
      {
        label: t('awards.data.3.links.1.label'),
        href: 'https://www.facebook.com/lophocimc/videos/2418322998351946/',
      },
    ],
  },
  {
    title: t('awards.data.4.title'),
    role: t('awards.data.4.role'),
    thumb: '/images/awards/sv5t/thumb.jpg',
    images: ['/images/awards/sv5t/1.jpg'],
    summary: t('awards.data.4.summary'),
    responsibilities: [t('awards.data.4.responsibilities.0')],
    impact: [t('awards.data.4.impact.0')],
    links: [
      // {
      //   label: t('awards.data.4.links.0.label'),
      //   href: 'https://drive.google.com/drive/folders/1kphkoKTcNDxxnGo74FLnq7xSuNv0rRiX?usp=drive_link',
      // },
      // {
      //   label: t('awards.data.4.links.1.label'),
      //   href: 'https://drive.google.com/drive/folders/1eEF-SVMso3JU5sdGmLgqQxC9tpBaoOTV?usp=drive_link',
      // },
    ],
  },
  {
    title: t('awards.data.5.title'),
    role: t('awards.data.5.role'),
    thumb: '/images/awards/nvxs/thumb.jpg',
    images: ['/images/awards/nvxs/1.jpg'],
    summary: t('awards.data.5.summary'),
    responsibilities: [t('awards.data.5.responsibilities.0')],
    impact: [t('awards.data.5.impact.0')],
    links: [
      // {
      //   label: t('awards.data.5.links.0.label'),
      //   href: 'https://drive.google.com/drive/folders/11ztBXsVxQ1rg2Ef_9XugZ8Gdfs50AaaQ?usp=drive_link',
      // },
    ],
  },
]
