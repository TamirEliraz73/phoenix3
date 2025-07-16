import NavigationOption from "@/data/navbar/NavigationOption";
import {IRString} from "@/lib/i18n/IRString";

export const FootballPrimerLeague : NavigationOption = NavigationOption.create(
    new IRString('football.primerleague'),
    '/football/england/primerleague',
    'https://flagcdn.com/w40/gb-eng.png'
);
export const FootballEngland:NavigationOption = NavigationOption.create(
    new IRString('country.england'),
    '/football/england',
    'https://flagcdn.com/w40/gb-eng.png',
    [FootballPrimerLeague]
)