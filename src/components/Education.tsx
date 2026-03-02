"use client";

import React from 'react';
import { education } from '@/lib/data';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
    return (
        <section className="container mx-auto px-6 max-w-5xl py-20">
            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <GraduationCap size={24} />
                </div>
                Education & Credentials
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {education.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-center"
                    >
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{edu.degree}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{edu.school}</p>
                        <div className="flex justify-between items-end mt-4">
                            <span className="text-slate-500 dark:text-slate-400 text-sm">{edu.year}</span>
                            <span className="text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full text-slate-600 dark:text-slate-300">
                                {edu.details.includes("Passed") || edu.details.includes("Ranked") ? "Verified" : "Candidate"}
                            </span>
                        </div>
                        <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-4 whitespace-pre-line">
                            {edu.details}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
