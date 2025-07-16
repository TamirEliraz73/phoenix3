import NavigationOption from "@/data/navbar/NavigationOption";
import {IRString} from "@/lib/i18n/IRString";
import {
    FootballEngland, FootballEuropean, FootballIsrael, FootballSpain,
    FootballSweden
} from "@/data/navbar/navigationGroups/navigationFootballGroups";

export const Football: NavigationOption = NavigationOption.create(
    new IRString('nav.football'),
    '/football',
    'https://cdn-icons-png.flaticon.com/512/1099/1099672.png',
    [FootballEngland,
        FootballEuropean,
        FootballIsrael,
        FootballSpain,
        FootballSweden]
);