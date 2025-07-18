import Team from "./Team";
import {IRString} from "@/lib/i18n/IRString";

export default class SeasonTeam {
    private constructor(public team: Team,
                        public readonly wins: number, public readonly draws: number, public readonly losses: number,
                        public readonly goalsFor: number, public readonly goalsAgainst: number) {}

    static create(team: Team,
                  wins: number, draws: number, losses: number,
                  goalsFor: number, goalsAgainst: number): SeasonTeam {return new SeasonTeam(team, wins, draws, losses, goalsFor, goalsAgainst)}

    get goalsDifference(): number { return this.goalsFor - this.goalsAgainst; }

    get points(): number { return 3 * this.wins + this.draws; }

    get matches(): number { return this.wins + this.draws + this.losses; }

    get name(): string | IRString { return this.team.name; }

    get stadium(): string | IRString { return this.team.stadium; }
}