'use client'
import NavigationOption from "@/data/navbar/NavigationOption";
import React, {JSX, useEffect, useState} from "react";
import UIdGenerator from "@/generators/UIdGenerator";
import {navbarItemCva} from "@/ui/navbar/NavbarDesktopItem";
import Image from "next/image";
import {ChevronDownIcon} from "lucide-react";
import NavButton from "@/ui/sidenavbar/NavButton";
import {usePathname} from "next/navigation";
import { useTranslation } from "@/lib/i18n/LocaleTranslation";
export interface DropdownButtonProps {
    op: NavigationOption;
}
export default function DropdownButton({op}:DropdownButtonProps):JSX.Element{
    // const pathname: string = usePathname();
    // const {t} = useTranslation();
    // const autoOpen = pathname.startsWith(op.href) && pathname !== op.href;
    //
    //
    // const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    // const toggleDropdown = (key: string) => {setOpenDropdown(openDropdown === key ? null : key);};
    //
    // const isCurrent = pathname === op.href;
    // const isOpen = openDropdown === op.name.key
    const pathname = usePathname();
    const {t} = useTranslation();

    const isCurrent = pathname === op.href;

    // פתיחה אוטומטית לפי URL אם אחד הילדים תואם
    const autoOpen = pathname.startsWith(op.href) && pathname !== op.href;

    const [manualOpen, setManualOpen] = useState<boolean | null>(null);

    const isOpen = manualOpen === null ? autoOpen : manualOpen;

    const handleToggle = () => {
        setManualOpen(prev => (prev === true ? false : true));
    };

    // Reset לחזור למצב "אוטומטי" אם ה־pathname משתנה לגמרי (כמו מעבר עמוד)
    useEffect(() => {
        if (manualOpen !== null && !pathname.startsWith(op.href)) {
            setManualOpen(null);
        }
    }, [pathname]);
    return (
        <div key={UIdGenerator.generate()}>
            <button
                onClick={handleToggle}
                className={`${navbarItemCva({current: isCurrent})} w-full text-start flex items-center`}
            >
                {op.imageSrc && (
                    <Image src={op.imageSrc} alt="" width={24} height={24}/>
                )}
                <span className={`ps-2 flex-1 ${autoOpen ? 'font-bold text-green-600':''}`}>{t(op.name)}</span>
                <span className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <ChevronDownIcon className="w-4 h-4"/>
                </span>
            </button>

            {isOpen && (
                <div className="ms-7 mt-1 flex flex-col space-y-1 text-sm">
                    {op.children?.map((child) => {
                        const isDropdown = !!child.children;
                        return(
                        <div key={UIdGenerator.generate()}>
                            {/*<NavButton op={child} extraClassName="text-sm ms-3 hover:bg-blue-600 rounded" />*/}
                            {isDropdown ? <DropdownButton op={child}/> : <NavButton op={child} extraClassName="text-sm ms-3 hover:bg-blue-600 rounded"/>}
                        </div>
                    )})}
                </div>
            )}
        </div>
    );


    // return (
    //     <div key={UIdGenerator.generate()}>
    //         <button
    //             onClick={() => {
    //                 toggleDropdown(op.name.key);
    //             }}
    //             className={`${navbarItemCva({current: isCurrent})} w-full text-start flex items-center`}
    //         >
    //             {op.imageSrc && (
    //                 <Image src={op.imageSrc} alt="" width={24} height={24}/>
    //             )}
    //
    //             <span className="ps-2 flex-1">{t(op.name)}</span>
    //
    //             <span
    //                 className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
    //                                         <ChevronDownIcon className="w-4 h-4"/>
    //                                     </span>
    //
    //         </button>
    //         {isOpen && (
    //             <div className="ms-7 mt-1 flex flex-col space-y-1 text-sm">
    //                 {op.children?.map((child) => (
    //                     <div key={UIdGenerator.generate()}>
    //                         <NavButton op={child} extraClassName={'text-sm ms-3 hover:bg-blue-600 rounded'}/>
    //                     </div>
    //                 ))}
    //             </div>
    //         )}
    //     </div>
    // )
}