import {LocaleCode, LocaleInfo} from "@/lib/i18n/config";
import LocaleDirection from "@/lib/i18n/config/LocaleDirection";

const LOCALES: Record<LocaleCode, LocaleInfo> = {
    [LocaleCode.EN]: {
        code: LocaleCode.EN,
        name: 'English',
        nativeName: 'English',
        flagUrl: 'gb',
        currentColor: 'bg-red-800',
        hoverColor: 'hover:bg-red-800'
    },
    [LocaleCode.HE]: {
        code: LocaleCode.HE,
        name: 'Hebrew',
        nativeName: 'עברית',
        dir: LocaleDirection.RTL,
        flagUrl: "il",
        currentColor: 'bg-blue-800',
        hoverColor: 'hover:bg-blue-800'
    },
    [LocaleCode.SV]: {
        code: LocaleCode.SV,
        name: 'Swedish',
        nativeName: 'Svenska',
        flagUrl: "se",
        currentColor: 'bg-yellow-800',
        hoverColor: 'hover:bg-yellow-800'
    }
}

export function isInLocales(locale: LocaleCode): boolean {return locale in LOCALES}

export function getDirection(locale: LocaleCode): LocaleDirection {
    // console.log(LOCALES[locale].dir.isLTR === true)

    return LOCALES[locale]?.dir ?? LocaleDirection.LTR
}

export function getNativeName(locale: LocaleCode): string {return LOCALES[locale].nativeName}

export function getFlagUrl(locale: LocaleCode): string {return 'https://flagcdn.com/w40/' + LOCALES[locale].flagUrl + '.png'}

export function getIsSupported(locale: LocaleCode): boolean {return LOCALES[locale].supported ?? true}

export function getCurrentColor(locale: LocaleCode): string {return LOCALES[locale].currentColor}

export function getHoverColor(locale: LocaleCode): string {return LOCALES[locale].hoverColor}

