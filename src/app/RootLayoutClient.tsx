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

export default function RootLayoutClient({children}: { children: React.ReactNode }): JSX.Element {
    return (
        <>
            <MyHeader/>
            <div className="flex min-h-screen mt-12">
                {/* Sidebar */}
                <aside className="w-60 bg-gray-800 text-white p-4 space-y-2">
                    {allNavigationOptions.map((op) => {
                        const isDropdown = !!op.children;
                        // const isOpen = openDropdown === op.name.key

                        return (<div key={UIdGenerator.generate()}>
                            {isDropdown ? <DropdownButton op={op}/> : <NavButton op={op}/>}
                        </div>)
                    })}
                </aside>

                {/* Main area: header + content */}
                <div className="flex flex-col flex-1 min-w-0">
                    {/* Main Content */}
                    <main className="flex-1 bg-white overflow-auto">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}
