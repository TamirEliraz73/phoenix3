import {IRString} from "@/lib/i18n/IRString";
import NavigationOption from "@/data/navbar/NavigationOption";

export const FootballLigatHaal: NavigationOption = NavigationOption.create(
    new IRString('football.ligathaal'),
    '/football/israel/ligathaal',
    'https://flagcdn.com/w40/il.png'
);
export const FootballIsrael:NavigationOption = NavigationOption.create(
    new IRString('country.israel'),
    '/football/israel',
    'https://flagcdn.com/w40/il.png',
    [FootballLigatHaal]
)