'use client'
import {JSX, useState} from "react";
import {useTranslation} from "@/lib/i18n/LocaleTranslation";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import League from "#/data/static/League";
import {Allsvenskan, ChampionsLeague, LaLiga, LigatHaal, PremierLeague} from "#/data/static/Leagues";
import UIdGenerator from "@/generators/UIdGenerator";

const leagues: League[] = [
    LaLiga, PremierLeague, Allsvenskan,ChampionsLeague,LigatHaal
];

export default function FootballHomePage(): JSX.Element {
    const [selectedLeague, setSelectedLeague] = useState<League | null>(null);
    const {t} = useTranslation();

    return (
        <main
            className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white p-6 font-sans">
            {/* כותרת עליונה */}
            <div className="text-center pb-10">
                <motion.h1
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1.5}}
                    className="text-5xl font-extrabold tracking-tight text-yellow-200 drop-shadow-md"
                >
                    ⚽ Football Universe
                </motion.h1>
                <p className="text-lg mt-4 text-gray-300">Choose a league and dive in</p>
            </div>

            {/* בחירת ליגה */}
            <section className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
                    {leagues.map((league) => (
                        <button
                            key={UIdGenerator.generate()}
                            onClick={() => setSelectedLeague(league === selectedLeague ? null : league)}
                            className={`bg-black/40 hover:bg-black/60 transition rounded-xl p-4 text-center border border-white/10 ${
                                selectedLeague?.id === league.id ? "ring-2 ring-yellow-300" : ""
                            }`}
                        >
                            <div className="relative h-16 w-16 mx-auto mb-2">
                                <Image src={league.imageSrc}
                                       alt={league.name.toString()} fill
                                       className="object-contain"/>
                            </div>
                            <span className="block text-white text-sm font-semibold">{t(league.name)}</span>
                        </button>
                    ))}
                </div>

                {/* בחירת קבוצה */}
                {/*{selectedLeague && (*/}
                {/*    <motion.div*/}
                {/*        initial={{opacity: 0, y: 20}}*/}
                {/*        animate={{opacity: 1, y: 0}}*/}
                {/*        transition={{duration: 0.6}}*/}
                {/*        className="bg-white/5 rounded-xl p-6"*/}
                {/*    >*/}
                {/*        <h2 className="text-2xl font-bold mb-4 text-yellow-100">*/}
                {/*            {selectedLeague.name} – Choose a team*/}
                {/*        </h2>*/}
                {/*        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">*/}
                {/*            /!*{selectedLeague.teams.map((team) => (*!/*/}
                {/*            /!*    <Link*!/*/}
                {/*            /!*        key={team.id}*!/*/}
                {/*            /!*        href={`/football/${team.id}`}*!/*/}
                {/*            /!*        className="block bg-black/30 hover:bg-black/60 p-3 rounded-lg text-center text-white font-medium border border-white/10"*!/*/}
                {/*            /!*    >*!/*/}
                {/*            /!*        <div className="flex felx-row space-x-12">*!/*/}
                {/*            /!*            <div><Image src='/assets/barcelonaFc.png' alt="" width="36" height="36"/></div>*!/*/}
                {/*            /!*            <div*!/*/}
                {/*            /!*                className="text-center my-auto">{t('football.' + team.name.toLowerCase())}</div>*!/*/}
                {/*            /!*        </div>*!/*/}
                {/*            /!*    </Link>*!/*/}
                {/*            /!*))}*!/*/}
                {/*        </div>*/}
                {/*    </motion.div>*/}
                {/*)}*/}
            </section>
        </main>
    );
}
