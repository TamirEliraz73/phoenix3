import {cva} from "class-variance-authority";
import {usePathname} from "next/navigation";
import {useTranslation} from "@/lib/i18n/LocaleTranslation";
import {LocaleNamespace} from "@/lib/i18n/config";
import {NavigationOptions} from "@/ui/navbar/NavbarDesktop";
import Image from 'next/image';

export const navbarItemCva = cva(
    'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200',
    {
        variants: {
            current: {
                true: 'bg-gray-900 text-white',
                false: 'text-gray-300 hover:bg-gray-700 hover:text-white',
            },
        },
    }
);

export function NavbarDesktopItem({item}: { item: NavigationOptions }) {
    const pathname = usePathname();
    const {t} = useTranslation([LocaleNamespace.NAVBAR]);
    const isCurrent = pathname === item.href;
    const imageDim:number = 1000

    return (
        <a
            href={item.href}
            aria-current={isCurrent ? 'page' : undefined}
            className={navbarItemCva({current: isCurrent})}
        >
            <span className="flex items-center gap-2 min-w-5">
                <div className='w-5 h-5'>
                    {item.imageSrc && (
                        <Image
                            src={item.imageSrc}
                            alt=""
                            fill={true}
                            className="inline-block align-middle"
                        />
                    )}
                </div>

                {t(item.name)}
            </span>
        </a>
    );
}