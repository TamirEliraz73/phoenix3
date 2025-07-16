import {cva} from "class-variance-authority";
import {getCurrentColor, getHoverColor} from "@/lib/i18n/LocaleConfig";
import {LocaleCode} from "@/lib/i18n/config";

export const menuButton = cva(
    'relative flex items-center rounded-full bg-gray-800 p-2 text-sm text-white shadow-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 transition',
)
export const menuItems = cva(
    'absolute z-10 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/10 border border-gray-200 focus:outline-none overflow-hidden text-gray-700',
    {
        variants: {
            isRtl: {
                true: 'origin-top-left left-0',
                false: 'origin-top-right right-0',
            }
        }
    }
)
export const menuItem = (code: LocaleCode) => cva(
    'group flex w-full px-4 py-2 text-sm font-medium rounded transition-colors duration-200 ease-in-out flex-row items-center',
    {
        variants: {
            isCurrent: {
                true: `${getCurrentColor(code)} text-white shadow-md'`,
                false: 'text-gray-700'
            },
            isSupported: {
                true: `${getHoverColor(code)} hover:text-white shadow-md'`,
                false: 'opacity-40 cursor-not-allowed'
            }
        },
    }
)
export const menuItemImage = cva(
    'h-5 w-7 rounded-sm object-cover drop-shadow-sm',
    {
        variants: {
            isRTL: {
                true: 'ml-3',
                false: 'mr-3'
            }
        }
    }
)