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
                        <motion.h2
                            className="text-2xl font-serif font-bold text-slate-800 dark:text-slate-200 mb-2"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Welcome
                        </motion.h2>
                        <div className="flex justify-center text-blue-600">
                            <Loader2 className="animate-spin" size={24} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
