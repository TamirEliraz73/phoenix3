import StaticDataElement from "./StaticDataElement";
import League from "./League";
import {IRString} from "@/lib/i18n/IRString";

export default class Team extends StaticDataElement {
    protected constructor(name: IRString | string, public readonly league: League | League[], public readonly stadium: IRString | string, public readonly logo?: string) {super(name);}

    static create(name: IRString | string, league: League | League[], stadium: IRString | string, logo?: string): Team {return new Team(name, league, stadium, logo);}
}