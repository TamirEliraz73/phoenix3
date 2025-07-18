import NavigationOption from "@/data/navbar/NavigationOption";
import {IRString} from "@/lib/i18n/IRString";
import {PremierLeague} from "#/data/static/Leagues";

export const FootballPrimerLeague : NavigationOption = NavigationOption.create(
    PremierLeague.name,
    '/football/england/primerleague',
    PremierLeague.imageSrc
    //'https://w7.pngwing.com/pngs/157/277/png-transparent-lion-king-illustration-2016u201317-premier-league-1999u20132000-fa-premier-league-2017u201318-premier-league-english-football-league-chelsea-f-c-premier-league-file-purple-violet-logo-thumbnail.png'
);
export const FootballEngland:NavigationOption = NavigationOption.create(
    new IRString('country.england'),
    '/football/england',
    'https://flagcdn.com/w40/gb-eng.png',
    [FootballPrimerLeague]
)