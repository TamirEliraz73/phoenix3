import StaticDataElement from "./StaticDataElement";
import Country from "./Country";
import Continent from "./Continent";
import {IRString} from "@/lib/i18n/IRString";

export default class League extends StaticDataElement {
    private constructor(name: IRString | string,
                        public readonly area: Country | Country[] | Continent | Continent[],
                        public readonly getRowClass?: (place: number) => string) {super(name);}

    static create(name: IRString | string,
                  area: Country | Country[] | Continent | Continent[],
                  getRowClass?: (place: number) => string): League {
        return new League(name, area, getRowClass);
    }
}