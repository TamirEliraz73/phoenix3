import StaticDataElement from "./StaticDataElement";
import Country from "./Country";
import Continent from "./Continent";

export default class Liga extends StaticDataElement {
    private constructor(name: string, public readonly area: Country | Country[] | Continent | Continent[]) {super(name);}

    public static readonly LaLiga: Liga = new Liga("LaLiga", Country.Spain);
    public static readonly Allsvenskan: Liga = new Liga("Allsvenskan", Country.Sweden);
    public static readonly ChampionsLeague: Liga = new Liga("UEFA Champions League", Continent.Europe);
}