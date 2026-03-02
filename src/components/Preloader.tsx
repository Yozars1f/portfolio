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

                    {/* Stethoscope Echo Container */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6 }}
                        className="text-center relative px-6 flex flex-col items-center"
                    >
                        {/* Stethoscope Head SVG */}
                        <div className="relative mb-12 flex items-center justify-center">
                            {/* Expanding Echo Waves */}
                            {[0, 1].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0.8, opacity: 0.5 }}
                                    animate={{ scale: 2.5, opacity: 0 }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 1.5,
                                        ease: "easeOut"
                                    }}
                                    className="absolute inset-0 border border-blue-400/30 rounded-full w-20 h-20"
                                />
                            ))}

                            {/* Stethoscope Head Icon */}
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: [0.9, 1, 0.9] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 text-blue-600 dark:text-blue-500"
                            >
                                <svg
                                    width="80"
                                    height="80"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    {/* Diaphragm */}
                                    <circle cx="12" cy="12" r="8" />
                                    <circle cx="12" cy="12" r="3" />
                                    {/* Tubing (Minimalist) */}
                                    <path d="M12 4V2" />
                                    <path d="M10 2h4" />
                                    <path d="M12 20v2" />
                                    <path d="M10 22h4" />
                                </svg>
                            </motion.div>
                        </div>

                        {/* Name Reveal - Emerging from the Echo */}
                        <motion.div
                            initial={{ opacity: 0, letterSpacing: "0.5em" }}
                            animate={{ opacity: 1, letterSpacing: "0.15em" }}
                            transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
                        >
                            <h2 className="text-4xl font-serif font-bold text-slate-800 dark:text-slate-200 uppercase mb-2">
                                Youssef Ahmad, MD
                            </h2>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 1, duration: 1.2 }}
                                className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-4"
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ delay: 2 }}
                            className="mt-6 text-[10px] tracking-[0.3em] font-medium text-slate-500 dark:text-slate-400 uppercase"
                        >
                            Clinical Excellence & Research
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
