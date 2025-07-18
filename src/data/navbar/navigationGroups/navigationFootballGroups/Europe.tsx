import NavigationOption from "@/data/navbar/NavigationOption";
import {IRString} from "@/lib/i18n/IRString";

export const  FootballChampionsLeague : NavigationOption = NavigationOption.create(
    new IRString('football.championsleague'),
        '/football/europe/championsleague',
    'https://1000logos.net/wp-content/uploads/2022/01/UEFA-Champions-League-logo-2012-768x480.png'
);
export const FootballEuropean:NavigationOption = NavigationOption.create(
    new IRString('country.europe'),
    '/football/europe',
    'https://flagcdn.com/w40/eu.png',
    [FootballChampionsLeague]
)