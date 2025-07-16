'use client'
import NavigationOption from "@/data/navbar/NavigationOption";
import {useTranslation} from "@/lib/i18n/LocaleTranslation";
import {useState} from "react";
import {LocaleNamespace} from "@/lib/i18n/config";
import Image from "next/image";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);
    const {t} = useTranslation([LocaleNamespace.NAVBAR]);

    return (
        <div>
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="text-white px-3 py-2 rounded hover:bg-blue-600"
            >
                ☰
            </button>

            {open && (
                <div className="absolute left-0 top-full bg-gray-700 shadow-md rounded p-2 w-60 mt-2 z-50">
                    {NavigationOption.all().map((op) => (
                        <a
                            key={op.href}
                            href={op.href}
                            className="flex items-center gap-2 text-white px-3 py-2 hover:bg-blue-600 rounded"
                        >
                            <Image src={op.imageSrc} alt="" width={20} height={20} />
                            <span>{t(op.name)}</span>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
