import type { Locale } from './config';
import { en } from './dictionaries/en';
import { lt } from './dictionaries/lt';

/** Dictionary shape — derived from the English dictionary (the source of truth). */
export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, lt };

/** Return the dictionary for a locale. Synchronous — dictionaries are small. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
