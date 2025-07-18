import {IRString} from "@/lib/i18n/IRString";
import NavigationOption from "@/data/navbar/NavigationOption";
import {LigatHaal} from "#/data/static/Leagues";

export const FootballLigatHaal: NavigationOption = NavigationOption.create(
    LigatHaal.name,
    '/football/israel/ligathaal',
    LigatHaal.imageSrc
);
export const FootballIsrael:NavigationOption = NavigationOption.create(
    new IRString('country.israel'),
    '/football/israel',
    'https://flagcdn.com/w40/il.png',
    [FootballLigatHaal]
)