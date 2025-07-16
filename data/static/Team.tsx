import StaticDataElement from "./StaticDataElement";
import Liga from "./Liga";

export default class Team extends StaticDataElement {
    private constructor(name: string, public readonly liga: Liga) {super(name);}
}