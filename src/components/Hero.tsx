"use client";

import React from 'react';
import { personalInfo } from '@/lib/data';
import NeuralBackground from './ui/NeuralBackground';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen pt-20 pb-32 md:py-0 flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950">
            {/* Background */}
            <NeuralBackground />

            {/* Overlay to ensure text readability if needed (though particles are subtle) */}
            <div className="absolute inset-0 bg-white/30 dark:bg-slate-950/30 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="block text-sm md:text-base font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
                        Medical Doctor |  CLINICAL AI & RESEARCH ARCHITECTURE
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight"
                >
                    {personalInfo.headline}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="max-w-xl mx-auto mb-10 border-l-2 border-slate-300 dark:border-slate-700 pl-6 text-left sm:text-center sm:border-l-0 sm:pl-0"
                >
                    <p className="font-serif italic text-slate-600 dark:text-slate-400 text-lg leading-relaxed relative px-4">
                        <span className="hidden sm:inline-block absolute -left-0 top-0 text-amber-500 dark:text-amber-500 text-4xl font-serif">"</span>
                        {personalInfo.quote}
                        <span className="hidden sm:inline-block absolute -right-0 bottom-0 text-amber-500 dark:text-amber-500 text-4xl font-serif">"</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/research"
                        className="group flex items-center px-8 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all"
                    >
                        <span>View Research</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        href="/about"
                        className="group flex items-center px-8 py-3 bg-transparent border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-full font-medium hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                    >
                        <BookOpen className="mr-2 w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200" />
                        <span>My Story</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
