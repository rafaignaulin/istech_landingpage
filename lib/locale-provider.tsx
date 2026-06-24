'use client'

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react'
import { getDictionary, type Locale, type Dictionary } from './i18n'

type LocaleContextType = {
  locale: Locale
  t: Dictionary
  setLocale: (l: Locale) => void
}

const LocaleContext = createContext<LocaleContextType | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')
  const t = getDictionary(locale)

  useEffect(() => {
    const saved = localStorage.getItem('istech-locale') as Locale | null
    if (saved && (saved === 'en' || saved === 'pt')) {
      setLocaleState(saved)
      document.documentElement.lang = saved
    }
  }, [])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    if (typeof window !== 'undefined') {
      localStorage.setItem('istech-locale', l)
      document.documentElement.lang = l
    }
  }, [])

  return (
    <LocaleContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
