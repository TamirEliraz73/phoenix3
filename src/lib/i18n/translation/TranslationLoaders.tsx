'use client'
import {LocaleCode, LocaleNamespace} from "@/lib/i18n/config";
import {TranslationModule} from "@/lib/i18n/translation/TranslationModule";

export const translationLoaders: Record<LocaleNamespace, Record<LocaleCode, () => Promise<TranslationModule>>> = {
    [LocaleNamespace.NAVBAR]: {
        [LocaleCode.EN]: () => import('@/locales/navbar/en.json'),
        [LocaleCode.HE]: () => import('@/locales/navbar/he.json'),
        [LocaleCode.SV]: () => import('@/locales/navbar/sv.json'),
    }, [LocaleNamespace.HOME]: {
        [LocaleCode.EN]: () => import('@/locales/home/en.json'),
        [LocaleCode.HE]: () => import('@/locales/home/he.json'),
        [LocaleCode.SV]: () => import('@/locales/home/sv.json'),
    }, [LocaleNamespace.ABOUT]: {
        [LocaleCode.EN]: () => import('@/locales/about/en.json'),
        [LocaleCode.HE]: () => import('@/locales/about/he.json'),
        [LocaleCode.SV]: () => import('@/locales/about/sv.json'),
    }, [LocaleNamespace.COMMON]: {
        [LocaleCode.EN]: () => import('@/locales/common/en.json'),
        [LocaleCode.HE]: () => import('@/locales/common/he.json'),
        [LocaleCode.SV]: () => import('@/locales/common/sv.json'),
    }, [LocaleNamespace.FOOTBALL]: {
        [LocaleCode.EN]: () => import('@/locales/football/en.json'),
        [LocaleCode.HE]: () => import('@/locales/football/he.json'),
        [LocaleCode.SV]: () => import('@/locales/football/sv.json'),
    }, [LocaleNamespace.COUNTRY]: {
        [LocaleCode.EN]: () => import('@/locales/country/en.json'),
        [LocaleCode.HE]: () => import('@/locales/country/he.json'),
        [LocaleCode.SV]: () => import('@/locales/country/sv.json'),
    }
}