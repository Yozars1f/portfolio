"use client";

import React from 'react';
import { publications } from '@/lib/data';
import { motion } from 'framer-motion';
import { FileText, Award, Globe, ExternalLink } from 'lucide-react';

export default function PublicationsContent() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-32">
            <section className="container mx-auto px-6 mb-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6 font-display"
                >
                    Publications & Collaborative Projects
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-light"
                >
                    {/* Placeholder for optional text if needed later */}
                </motion.p>
            </section>

            <section className="container mx-auto px-6 max-w-4xl space-y-8">
                {publications.map((pub, index) => (
                    <PublicationCard key={index} pub={pub} index={index} />
                ))}
            </section>
        </div>
    );
}

function PublicationCard({ pub, index }: { pub: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-shadow group"
        >
            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between mb-6">
                <div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                        {pub.title}
                    </h2>
                    <div className="flex flex-col gap-2 mt-2">
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium italic">
                            <FileText size={16} />
                            <span>{pub.journal}</span>
                        </div>
                        {pub.team && (
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                                <Globe size={16} />
                                <span>{pub.team}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex-shrink-0">
                    <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-100 dark:border-blue-800">
                        {pub.role}
                    </span>
                </div>
            </div>

            {/* Leadership Impact Section */}
            <div className="bg-slate-50 dark:bg-slate-700/30 border-l-4 border-blue-500 rounded-r-xl p-6 relative mb-6">
                <div className="absolute top-4 right-4 opacity-5 dark:opacity-10 text-slate-900 dark:text-white">
                    <Award size={48} />
                </div>
                <h3 className="text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    Leadership Impact
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {pub.impact}
                </p>
            </div>

            {/* Read Button */}
            <div className="flex justify-end">
                <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95"
                >
                    <span>Read Full Publication</span>
                    <ExternalLink size={16} />
                </a>
            </div>
        </motion.div>
    );
}
