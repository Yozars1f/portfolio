"use client";

import React from 'react';
import { volunteering, hobbies } from '@/lib/data';
import { motion } from 'framer-motion';
import { Heart, Activity, Music } from 'lucide-react';

export default function Volunteering() {
    return (
        <section className="container mx-auto px-6 max-w-5xl py-20 pb-32">
            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-12 text-center">Beyond Medicine</h2>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Volunteering */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                            <Heart size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Volunteering</h3>
                    </div>
                    <div className="space-y-6">
                        {volunteering.map((item, idx) => (
                            <div key={idx} className="border-l-2 border-emerald-200 dark:border-emerald-800 pl-4">
                                <h4 className="font-bold text-slate-800 dark:text-slate-200">{item.role}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{item.org}</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.details}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Hobbies */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                            <Activity size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Interests & Hobbies</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {hobbies.map((hobby, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-600 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-200">
                                    {hobby.icon === 'Music' ? <Music size={18} /> : <Activity size={18} />}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 dark:text-slate-200">{hobby.name}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{hobby.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
