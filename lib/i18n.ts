import en from '@/dictionaries/en.json'
import pt from '@/dictionaries/pt.json'

export type Locale = 'en' | 'pt'
export type Dictionary = typeof en

const dictionaries: Record<Locale, Dictionary> = { en, pt }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en
}
