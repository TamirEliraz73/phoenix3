import React, {JSX} from "react";
import UIdGenerator from "@/generators/UIdGenerator";
import {navbarItemCva} from "@/ui/navbar/NavbarDesktopItem";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {DropdownButtonProps} from "@/ui/sidenavbar/DropdownButton";
import { useTranslation } from "@/lib/i18n/LocaleTranslation";
export interface NavButtonProps extends DropdownButtonProps {
    extraClassName?: string
}
export default function NavButton({op, extraClassName}:NavButtonProps): JSX.Element {
    const pathname: string = usePathname();
    const {t} = useTranslation();
    const isCurrent: boolean = pathname === op.href;
    return (
        <a
            key={UIdGenerator.generate()}
            href={op.href}
            className={`${navbarItemCva({current: isCurrent})} ${extraClassName ?? ''}`}
        >
            {op.imageSrc && <Image src={op.imageSrc} alt="" width={24} height={24}/>}
            <span className='ps-2'>{t(op.name)}</span>
        </a>
    )
}