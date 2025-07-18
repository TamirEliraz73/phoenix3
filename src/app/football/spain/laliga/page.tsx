'use client'
import {JSX} from "react";
import {LaLiga25_26LiveData} from "@/app/football/spain/laliga/LaLiga25_26LiveData";
import LeagueTable from "@/app/football/LeagueTable";
import NextMatchCard from "@/app/football/NextMatchCard";
import {Barcelona, Mallorca, Osasuna, RealMadrid} from "#/data/static/teams";
import {useTranslation} from "@/lib/i18n/LocaleTranslation";
import { LaLiga } from "#/data/static/Leagues";

export default function LaLigaPage(): JSX.Element {
    const {t} = useTranslation();
    return (<div className={'flex flex-col p-2 gap-2'}>
        <div className={'justify-items-center'}>
            <h2 className="font-extrabold text-5xl text-center text-yellow-300 underline">{t("football.next_match")}</h2>
        </div>
        <div className={'flex flex-row justify-center p-10 gap-36'}>
            <div className={'flex-1'}>
                <NextMatchCard teamA={Mallorca} teamB={Barcelona} dateTime={new Date(2025, 7, 16, 20, 30)}/>
            </div>
            {/*<div className={'flex-1'}/>*/}
            <div className={'flex-1'}>
                <NextMatchCard teamA={RealMadrid} teamB={Osasuna} dateTime={new Date(2025, 7, 19, 22, 0)}/>
            </div>
        </div>
        <LeagueTable teams={LaLiga25_26LiveData} league={LaLiga} />
    </div>)
}