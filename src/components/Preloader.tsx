"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '@/context/LoadingContext';
import { User, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function Preloader() {
    const { isLoading, setIsLoading } = useLoading();

    useEffect(() => {
        // Show preloader for 3 seconds then hide
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [setIsLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }} // Delay background fade slightly
                    className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-white dark:bg-slate-950"
                >
                    {/* Profile Image - This will flip to navbar */}
                    {/* Note: In Framer Motion, layoutId handles the magic. 
                 When this unmounts, the Navbar component with same layoutId mounts/animates.
                 IMPORTANT: Both must share the layoutId "profile-pic".
              */}
                    {/* Image removed at user request */}

                    {/* Text and Pulse Container */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6 }}
                        className="text-center relative px-6"
                    >
                        {/* Innovative Medical Pulse Animation */}
                        <div className="relative h-24 w-64 mx-auto mb-12 flex items-center justify-center overflow-hidden">
                            {/* Static Background Grid (Subtle) */}
                            <div className="absolute inset-0 grid grid-cols-12 gap-1 opacity-10">
                                {[...Array(24)].map((_, i) => (
                                    <div key={i} className="border-r border-blue-400 h-full" />
                                ))}
                            </div>

                            {/* Moving Pulse Line */}
                            <svg viewBox="0 0 200 60" className="w-full h-full text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                                <motion.path
                                    d="M 0 30 L 70 30 L 80 10 L 90 50 L 100 30 L 120 30 L 125 25 L 130 35 L 135 30 L 200 30"
                                    fill="transparent"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeDasharray="400"
                                    initial={{ strokeDashoffset: 400 }}
                                    animate={{ strokeDashoffset: [400, 0, -400] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                />
                                {/* Scanning Glow Effect */}
                                <motion.div
                                    animate={{ left: ['0%', '100%'] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-0 bottom-0 w-1/4 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent z-10"
                                />
                            </svg>
                        </div>

                        {/* Name Reveal with Academic Flair */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            <motion.h2
                                className="text-4xl font-serif font-bold text-slate-800 dark:text-slate-200 tracking-[0.15em] uppercase mb-4"
                            >
                                <span className="inline-block relative">
                                    Youssef Ahmad, MD
                                    <motion.span
                                        initial={{ width: '100%' }}
                                        animate={{ width: '0%' }}
                                        transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                                        className="absolute inset-0 bg-white dark:bg-slate-950 border-l-2 border-blue-500"
                                    />
                                </span>
                            </motion.h2>

                            <p className="text-blue-600 dark:text-blue-400 font-medium tracking-[0.4em] text-[10px] md:text-xs">
                                THE INTERSECTION OF MEDICINE & AI
                            </p>
                        </motion.div>

                        <div className="mt-16 flex justify-center space-x-2">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                    className="w-1.5 h-1.5 rounded-full bg-blue-500"
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
