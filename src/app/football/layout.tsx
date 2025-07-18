// app/football/layout.tsx
'use client';
import { JSX, ReactNode } from "react";
import {Barcelona, RealMadrid, AtleticoMadrid} from '#/data/static/teams'

const teams :Team[] = [Barcelona,RealMadrid, AtleticoMadrid]
function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function FootballLayout({ children }: { children: ReactNode }): JSX.Element {
    return (<>{children}</>)
    // const { t } = useTranslation([LocaleNamespace.FOOTBALL]);
    // const pathname:string = usePathname()
    // return (
    //     <div className="mx-0 min-w-full min-h-full"> {/* תן מקום מתחת ל-navbar הראשי */}
    //         <div className="flex">
    //             <aside className="text-white pt-20 p-4 text-center bg-gradient-to-br from-blue-900 via-yellow-900 to-blue-900">
    //                 {/* sidebar פנימי */}
    //                 <nav>
    //                     <ul className="space-y-5">
    //                         {teams.map((team: Team) => {
    //                             const ref = team.name.toString().toLowerCase()
    //                             const isCurrent = pathname === /football/+ref
    //                             return (
    //                                 <li
    //                                     key={ref}>
    //                                     <a
    //                                         aria-current={isCurrent ? 'page' : undefined}
    //                                         className={classNames(
    //                                             isCurrent
    //                                                 ? 'bg-gray-900 text-white'
    //                                                 : 'text-gray-300 hover:bg-gray-700 hover:text-white',
    //                                             'flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium'
    //                                         )}
    //                                         href={`/football/${ref}`} >
    //                                         {t(team.displayName)}
    //                                     </a>
    //                                 </li>
    //                             )
    //                         })}
    //                     </ul>
    //                 </nav>
    //             </aside>
    //
    //             {/*<main className="flex-1 p-4">*/}
    //             <main className="flex-1  min-w-full min-h-full">
    //                 {children}
    //             </main>
    //             {/*</main>*/}
    //         </div>
    //     </div>
    // );
}
