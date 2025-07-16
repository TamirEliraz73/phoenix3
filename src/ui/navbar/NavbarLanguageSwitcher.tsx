/// src/components/LanguageSwitcher.tsx
'use client'

import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {useLocale} from "@/providers";
import {LocaleCode} from "@/lib/i18n/config";
import {
    getDirection,
    getFlagUrl,
    getIsSupported,
    getNativeName
} from "@/lib/i18n/LocaleConfig";
import Image from "next/image";
import {useScrolled} from "@/hooks";
import {menuButton, menuItem, menuItemImage, menuItems} from "@/ui/navbar/cvas/NavbarLanguageSwitcherCva";
import LocaleDirection from "@/lib/i18n/config/LocaleDirection";
import {JSX} from "react";

export default function LanguageSwitcher():JSX.Element {
    const {locale, setLocale} = useLocale()
    const direction: LocaleDirection = getDirection(locale)
    const scrolled: boolean = useScrolled(10)

    return (
        <Menu as="div" className="relative ml-3 text-gray-800" dir={direction.asString}>
            <MenuButton
                className={menuButton()}
                aria-label="Open language menu"
            >
                <span className="sr-only">Open language menu</span>
                <Image
                    width="20"
                    height="20"
                    alt="Language icon"
                    src="https://cdn-icons-png.flaticon.com/512/3898/3898082.png"
                    className={`h-6 w-6 rounded-full object-contain`}
                    draggable={false}
                />
            </MenuButton>

            <MenuItems className={menuItems({isRtl: direction.isRTL})}>
                {Object.values(LocaleCode).map((code) => {
                    const isSupported = getIsSupported(code)
                    const isCurrent = locale === code

                    return (
                        <MenuItem
                            as="button"
                            key={code}
                            onClick={() => isSupported && setLocale(code)}
                            disabled={!isSupported}
                            className={menuItem(code)({isCurrent, isSupported})}
                        >
                            <Image
                                width="20"
                                height="20"
                                src={getFlagUrl(code)}
                                alt={code}
                                className={menuItemImage({isRTL: direction.isRTL})}
                                draggable={false}
                            />
                            <span
                                className={`flex-1 ${direction === LocaleDirection.RTL ? 'text-right' : 'text-left'}`}>{getNativeName(code)}</span>

                            {isCurrent && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-white opacity-80"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </MenuItem>
                    )
                })}
            </MenuItems>
        </Menu>
    )
}
