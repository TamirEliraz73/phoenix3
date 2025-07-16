import {IRString} from "@/lib/i18n/IRString";
import NavigationOption from "@/data/navbar/NavigationOption";

export const FootballAllsvenskan: NavigationOption = NavigationOption.create(
    new IRString('football.allsvenskan'),
    '/football/sweden/allsvenskan',
    'https://flagcdn.com/w40/se.png'
);
export const FootballSweden:NavigationOption = NavigationOption.create(
    new IRString('country.sweden'),
    '/football/sweden',
    'https://flagcdn.com/w40/se.png',
    [FootballAllsvenskan]
)