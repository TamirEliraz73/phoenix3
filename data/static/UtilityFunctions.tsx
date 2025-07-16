import {IRString} from "@/lib/i18n/IRString";
import StaticDataElement from "./StaticDataElement";

export function getValuesOf<T extends StaticDataElement>(cls: any): T[] {
    return Object.values(cls).filter((v): v is T => v instanceof cls);
}

export function getById<T extends StaticDataElement>(cls: any, id: number): T | undefined {
    return getValuesOf<T>(cls).find((v: any) => v.id === id);
}

export function injectTranslations<T extends StaticDataElement>(
    cls: any,
    t: (str: IRString) => string
): void {
    Object.values(cls)
        .filter((v): v is T => v instanceof StaticDataElement)
        .forEach((instance) => {
            Object.defineProperty(instance, 'translatedName', {
                value: t(instance.irTranslatedName),
                writable: false,
                configurable: false,
                enumerable: true,
            });
        });
}