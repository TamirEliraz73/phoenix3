'use client'
import {JSX, ReactNode} from "react";
import SeasonTeam from "../../../data/static/SeasonTeam";
import {useTranslation} from "@/lib/i18n/LocaleTranslation";
import {LocaleNamespace} from "@/lib/i18n/config";
import {Barcelona, IFKNorrkoping, MaccabiTelAviv, TBD} from "#/data/static/teams";
import UIdGenerator from "@/generators/UIdGenerator";
import Image from "next/image";
import League from "../../../data/static/League";

export function cn(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(" ")
}

export function Card({children, className}: { children: ReactNode; className?: string }) {
    return (
        <div className={cn("rounded-xl border bg-background p-4 shadow", className)}>
            {children}
        </div>
    )
}

export interface LeagueTableProps {
    teams: SeasonTeam[];
    league: League;
    size?: number;
}

function plusMinusString(n: number): string {
    return Math.abs(n).toString() + (n > 0 ? '+' : n < 0 ? '-' : '')
}

function LeagueTableBody({teams, league, size}: LeagueTableProps) {
    const sortedTable = [...teams].sort((a, b) => {
        const pointsA = a.points;
        const pointsB = b.points;
        if (pointsA !== pointsB) return pointsB - pointsA;
        const diffA = a.goalsDifference;
        const diffB = b.goalsDifference;
        if (diffA !== diffB) return diffB - diffA;
        return b.goalsFor - a.goalsFor;
    });
    if (size) {
        const remaining = size - sortedTable.length;
        if (remaining > 0) {
            const tbdTeams = Array.from({length: remaining}, (_, i) =>
                SeasonTeam.create(TBD, 0, 0, 0, 0, 0)
            );
            sortedTable.push(...tbdTeams);
        }
    }

    const {t} = useTranslation([LocaleNamespace.FOOTBALL]);

    return (
        <tbody className="text-white/90 divide-y divide-blue-700">
            {sortedTable.map((team: SeasonTeam, index: number): JSX.Element => {
                const place: number = index + 1;
                const isNorrkoping: boolean = team.team === IFKNorrkoping;
                const isBarcelona: boolean = team.team === Barcelona;
                const isMaccabiTelAviv: boolean = team.team === MaccabiTelAviv;

                // צבע רקע לפי מיקום
                const rowClass = league.getRowClass(place);

                // if (isNorrkoping || isBarcelona || isMaccabiTelAviv) rowClass += " ring-2 ring-cyan-400 font-bold";

                return (
                    <tr key={UIdGenerator.generate() + index}
                        className={(isNorrkoping || isBarcelona || isMaccabiTelAviv) ? `${rowClass} ring-2 ring-cyan-400 font-bold` : `${rowClass}`}>
                        <td className={`py-2 ps-2 font-bold text-yellow-400`}>{place}</td>
                        <td className={`py-2 font-medium ${team.team.logo ? 'flex flex-row gap-2 items-center' : ''}`}>
                            {team.team.logo &&
                                <Image src={team.team.logo} alt={team.name.toString()} width={20} height={20}
                                       className={'select-none'}/>}
                            {
                                t(team.name)
                            }</td>
                        <td className={`py-2 text-start`}>{team.matches}</td>
                        <td className={`py-2 text-start`}>{team.wins}</td>
                        <td className={`py-2 text-start`}>{team.draws}</td>
                        <td className={`py-2 text-start`}>{team.losses}</td>
                        <td className={`py-2 text-start`}>{team.goalsFor}</td>
                        <td className={`py-2 text-start`}>{team.goalsAgainst}</td>
                        <td className={`py-2 text-start`}>{plusMinusString(team.goalsDifference)}</td>
                        <td className={`py-2 text-start`}>{team.points}</td>
                        {/*<td className="py-2 text-start">{index > 0 && sortedTable[index-1].points - team.points}</td>*/}
                    </tr>
                );
            })}
        </tbody>
    );
}

export default function LeagueTable({teams, league, size}: LeagueTableProps): JSX.Element {
    const {t} = useTranslation([LocaleNamespace.FOOTBALL]);
    const header: string[] = [
        "football.#",
        "football.team", "football.match",
        "football.win", "football.tie", "football.loss",
        "football.gf", "football.ga", "football.gd", "football.point"]
    return (
        <Card className="bg-blue-950/60 backdrop-blur-md border border-blue-800 p-4 rounded-2xl shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-center text-green-300">מיקום בליגה עונת 2025-26</h2>
            <table className="w-full text-sm text-start">
                <thead>
                    <tr className="text-blue-300">
                        {header.map((item: string) => (
                            <th key={UIdGenerator.generate()} className="pb-2 text-start">{t(item)}</th>
                        ))}
                    </tr>
                </thead>
                <LeagueTableBody teams={teams} league={league} size={size}/>
            </table>
        </Card>
    )
}