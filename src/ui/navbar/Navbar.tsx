'use client'
import {JSX} from "react";
import {Disclosure} from '@headlessui/react'
import {useScrolled} from "@/hooks";
import UIBlock from "@/ui/UIBlock";
import {navbarCva} from './navbar.classes';
import NavbarMobile from "@/ui/navbar/NavbarMobile";
import NavbarDesktop from "@/ui/navbar/NavbarDesktop";
import LanguageSwitcher from "@/ui/navbar/NavbarLanguageSwitcher";

export default function Navbar(): JSX.Element {
    const scrolled: boolean = useScrolled(10)
    return (
        <Disclosure
            as="nav"
            className={navbarCva({ scrolled })}
        >
            <UIBlock className="bg-amber-950 sm:bg-blue-950 lg:bg-yellow-500 lg:ps-2">
                <UIBlock className="relative flex items-center justify-between py-3">
                    <NavbarMobile />
                    <NavbarDesktop />
                    <LanguageSwitcher />
                </UIBlock>
            </UIBlock>
        </Disclosure>
    )
}