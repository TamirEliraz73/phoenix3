'use client'
import NavigationOption from "@/data/navbar/NavigationOption";
import React, {JSX, useEffect, useRef, useState} from "react";
import {useTranslation} from "@/lib/i18n/LocaleTranslation";
import {LocaleNamespace} from "@/lib/i18n/config";
import Image from "next/image";

type Navbar2Props = {
    onHeightChange?: (height: number) => void
}
export default function Navbar2({onHeightChange}: Navbar2Props): JSX.Element {
    const {t} = useTranslation([LocaleNamespace.NAVBAR]);
    const navbarRef = useRef<HTMLDivElement>(null);
    const [navbarHeight, setNavbarHeight] = useState<number>(0);

    useEffect(() => {
        if (!navbarRef.current) return;

        const updateHeight = () => {
            const height = navbarRef.current!.offsetHeight;
            setNavbarHeight(height);
            onHeightChange && onHeightChange(height);
        };

        updateHeight();
        const resizeObserver = new ResizeObserver(updateHeight);
        resizeObserver.observe(navbarRef.current);

        return () => resizeObserver.disconnect();
    }, [onHeightChange]);

    return (
        <div
            ref={navbarRef}
            className="fixed top-0 left-0 w-full z-50 bg-gray-800 ps-2 py-2.5 flex gap-5"
        >
            {NavigationOption.all().map((op: NavigationOption, i: number) => (
                    <div key={op.href} className='flex items-center justify-center gap-5 select-none'>
                        <a key={op.href} className="ps-2 py-2 hover:bg-blue-600 text-white rounded flex items-center gap-2">
                            <Image src={op.imageSrc} alt={""} width={25} height={25} className="shrink-0"/>
                            <div className="pe-2">
                                {t(op.name)}
                            </div>
                        </a>
                        {i+1 < NavigationOption.all().length && <div className="">|</div>}
                    </div>
                )
            )}
        </div>
    );
}
// export default function Navbar2(): JSX.Element {
//     const {t} = useTranslation([LocaleNamespace.NAVBAR])
//     return (
//         <div className="flex gap-5 ps-2 py-2.5 fixed w-full top-0 start-0 bg-gray-800">
//             {NavigationOption.all().map((op: NavigationOption) => (
//                 <div key={op.href}>
//                     <a  className="px-4 py-2 hover:bg-blue-600 text-white rounded">{t(op.name)}</a>
//                 </div>
//             ))}
//         </div>
//     )
// }