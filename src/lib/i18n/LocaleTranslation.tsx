'use client'

import {ALL_Locale_NAMESPACES, LocaleNamespace} from "@/lib/i18n/config";
import {useEffect, useState} from "react";
import {IRString} from './IRString'
import {isModuleWithDefault, translationLoaders} from "@/lib/i18n/translation";
import {useLocale} from "@/providers/LocaleProvider";

export function useTranslation(namespaces: LocaleNamespace[] = ALL_Locale_NAMESPACES) {
    const {locale} = useLocale()
    const [dictionary, setDictionary] = useState<Record<string, string>>({})

    useEffect(() => {
        async function load() {
            const entries = await Promise.all(
                namespaces.map(async ns => {
                    const loader = translationLoaders[ns]?.[locale]
                    if (!loader) {
                        console.warn(`Missing loader for namespace "${ns}" and locale "${locale}"`)
                        return {}
                    }
                    const moduleOrRecord = await loader()
                    if (isModuleWithDefault(moduleOrRecord)) {
                        return moduleOrRecord.default
                    }
                    return moduleOrRecord
                })
            )

            const merged = Object.assign({}, ...entries)
            setDictionary(merged)
        }

        load()
    }, [locale, namespaces.join(',')])

    function t(key: IRString | string): string {
        const resolvedKey = key instanceof IRString ? key.key : key
        return dictionary[resolvedKey] ?? `[${resolvedKey}]`
    }

    return {t}
}