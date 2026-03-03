"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '@/context/LoadingContext';

export default function Preloader() {
    const { isLoading, setIsLoading } = useLoading();

    useEffect(() => {
        // Extended duration to 7 seconds for the full cinematic signature reveal
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 7000);

        return () => clearTimeout(timer);
    }, [setIsLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                    className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-white dark:bg-slate-950 overflow-hidden"
                >
                    {/* The Signature Container (Compact & Professional) */}
                    <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 px-8">

                        {/* Phase 1: Small Clinical Logo (Laser-Drawn Stethoscope) */}
                        <div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0">
                            {/* Pulse Aura */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: [0, 0.1, 0], scale: [0.8, 2, 0.8] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full"
                            />

                            <svg
                                width="80"
                                height="80"
                                viewBox="0 0 100 130"
                                fill="none"
                                className="relative z-10 text-slate-800 dark:text-blue-50/90"
                            >
                                {/* Combined Path for Laser Effect */}
                                <motion.path
                                    d="M30 15 C30 5 45 5 42 20 L42 42 Q50 52 58 42 L58 20 C55 5 70 5 70 15 M50 46 C50 70 85 75 85 95 C85 115 58 115 50 115"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 3, ease: "easeInOut" }}
                                />

                                {/* The LASER BEAM HEAD (The glowing tip drawing the shape) */}
                                <motion.path
                                    d="M30 15 C30 5 45 5 42 20 L42 42 Q50 52 58 42 L58 20 C55 5 70 5 70 15 M50 46 C50 70 85 75 85 95 C85 115 58 115 50 115"
                                    stroke="#3b82f6"
                                    strokeWidth="3.5"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 3, ease: "easeInOut" }}
                                    className="filter blur-[1px] drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]"
                                />

                                {/* Chestpiece (Diagnostic Center) */}
                                <motion.g
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", damping: 15, stiffness: 100, delay: 2.8 }}
                                >
                                    <circle cx="50" cy="115" r="14" className="fill-white dark:fill-slate-900 stroke-current" strokeWidth="2" />
                                    <circle cx="50" cy="115" r="5" className="fill-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.6)]" />
                                </motion.g>
                            </svg>
                        </div>

                        {/* Divider Line (Revealed after Stethoscope) */}
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "40px", opacity: 0.2 }}
                            transition={{ delay: 3.2, duration: 0.8 }}
                            className="hidden md:block w-[1px] bg-slate-400 dark:bg-slate-500"
                        />

                        {/* Phase 2: Professional Identity (The Name Slide-Out) */}
                        <div className="relative overflow-hidden py-2">
                            <motion.h2
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 3.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                className="text-3xl md:text-5xl font-serif font-black text-slate-900 dark:text-white uppercase tracking-[0.3em] whitespace-nowrap"
                            >
                                Youssef Ahmad, MD
                            </motion.h2>

                            {/* Underline Slide-Effect */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 4.5, duration: 1.2 }}
                                className="h-0.5 bg-gradient-to-r from-blue-600/80 to-transparent absolute bottom-0 left-0"
                            />
                        </div>
                    </div>

                    {/* Subtle Tech Aura (Bottom Corner) */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none opacity-20">
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
