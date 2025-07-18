import NavigationOption from "@/data/navbar/NavigationOption";
import {IRString} from "@/lib/i18n/IRString";

export const FootballPrimerLeague : NavigationOption = NavigationOption.create(
    new IRString('football.primerleague'),
    '/football/england/primerleague',
    'https://logos-world.net/wp-content/uploads/2023/02/Premier-League-Logo-500x281.png'
    //'https://w7.pngwing.com/pngs/157/277/png-transparent-lion-king-illustration-2016u201317-premier-league-1999u20132000-fa-premier-league-2017u201318-premier-league-english-football-league-chelsea-f-c-premier-league-file-purple-violet-logo-thumbnail.png'
);
export const FootballEngland:NavigationOption = NavigationOption.create(
    new IRString('country.england'),
    '/football/england',
    'https://flagcdn.com/w40/gb-eng.png',
    [FootballPrimerLeague]
)