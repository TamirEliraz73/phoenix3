import NavigationOption from "@/data/navbar/NavigationOption";
import {IRString} from "@/lib/i18n/IRString";

export const  FootballChampionsLeague : NavigationOption = NavigationOption.create(
    new IRString('football.championsleague'),
    '/football/europe/championsleague',
    'https://flagcdn.com/w40/eu.png'
);
export const FootballEuropean:NavigationOption = NavigationOption.create(
    new IRString('country.europe'),
    '/football/europe',
    'https://flagcdn.com/w40/eu.png',
    [FootballChampionsLeague]
)