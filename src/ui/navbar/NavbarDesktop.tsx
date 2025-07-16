'use client'
import {IRString} from "@/lib/i18n/IRString";
import {NavbarDesktopItem} from "@/ui/navbar/NavbarDesktopItem";

export type NavigationOptions = {
    name: IRString,
    href: string,
    imageSrc?: string
}

export const navigationItems: NavigationOptions[] = [
    {name: new IRString('nav.home'), href: '/', imageSrc: 'https://cdn-icons-png.flaticon.com/512/619/619153.png'},
    {
        name: new IRString('nav.about'),
        href: '/about',
        imageSrc: 'https://cdn-icons-png.flaticon.com/512/3357/3357490.png'
    },
    {
        name: new IRString('nav.contact'),
        href: '/contact',
        imageSrc: 'https://cdn-icons-png.flaticon.com/512/14946/14946653.png'
    },
    {
        name: new IRString('nav.subjects'),
        href: '/subjects',
        imageSrc: 'https://cdn-icons-png.flaticon.com/512/3389/3389081.png'
    },
    {
        name: new IRString('nav.resources'),
        href: '/resources',
        imageSrc: 'https://cdn-icons-png.flaticon.com/512/11998/11998710.png'
    },
    {
        name: new IRString('nav.games'),
        href: '/games',
        imageSrc: 'https://win98icons.alexmeub.com/icons/png/defragment-0.png'
    },//'https://www.fcbarcelona.com/resources/v3.1.0-7182/i/icons/android-icon-192x192.png'
    {
        name: new IRString('nav.football'),
        href: '/football',
        imageSrc: 'https://cdn-icons-png.flaticon.com/512/1099/1099672.png'
    },
    {
        name: new IRString('nav.ukraine'),
        href: '/ukraine',
        imageSrc: 'https://cdn-icons-png.flaticon.com/512/10985/10985844.png'
    },
    {
        name: new IRString('nav.bringThemHome'),
        href: '/bringThemHome',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Yellow_Ribbon.png'
    },

]

export default function NavbarDesktop() {
    return (
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    {navigationItems.map((item) => (
                        <NavbarDesktopItem key={item.href} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
