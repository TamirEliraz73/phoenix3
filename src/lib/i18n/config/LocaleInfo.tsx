import {LocaleCode} from "@/lib/i18n/config/LocaleCode";
import LocaleDirection from "@/lib/i18n/config/LocaleDirection";

export type LocaleInfo = {
    code: LocaleCode
    name: string
    nativeName: string
    dir?: LocaleDirection
    flagUrl: string
    supported?: boolean
    currentColor: string
    hoverColor: string
}