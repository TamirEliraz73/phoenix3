// src/components/ui/PhoenixBtn.tsx
import {cva} from 'class-variance-authority';
import React from 'react';
import {PhoenixProps} from "@/ui/dsl/PhoenixProps";

const button = cva(
    'rounded px-4 py-2 transition-colors duration-200',
    {
        variants: {
            variant: {
                primary: 'bg-gray-600 text-white hover:bg-blue-700 shadow-md',
                secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
                danger: 'bg-red-500 text-white hover:bg-red-600',
                navbar: 'flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-sm'
            },
            size: {
                sm: 'text-sm',
                md: 'text-base',
                lg: 'text-lg',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    });

type ButtonProps = {
    children: React.ReactNode;
    variant?: PhoenixProps | 'danger' | 'navbar';
    size?: 'sm' | 'md' | 'lg';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function PhoenixBtn({children, variant, size, className, ...props}: ButtonProps) {
    return (
        <button
            className={button({variant, size, className})}
            {...props}
        >
            {children}
        </button>
    );
}
