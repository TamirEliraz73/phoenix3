'use client'

import React, {createContext, ReactNode, useContext, useEffect, useMemo, useState} from 'react'
import {LocaleCode} from "@/lib/i18n/config";
import {getDirection, isInLocales} from "@/lib/i18n/LocaleConfig";
import LocaleDirection from "@/lib/i18n/config/LocaleDirection";

type LocaleContextType = {
    locale: LocaleCode
    setLocale: (locale: LocaleCode) => void
    direction: LocaleDirection
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

const STORAGE_KEY = 'locale'

export function LocaleProvider({children, initialLocale}: { children: ReactNode; initialLocale: LocaleCode }) {
    const [locale, setLocaleState] = useState<LocaleCode>(initialLocale)

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY) as LocaleCode | null
        if (saved && saved !== locale && isInLocales(saved)){
            setLocaleState(saved)
        }
    }, [locale])

    const setLocale = (newLocale: LocaleCode) => {
        setLocaleState(newLocale)
        localStorage.setItem(STORAGE_KEY, newLocale)
        document.cookie = `locale=${newLocale}; path=/; max-age=31536000`
    }

    // מעדכן את lang ו-dir בדינמיות (בדפדפן בלבד)
    useEffect(() => {
        document.documentElement.lang = locale
        document.documentElement.dir = getDirection(locale).asString
    }, [locale])

    const value = useMemo(() => ({
        locale,
        setLocale,
        direction: getDirection(locale),
    }), [locale])

    return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale(): LocaleContextType {
    const context = useContext(LocaleContext)
    if (!context) throw new Error('useLocale must be used within a LocaleProvider')
    return context
}
