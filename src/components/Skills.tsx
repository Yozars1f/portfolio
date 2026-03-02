"use client";

import React from 'react';
import { skillsData } from '@/lib/data';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Skills() {
    return (
        <section className="container mx-auto px-6 max-w-6xl py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-12"
            >
                Core Competencies & Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillsData.map((category, index) => (
                    <SkillCard key={index} category={category} index={index} />
                ))}
            </div>
        </section>
    );
}

function SkillCard({ category, index }: { category: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all hover:-translate-y-1"
        >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-700 min-h-[50px] flex items-center">
                {category.category}
            </h3>
            <ul className="space-y-3">
                {category.skills.map((skill: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 size={16} className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{skill}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}
