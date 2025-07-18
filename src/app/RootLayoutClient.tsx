'use client'
import React, {JSX} from 'react';
import {useScrolled} from "@/hooks";
import LanguageSwitcher from "@/ui/navbar/NavbarLanguageSwitcher";
import {Disclosure} from "@headlessui/react";
import {navbarCva} from "@/ui/navbar/navbar.classes";
import UIdGenerator from "@/generators/UIdGenerator";
import NavButton from "@/ui/sidenavbar/NavButton";
import DropdownButton from "@/ui/sidenavbar/DropdownButton";
import Image from "next/image";
import {allNavigationOptions} from "@/data/navbar/NavigationOptionAll";

export function MyHeader(): JSX.Element {
    const scrolled: boolean = useScrolled(10)
    const flags: string[] = ['Druze', 'flag-of-sweden', 'flag-of-european-union', 'flag-of-wales', 'flag-of-ukraine']
    return (
        <Disclosure as="nav" className={navbarCva({scrolled})}>
            <header className="flex flex-row-reverse items-center justify-between w-full h-12 px-6">
                {/* עמודת שמאל: כפתור שפה */}
                <div className="flex-1 flex justify-end">
                    <LanguageSwitcher/>
                </div>

                {/* עמודת אמצע: דגל */}
                <div className="flex flex-1 justify-center gap-5 select-none">
                    {flags.map((flag) => (
                        <Image
                            key={UIdGenerator.generate()}
                            src={`https://www.flagcolorcodes.com/data/${flag}.png`}
                            alt=""
                            width={20}
                            height={20}
                        />
                    ))}
                </div>

                {/* עמודת ימין: ריק/שמורה לאיזון */}
                <div className="flex flex-1"></div><div className="flex flex-1"></div>
            </header>
        </Disclosure>
    )
}

export  function Footer(): JSX.Element {
    return (
        <footer className="h-16 flex items-center justify-center text-sm text-gray-400 border-t border-gray-700">
            <p>© 2025 My Own Phoenix</p>
        </footer>
    );
}

export default function RootLayoutClient({children}: { children: React.ReactNode }): JSX.Element {
    return (
        <div className="flex flex-col h-full min-h-screen">
            <MyHeader/>
            <div className="flex flex-1 mt-12">
                {/* Sidebar */}
                <aside className="w-60 bg-gray-800 text-white p-4 space-y-2">
                    {allNavigationOptions.map((op) => {
                        const isDropdown = !!op.children;
                        return (
                            <div key={UIdGenerator.generate()} className={'select-none'}>
                                {isDropdown ? <DropdownButton op={op}/> : <NavButton op={op}/>}
                            </div>
                        )
                    })}
                </aside>

                {/* Main area */}
                <div className="flex flex-col flex-1 min-w-0 bg-gradient-to-br from-[#1e1e2f] via-[#2e2e4d] to-[#1e1e2f] text-white">
                    <main className="flex-1 overflow-auto pb-10">
                        {children}
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}