import StaticDataElement from "./StaticDataElement";
import {getById, getValuesOf} from "./UtilityFunctions";

export default class Continent extends StaticDataElement {
    private constructor(name: string) { super(name);}

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