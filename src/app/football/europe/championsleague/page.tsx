'use client'
import {JSX} from "react";
import LeagueTable from "@/app/football/LeagueTable";
import {ChampionsLeague25_26LiveData} from "@/app/football/europe/championsleague/ChampionsLeague25_26LiveData";
import {ChampionsLeague} from "../../../../../data/static/Leagues";

export default function ChampionsLeaguePage(): JSX.Element {
    return (
        <LeagueTable teams={ChampionsLeague25_26LiveData} league={ChampionsLeague} size={36}/>
    )
}