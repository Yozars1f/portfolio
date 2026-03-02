"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { aboutData } from '@/lib/data';
import { GraduationCap, Code, Rocket } from 'lucide-react';

const icons = [GraduationCap, Code, Rocket];

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end 80%"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={containerRef} className="relative container mx-auto px-6 py-20 max-w-4xl">
            {/* Central Line Background (Gray) - Fixed to Left */}
            <div className="absolute left-4 md:left-8 top-10 bottom-10 w-1 bg-slate-200 dark:bg-slate-700" />

            {/* Animated Line (Blue) - Fixed to Left */}
            <motion.div
                style={{ height: lineHeight }}
                className="absolute left-4 md:left-8 top-10 w-1 bg-blue-600 origin-top max-h-[calc(100%-80px)]"
            />

            <div className="relative space-y-12">
                {aboutData.map((item, index) => (
                    <TimelineItem key={index} item={item} index={index} icon={icons[index] || GraduationCap} />
                ))}
            </div>
        </div>
    );
}

function TimelineItem({ item, index, icon: Icon }: { item: any, index: number, icon: any }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pl-10 md:pl-24 w-full"
        >
            {/* Icon Node - Absolute Positioned on the Left */}
            <div className="absolute -left-1 md:left-2 top-0 z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-md">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
            </div>

            {/* Content Side - Full Width */}
            <div className="w-full bg-white dark:bg-slate-800 p-5 md:p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-shadow">
                <span className="inline-block px-3 py-1 mb-4 text-[10px] md:text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                    {item.year}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                </p>
            </div>
        </motion.div>
    )
}
