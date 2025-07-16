import NavigationOption from "@/data/navbar/NavigationOption";
import {IRString} from "@/lib/i18n/IRString";

export const FootballLaLiga: NavigationOption = NavigationOption.create(
    new IRString('football.laliga'),
    '/football/spain/laliga',
    'https://flagcdn.com/w40/es.png'
);
export const FootballSpain:NavigationOption = NavigationOption.create(
    new IRString('country.spain'),
    '/football/spain',
    'https://flagcdn.com/w40/es.png',
    [FootballLaLiga]
)