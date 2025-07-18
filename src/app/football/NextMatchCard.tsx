import {Card} from "@/app/football/LeagueTable";
import {useTranslation} from "@/lib/i18n/LocaleTranslation";
import {LocaleNamespace} from "@/lib/i18n/config";
import Image from "next/image";
import {JSX} from "react";
import Team from "../../../data/static/Team";
import {IRString} from "@/lib/i18n/IRString";
import Timer from "@/ui/Timer";
import {DateTime} from "luxon";
import {Barcelona, RealMadrid} from "../../../data/static/Teams";

interface NextMatchProps {
    teamA: Team;
    teamB: Team;
    dateTime: Date;
}

interface NextMatchTeamDataProps {
    team: Team;
    t: (key: IRString | string) => string;
}

function NextMatchTeamData({team, t}: NextMatchTeamDataProps): JSX.Element {
    return (
        <div className="flex flex-col items-center gap-2 select-none">
            {team.logo && <Image src={team.logo} alt={team.name.toString()} width={50} height={50}/>}
            <span className="text-lg font-semibold text-center text-blue-200">{t(team.name)}</span>
        </div>
    )
}

export default function NextMatchCard({teamA, teamB, dateTime}: NextMatchProps): JSX.Element {
    const {t} = useTranslation([LocaleNamespace.FOOTBALL]);
    const barcaBG :string= 'from-purple-900 via-blue-900 to-purple-900'
    const RealBG :string= 'from-blue-900 via-slate-800 to-blue-900'//'from-indigo-900 via-yellow-900 to-indigo-900'//'from-blue-900 via-slate-800 to-blue-900'
    const isBarca:boolean = teamA === Barcelona || teamB === Barcelona;
    const gameDateTime = DateTime.fromISO(dateTime.toISOString());
    return (
        <Card
            className={`bg-gradient-to-r ${isBarca ? barcaBG : RealBG} text-white shadow-2xl border border-blue-800 p-6 rounded-2xl`}>

            <div className="flex justify-between items-center">
                <NextMatchTeamData t={t} team={teamA}/>

                <div className="text-center">
                    <div className={'text-2xl font-bold text-green-300 pb-3 animate-pulse'}><Timer targetTime={gameDateTime}/></div>
                    <p className="text-lg font-bold text-white">{`${gameDateTime.setLocale('he').weekdayLong}, ${gameDateTime.day} ב${gameDateTime.setLocale('he').monthLong}`}</p>
                    <p className="text-2xl font-extrabold text-green-300 tracking-widest hover:animate-pulse">{`${gameDateTime.toFormat('HH:mm')}`}</p>
                    <p className="text-sm text-gray-300 mt-1">{t("football.stadium")}: {t(teamA.stadium)}</p>
                </div>

                <NextMatchTeamData t={t} team={teamB}/>
            </div>
        </Card>
    );
}
