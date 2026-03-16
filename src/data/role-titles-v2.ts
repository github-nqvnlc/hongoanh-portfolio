type Translator = (key: string) => string

export const getRoleTitlesV2 = (t: Translator): string[] => [
  t('hero.roleTitles.0'),
  t('hero.roleTitles.1'),
  t('hero.roleTitles.2'),
  t('hero.roleTitles.3'),
  t('hero.roleTitles.4'),
  t('hero.roleTitles.5'),
]
