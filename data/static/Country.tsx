import StaticDataElement from "./StaticDataElement";
import {getById, getValuesOf} from "./UtilityFunctions";
import Continent from "./Continent";

export default class Country extends StaticDataElement {
    protected constructor(name: string, public readonly continent: Continent) {super(name);}

    public static readonly Spain: Country = new Country("Spain", Continent.Europe);
    public static readonly Germany: Country = new Country("Germany", Continent.Europe);
    public static readonly France: Country = new Country("France", Continent.Europe);
    public static readonly Sweden: Country = new Country("Sweden", Continent.Europe);
    public static readonly Israel: Country = new Country("Israel", Continent.Europe);

    private static values(): Country[] {
        return getValuesOf<Country>(Country);
    }

    public static fromName(name: string): Country | undefined {
        return this.values().find(c => c.name.toLowerCase() === name.toLowerCase());
    }

    public static fromId(id: number): Country | undefined {
        return getById<Country>(Country, id);
    }
}