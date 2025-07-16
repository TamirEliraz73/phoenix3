// src/app/about/page.tsx
'use client'

import {IRString} from '@/lib/i18n/IRString'
import Image from 'next/image';
import {useTranslation} from "@/lib/i18n/LocaleTranslation";
import {LocaleNamespace} from "@/lib/i18n/config";

export default function AboutPage() {
    const { t } = useTranslation([LocaleNamespace.ABOUT])

    return (
            <div className="max-w-5xl mx-auto py-20 px-6 space-y-16">

                {/* שורה עליונה: תמונה + כותרת ראשית */}
                <div className="flex flex-col md:flex-row gap-16">
                    {/* תמונה בצד שמאל למעלה */}
                    <div className="flex-shrink-0 w-full md:w-1/4">
                        {/*rounded-xl*/}
                        <div className="relative w-full aspect-[4/5] rounded-4xl overflow-hidden shadow-lg border border-gray-700">
                            {/*https://static.vecteezy.com/system/resources/previews/019/900/306/non_2x/happy-young-cute-illustration-face-profile-png.png*/}
                            <Image
                                layout="fill"
                                src="/assets/profile.PNG"
                                alt={t(new IRString('about.hero.imageAlt'))}
                                className="object-cover w-full h-full rounded-xl"
                            />
                            <div className="absolute bottom-2 start-2 bg-black bg-opacity-60 text-gray-300 text-xs px-2 py-1 rounded">
                                {t(new IRString('about.hero.imageCaption'))}
                            </div>
                        </div>
                    </div>

                    {/* כותרת ראשית וטקסט קצר ליד התמונה */}
                    <div className="flex-grow space-y-12">
                        <section className="text-start">
                            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-300 to-pink-500">
                                {t(new IRString('about.hero.title'))}
                            </h1>
                            <p className="mt-4 text-lg text-gray-400 max-w-xl">
                                {t(new IRString('about.hero.intro1'))}
                            </p>
                            <p className="mt-4 text-lg text-gray-400 max-w-xl">
                                {t(new IRString('about.hero.intro2'))}
                            </p>
                        </section>
                    </div>
                </div>

                {/* שאר התוכן – ברוחב מלא מתחת לתמונה והכותרת */}
                <div className="space-y-12">
                    {/* מנטרה צבעונית */}
                    <section className="bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-700 font-mono text-yellow-300 text-lg whitespace-pre-wrap">
                        {t(new IRString('about.mantra.quote'))}
                        <p className="mt-3 text-end text-sm italic text-gray-500">
                            {t(new IRString('about.mantra.signature'))}
                        </p>
                    </section>

                    {/* סקשן 0 */}
                    <section>
                        <h2 className="text-3xl font-semibold text-yellow-400 mb-3">
                            {t(new IRString('about.section1.title'))}
                        </h2>
                        <p className="text-gray-300 leading-relaxed ">
                            {t(new IRString('about.section1.body1'))}{" "}
                            {t(new IRString('about.section1.body2'))}{" "}
                            {t(new IRString('about.section1.body3'))}
                        </p>
                    </section>

                    {/* סקשן 2 */}
                    <section className={"ms-5"}>
                        <h2 className="text-3xl font-semibold text-red-400 mb-3">
                            {t(new IRString('about.section2.title'))}
                        </h2>
                        <p className="text-gray-300 leading-relaxed ">
                            {t(new IRString('about.section2.body1'))}{" "}
                            {t(new IRString('about.section2.body2'))}{" "}
                            {t(new IRString('about.section2.body3'))}
                        </p>
                    </section>

                    {/* סקשן 3 */}
                    <section className={"ms-10"}>
                        <h2 className="text-3xl font-semibold text-blue-400 mb-3">
                            {t(new IRString('about.section3.title'))}
                        </h2>
                        <p className="text-gray-300 leading-relaxed ">
                            {t(new IRString('about.section3.body1'))}{" "}
                            {t(new IRString('about.section3.body2'))}
                        </p>
                    </section>

                    {/* סקשן 4 */}
                    <section className={"ms-15"}>
                        <h2 className="text-3xl font-semibold text-green-400 mb-3">
                            {t(new IRString('about.section4.title'))}
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            {t(new IRString('about.section4.body1'))}{" "}
                            {t(new IRString('about.section4.body2'))}{" "}
                            {t(new IRString('about.section4.body3'))}
                        </p>
                    </section>
                </div>
            </div>

    )
}
