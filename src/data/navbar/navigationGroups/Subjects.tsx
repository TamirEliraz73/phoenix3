import NavigationOption from "@/data/navbar/NavigationOption";
import {IRString} from "@/lib/i18n/IRString";

export const SubjectsEnglish: NavigationOption = NavigationOption.create(
    new IRString('nav.english'),
    '/resources/english',
    'https://cdn-icons-png.flaticon.com/512/16206/16206949.png'
);

export const SubjectsMath: NavigationOption = NavigationOption.create(
    new IRString('nav.mathematics'),
    '/resources/mathematics',
    'https://cdn-icons-png.flaticon.com/512/4720/4720458.png'
);

export const SubjectsComputerScience: NavigationOption = NavigationOption.create(
    new IRString('nav.computerscience'),
    '/resources/mathematics',
    'https://cdn-icons-png.flaticon.com/512/8637/8637092.png'
);

export const Subjects: NavigationOption = NavigationOption.create(
    new IRString('nav.subjects'),
    '/subjects',
    'https://cdn-icons-png.flaticon.com/512/3389/3389081.png',
    [SubjectsEnglish, SubjectsMath, SubjectsComputerScience]
);