'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import vi from '@/messages/vi.json'
import en from '@/messages/en.json'

type Locale = 'vi' | 'en'

type Messages = Record<string, string>

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const dictionaries: Record<Locale, Messages> = {
  vi,
  en,
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const storedLocale = window.localStorage.getItem('locale') as Locale | null
    if (storedLocale && (storedLocale === 'vi' || storedLocale === 'en')) {
      setLocaleState(storedLocale)
    }
  }, [])

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale)
    window.localStorage.setItem('locale', nextLocale)
  }, [])

  const t = useCallback(
    (key: string) => {
      const dict = dictionaries[locale]
      return dict[key] ?? key
    },
    [locale]
  )

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}
