'use client'
import {JSX} from "react";
import LeagueTable from "@/app/football/LeagueTable";
import {PrimerLeague25_26LiveData} from "@/app/football/england/primerleague/PrimerLeague25_26LiveData";
import {PremierLeague} from "../../../../../data/static/Leagues";

export default function PrimerLeaguePage(): JSX.Element {
    return (<LeagueTable teams={PrimerLeague25_26LiveData} league={PremierLeague}/>)
}