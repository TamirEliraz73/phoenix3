import NavigationOption from "@/data/navbar/NavigationOption";
import {IRString} from "@/lib/i18n/IRString";
import {ChampionsLeague} from "#/data/static/Leagues";

export const FootballChampionsLeague: NavigationOption = NavigationOption.create(
    ChampionsLeague.name,
    '/football/europe/championsleague',
    ChampionsLeague.imageSrc
);
export const FootballEuropean: NavigationOption = NavigationOption.create(
    new IRString('country.europe'),
    '/football/europe',
    'https://flagcdn.com/w40/eu.png',
    [FootballChampionsLeague]
)