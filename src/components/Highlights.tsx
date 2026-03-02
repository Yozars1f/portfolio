"use client";

import React from 'react';
import { heroCards } from '@/lib/data';
import { motion } from 'framer-motion';

export default function Highlights() {
    return (
        <section className="relative z-20 -mt-12 sm:-mt-16 md:-mt-20 pb-20 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {heroCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-blue-500 hover:shadow-2xl transition-shadow"
                        >
                            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-lg">
                                <card.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
