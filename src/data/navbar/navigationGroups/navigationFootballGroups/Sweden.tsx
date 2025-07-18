import {IRString} from "@/lib/i18n/IRString";
import NavigationOption from "@/data/navbar/NavigationOption";
import {Allsvenskan} from "#/data/static/Leagues";

export const FootballAllsvenskan: NavigationOption = NavigationOption.create(
    Allsvenskan.name,
    '/football/sweden/allsvenskan',
    Allsvenskan.imageSrc
);
export const FootballSweden:NavigationOption = NavigationOption.create(
    new IRString('country.sweden'),
    '/football/sweden',
    'https://flagcdn.com/w40/se.png',
    [FootballAllsvenskan]
)