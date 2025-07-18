import Country from "./Country";
import League from "./League";
import Continent from "./Continent";

export const LaLiga: League = League.create("LaLiga", Country.Spain, (place) => {
    if (place === 1) return "bg-yellow-800/30 text-yellow-300 border-b-2 border-b-yellow-300";
    else if (place < 5) return "bg-green-800/30 text-green-300";
    else if (place === 5) return "bg-green-800/30 text-green-300 !border-b-2 !border-b-green-300";
    else if (place < 7) return "bg-blue-800/30 text-blue-300";
    else if (place === 7) return "bg-blue-800/30 text-blue-300 !border-b-2 !border-b-blue-300";
    else if (place === 8) return "bg-purple-800/30 text-purple-300 !border-b-2 !border-b-purple-300";
    else if (place === 18) return "bg-red-900/50 text-red-300 !border-t-2 !border-red-300";
    else if (place > 18) return "bg-red-900/50 text-red-300";
    return "";
});

export const PremierLeague: League = League.create("PremierLeague", Country.England, (place) => {
    if (place === 1) return "bg-yellow-800/30 text-yellow-300 !border-b-2 !border-b-yellow-300";
    else if (place < 4) return "bg-green-800/30 text-green-300";
    else if (place === 4) return "bg-green-800/30 text-green-300 !border-b-2 !border-b-green-300";
    else if (place === 5) return "bg-blue-800/30 text-blue-300 !border-b-2 !border-b-blue-300";
    else if (place === 6) return "bg-purple-800/30 text-purple-300 !border-b-2 !border-b-purple-300";
    else if (place === 18) return "bg-red-900/50 text-red-300 !border-t-2 !border-red-300";
    else if (place > 18) return "bg-red-900/50 text-red-300";
    return "";
});

export const Allsvenskan: League = League.create("Allsvenskan", Country.Sweden, (place) => {
    if (place === 1) return "bg-yellow-800/30 text-yellow-200 !border-b !border-yellow-400";
    else if (place < 4) return "bg-green-800/30 text-green-200";
    else if (place >= 14) return "bg-red-900/30 text-red-300";
    return "";
});

export const ChampionsLeague: League = League.create("UEFA Champions League", Continent.Europe, (place) => {
    if (place < 8) return "bg-yellow-900/30 text-yellow-200";
    if (place === 8) return "bg-yellow-900/30 text-yellow-200 !border-b-2 !border-b-yellow-400";
    else if (place < 16) return "bg-green-900/30 text-green-200";
    else if (place === 16) return "bg-green-900/30 text-green-300 !border-b-2 !border-green-300";
    else if (place < 24) return "bg-blue-900/30 text-blue-200";
    else if (place === 24) return "bg-blue-900/30 text-blue-300 !border-b-2 !border-blue-300";
    else return "";
});

export const LigatHaal:League = League.create('Ligat Haal',Country.Israel, (place)=>{
    if (place < 6) return "bg-green-900/30 text-green-200";
    if (place === 6) return "bg-green-900/30 text-green-200 !border-b-2 !border-b-green-400";
    return "bg-red-900/30 text-red-200"
})