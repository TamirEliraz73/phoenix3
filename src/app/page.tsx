'use client'
import React from 'react'
// import { Button } from '@/components/ui/button'
import {ArrowRight} from 'lucide-react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {PhoenixBtn} from "@/ui/dsl/PhoenixButton";
import Image from "next/image";

export default function Home() {
    return (
            <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gradient-to-tr from-pink-500/10 via-indigo-500/10 to-blue-500/10 blur-3xl animate-pulse-slow" />

                <main className="relative z-10 text-center p-6 max-w-4xl animate-fade-in">
                    <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent drop-shadow-xl">
                        {/*Rise of the Phoenix*/}
                        ᚱᛁᛋᛖ ᛟᚠ ᛏᚺᛖ ᛈᚺᛖᛟᚾᛁᚲᛋ
                    </h1>
                    <p className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
                        A platform where ideas burn, die, and are reborn — like you’ve never seen before.
                    </p>

                    <Image
                        src="/assets/phoenix2.png"
                        alt="Phoenix Illustration"
                        width={500}
                        height={500}
                        priority
                        className="mx-auto mt-12 drop-shadow-2xl animate-fade-in-up"
                    />

                    <div className="mt-10 flex flex-wrap justify-center gap-6">
                        <a href="/subjects" className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300">
                            Explore Subjects
                        </a>
                        <a href="/games" className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl shadow-lg transition-all duration-300">
                            Play a Game
                        </a>
                    </div>
                </main>

                <div className="absolute bottom-4 text-xs text-gray-400 opacity-70">
                    Crafted with 🔥 by a Phoenix dreamer.
                </div>
            </div>
    );
}
// {/*<div className="relative min-h-screen flex items-center justify-center overflow-hidden">*/}
// {/*    <div*/}
// {/*        className="absolute inset-0 z-0 bg-gradient-to-tr from-pink-500/10 via-indigo-500/10 to-blue-500/10 blur-3xl animate-pulse-slow"/>*/}
//
// {/*    <main className="relative z-10 text-center p-6 max-w-4xl animate-fade-in">*/}
// {/*        <Image src='/assets/phoenix2.png' alt={""} width={500} height={500} />*/}
// {/*        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent drop-shadow-xl">*/}
// {/*            Rise of the Phoenix*/}
// {/*        </h1>*/}
// {/*        <p className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">*/}
// {/*            A platform where ideas burn, die, and are reborn — like you’ve never seen before.*/}
// {/*        </p>*/}
// {/*        <div className="mt-10 flex flex-wrap justify-center gap-6">*/}
// {/*            <a href="/subjects"*/}
// {/*               className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300">*/}
// {/*                Explore Subjects*/}
// {/*            </a>*/}
// {/*            <a href="/games"*/}
// {/*               className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl shadow-lg transition-all duration-300">*/}
// {/*                Play a Game*/}
// {/*            </a>*/}
// {/*        </div>*/}
// {/*    </main>*/}
//
// {/*    <div className="absolute bottom-4 text-xs text-gray-400 opacity-70">*/}
// {/*        Crafted with 🔥 by a Phoenix dreamer.*/}
// {/*    </div>*/}
// {/*</div>*/}