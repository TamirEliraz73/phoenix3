import {IRString} from "@/lib/i18n/IRString";
import NavigationOption from "@/data/navbar/NavigationOption";

export const FootballAllsvenskan: NavigationOption = NavigationOption.create(
    new IRString('football.allsvenskan'),
    '/football/sweden/allsvenskan',
    'https://1000logos.net/wp-content/uploads/2019/01/Allsvenskan-Logo-2012-768x432.png'
);
export const FootballSweden:NavigationOption = NavigationOption.create(
    new IRString('country.sweden'),
    '/football/sweden',
    'https://flagcdn.com/w40/se.png',
    [FootballAllsvenskan]
)