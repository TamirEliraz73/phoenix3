'use client'
import {JSX} from "react";
import LeagueTable from "@/app/football/LeagueTable";
import {Allsvenskan} from "../../../../../data/static/Leagues";
import {Allsvenskan25_26LiveData} from "@/app/football/sweden/allsvenskan/Allsvenskan25_26LiveData";

export default function AllsvenskanPage(): JSX.Element{
    return (<LeagueTable league={Allsvenskan} teams={Allsvenskan25_26LiveData}/>)
}