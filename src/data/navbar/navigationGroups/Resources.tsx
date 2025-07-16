import {IRString} from "@/lib/i18n/IRString";
import NavigationOption from "@/data/navbar/NavigationOption";

export const ResourcesEnglish: NavigationOption = NavigationOption.create(
    new IRString('nav.english'),
    '/resources/english',
    'https://cdn-icons-png.flaticon.com/512/16206/16206949.png'
);
export const ResourcesMath: NavigationOption = NavigationOption.create(
    new IRString('nav.mathematics'),
    '/resources/mathematics',
    'https://cdn-icons-png.flaticon.com/512/4720/4720458.png'
);

export const Resources: NavigationOption = NavigationOption.create(
    new IRString('nav.resources'),
    '/resources',
    'https://cdn-icons-png.flaticon.com/512/11998/11998710.png',
    [ResourcesEnglish, ResourcesMath]
);