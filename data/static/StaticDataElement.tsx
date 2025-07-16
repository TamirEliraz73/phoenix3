'use client'
import {IRString} from "@/lib/i18n/IRString";


export default abstract class StaticDataElement {
    private static _ids: number = 0
    public readonly id: number;
    public readonly irTranslatedName: IRString;
    public readonly translatedName!: string;

    protected constructor(public readonly name: string, irNameOverride?: string) {
        this.id = ++StaticDataElement._ids;
        this.irTranslatedName = new IRString(irNameOverride ?? name);
    }
}