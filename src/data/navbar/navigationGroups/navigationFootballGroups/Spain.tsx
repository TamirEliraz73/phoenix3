import NavigationOption from "@/data/navbar/NavigationOption";
import {IRString} from "@/lib/i18n/IRString";

export const FootballLaLiga: NavigationOption = NavigationOption.create(
    new IRString('football.laliga'),
    '/football/spain/laliga',
    'https://1000logos.net/wp-content/uploads/2019/01/Spanish-La-Liga-Logo-2016-768x432.png'
);
export const FootballSpain:NavigationOption = NavigationOption.create(
    new IRString('country.spain'),
    '/football/spain',
    'https://flagcdn.com/w40/es.png',
    [FootballLaLiga]
)