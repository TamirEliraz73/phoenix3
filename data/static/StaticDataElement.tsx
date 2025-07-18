'use client'
import {IRString} from "@/lib/i18n/IRString";
import UIdGenerator from "@/generators/UIdGenerator";


export default abstract class StaticDataElement {
    public readonly id: number;
    public readonly irTranslatedName: IRString;

    protected constructor(public readonly name: string | IRString) {
        this.id = UIdGenerator.generate();
        this.irTranslatedName = typeof name === 'string' ? new IRString(name) : name;
    }
}