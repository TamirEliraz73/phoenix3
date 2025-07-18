import NavigationOption from "@/data/navbar/NavigationOption";
import {IRString} from "@/lib/i18n/IRString";
import {LaLiga} from "#/data/static/Leagues";

export const FootballLaLiga: NavigationOption = NavigationOption.create(
    LaLiga.name,
    '/football/spain/laliga',
    LaLiga.imageSrc
);
export const FootballSpain:NavigationOption = NavigationOption.create(
    new IRString('country.spain'),
    '/football/spain',
    'https://flagcdn.com/w40/es.png',
    [FootballLaLiga]
)