import StaticDataElement from "./StaticDataElement";
import {getById, getValuesOf} from "./UtilityFunctions";
import {IRString} from "@/lib/i18n/IRString";

export default class Continent extends StaticDataElement {
    private constructor(name: IRString | string) { super(name);}

    public static readonly Europe: Continent = new Continent("Europe");

    private static values(): Continent[] {
        return getValuesOf<Continent>(Continent);
    }

    public static fromName(name: string): Continent | undefined {
        return this.values().find(c => c.name.toLowerCase() === name.toLowerCase());
    }

    public static fromId(id: number): Continent | undefined {
        return getById<Continent>(Continent, id);
    }
}