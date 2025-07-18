'use client'
import {JSX} from "react";
import LeagueTable from "@/app/football/LeagueTable";
import {LigatHaal} from "#/data/static/Leagues";
import {LigatHaal25_26LiveData} from "@/app/football/israel/ligathaal/LigatHaal25_26LiveData";

export default function LigatHaalPage(): JSX.Element{
    return (<LeagueTable league={LigatHaal} teams={LigatHaal25_26LiveData}/>)
}