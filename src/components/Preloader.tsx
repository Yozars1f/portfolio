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

                    {/* Text and Spinner Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="mt-8 text-center"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: [1, 1.1, 1], opacity: 1 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="flex justify-center text-blue-600 mb-6"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="64"
                                    height="64"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="relative z-10"
                                >
                                    <path d="M4.8 2.8C3.5 1.5 1.4 1.5 0.1 2.8c-1.3 1.3-1.3 3.4 0 4.7l.1.1 4.7 4.7c1.3 1.3 3.4 1.3 4.7 0 1.3-1.3 1.3-3.4 0-4.7l-4.8-4.8z" />
                                    <path d="M12 11V7a5 5 0 0 0-5-5" />
                                    <path d="M22 13a4 4 0 0 1-4-4V7" />
                                    <path d="M18 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                    <path d="M7 21h10" />
                                    <path d="M12 21v-4a5 5 0 0 0-5-5H5" />
                                    <path d="M12 17a4 4 0 0 1-4 4" />
                                    <path d="M12 17a4 4 0 0 0 4 4" />
                                </svg>
                            </div>
                        </motion.div>

                        <motion.h2
                            className="text-3xl font-serif font-bold text-slate-800 dark:text-slate-200 tracking-widest uppercase mb-2"
                        >
                            Youssef Ahmed, MD
                        </motion.h2>

                        <p className="text-blue-600 dark:text-blue-400 font-medium tracking-[0.3em] text-xs mb-8">
                            CLINICAL AI & RESEARCH
                        </p>

                        <div className="flex justify-center text-slate-400">
                            <Loader2 className="animate-spin" size={20} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
