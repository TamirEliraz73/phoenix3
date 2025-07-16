import {cva} from 'class-variance-authority';

export const navbarCva = cva(
    //'fixed top-0 start-0 w-full z-50 transition-colors duration-300 backdrop-blur-md',
    'fixed top-0 w-full h-12 z-50 text-white flex justify-end items-center px-4 shadow shrink-0',
    {
        variants: {
            scrolled: {
                true: 'bg-gray-900/80 text-white shadow-md',
                false: 'bg-gray-900 text-white',
            },
        },
    }
)
export const navbarDesktopCva = cva(
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
