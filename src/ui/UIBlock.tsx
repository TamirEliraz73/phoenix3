import React from "react";
import clsx from "clsx";
import {UIElement} from "./UIElement";
import Color from "@/ui/config/color/Color";

type UIBlockProps = {
    element?: UIElement;
    bgColor?: Color[];
    textColor?: Color;
    // hoverBgColor?: Color[];
    // hoverTextColor?: Color;
    minHeightScreen?: boolean;
    className?: string;
    children: React.ReactNode;
};

function buildBgColor(bgColor?: Color[]): string {
    if (!bgColor || bgColor.length === 0) return ''
    else if (bgColor.length === 1) return bgColor[0].bg
    else if (bgColor.length === 2) return `${Color.bgGradient} ${bgColor[0].from} ${bgColor[1].to}`.trim()
    else return `${Color.bgGradient} ${bgColor[0].from} ${bgColor
            .slice(1, -1)
            .map(c => c.via)
            .filter(Boolean)
            .join(" ")} ${bgColor[bgColor.length - 1].to}`.trim()
}

export default function UIBlock({
                                    element,
                                    bgColor,
                                    // hoverBgColor,
                                    textColor,
                                    // hoverTextColor,
                                    minHeightScreen,
                                    className,
                                    children,
                                }: UIBlockProps): React.DetailedReactHTMLElement<{ className: string }, HTMLElement> {


    const bg: string = buildBgColor(bgColor);
    // const bgHover: string = `hover:${buildBgColor(hoverBgColor)}`;
    const minH: string = minHeightScreen ? "min-h-screen" : "";
    const text: string = textColor ? `text-${textColor.name}` : "";
    // const textHover: string = "hover:text-yellow-500";//hoverTextColor ? `hover:text-${hoverTextColor.name}` : "";
    // console.log(textHover)
    const allClasses: string = clsx(bg, minH, text,
        //bgHover,
        // "cursor-pointer",
        // textHover,
        className);

    return React.createElement(element ?? UIElement.Div, {className: allClasses}, children);
}
