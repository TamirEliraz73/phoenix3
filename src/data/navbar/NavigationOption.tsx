import {IRString} from "@/lib/i18n/IRString";

export default class NavigationOption {
    private constructor(public readonly name: IRString,
                        public readonly href: string,
                        public readonly imageSrc?: string,
                        public readonly children?: NavigationOption[]) {}

    static create(name: IRString, href: string, imageSrc?: string, children?: NavigationOption[]) {
        return new NavigationOption(name, href, imageSrc, children);
    }

    static readonly Home: NavigationOption = new NavigationOption(
        new IRString('nav.home'),
        '/',
        'https://cdn-icons-png.flaticon.com/512/619/619153.png')

    static readonly About = new NavigationOption(
        new IRString('nav.about'),
        '/about',
        'https://cdn-icons-png.flaticon.com/512/3357/3357490.png'
    );

    static readonly Contact = new NavigationOption(
        new IRString('nav.contact'),
        '/contact',
        'https://cdn-icons-png.flaticon.com/512/14946/14946653.png'
    );

    static readonly Games = new NavigationOption(
        new IRString('nav.games'),
        '/games',
        'https://win98icons.alexmeub.com/icons/png/defragment-0.png'
    );

    static readonly Ukraine = new NavigationOption(
        new IRString('nav.ukraine'),
        '/ukraine',
        'https://cdn-icons-png.flaticon.com/512/10985/10985844.png'
    );

    static readonly BringThemHome = new NavigationOption(
        new IRString('nav.bringThemHome'),
        '/bringThemHome',
        'https://upload.wikimedia.org/wikipedia/commons/d/db/Yellow_Ribbon.png'
    );
}