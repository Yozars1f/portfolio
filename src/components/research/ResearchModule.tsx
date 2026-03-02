"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Activity, Cpu, Database, Network } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResearchModuleProps {
    module: {
        id: string;
        title: string;
        subtitle?: string;
        description: string;
        features?: any[]; // Using any[] to support flexible changes, properly typed as string[] | { title: string; description: string }[] in a real scenario
        stats?: { label: string; value: string }[];
        badge?: string;
        type: string;
    };
    index: number;
}

export default function ResearchModule({ module, index }: ResearchModuleProps) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
        >
            {/* 
        We can wrap distinct styles here. 
        For consistency, we might want a container, but the "look" changes.
      */}

            {module.type === 'community' && <CommunityCard module={module} />}
            {module.type === 'study' && <StudyDashboard module={module} />}
            {module.type === 'platform' && <PlatformCard module={module} />}

        </motion.div>
    );
}

// --- Module 1: Community (Blue/Gradient) ---
function CommunityCard({ module }: { module: any }) {
    return (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 border border-blue-100 dark:border-slate-700 p-8 md:p-12">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-100 dark:bg-blue-900/30 rounded-full">
                        Community Ecosystem
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        {module.title}
                    </h2>
                    <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-6">
                        {module.subtitle}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                        {module.description}
                    </p>
                    {module.link && (
                        <a
                            href={module.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                        >
                            Visit Official Website
                        </a>
                    )}
                </div>

                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 dark:border-slate-700 shadow-sm">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Key Pillars</h4>
                    <ul className="space-y-4">
                        {module.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    <CheckCircle2 size={14} />
                                </div>
                                <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

// --- Module 2: Study (Dashboard Style) ---
function StudyDashboard({ module }: { module: any }) {
    return (
        <div className="relative rounded-3xl bg-slate-900 text-white overflow-hidden p-8 md:p-12 shadow-2xl">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]" />

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="flex h-3 w-3 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Live Study</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">{module.title}</h2>
                        <p className="text-slate-400 text-lg">{module.subtitle}</p>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur px-4 py-2 rounded-lg border border-slate-700 inline-block">
                        <span className="text-xs text-slate-400 font-mono">{module.badge}</span>
                    </div>
                </div>

                <p className="text-slate-300 leading-relaxed max-w-3xl mb-12 border-l-4 border-emerald-500 pl-6">
                    {module.description}
                </p>

                {/* Dashboard Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {module.stats.map((stat: any, idx: number) => (
                        <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-800 transition-colors group">
                            <p className="text-slate-400 text-sm font-medium mb-1 group-hover:text-emerald-400 transition-colors">{stat.label}</p>
                            <p className="text-4xl font-mono font-bold text-white">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// --- Module 3: Platform (Tech Card) ---
function PlatformCard({ module }: { module: any }) {
    return (
        <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-8 md:p-12 shadow-xl">
            <div className="absolute top-0 right-0 bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl">
                {module.badge}
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start"> {/* items-start for better alignment with long list */}

                {/* Left Column: Text Content (Swapped from order-2) */}
                <div className="order-1">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                        <Cpu className="text-white" size={24} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        {module.title}
                    </h2>
                    <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-6">
                        {module.subtitle}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                        {module.description}
                    </p>
                </div>

                {/* Right Column: Features List (Swapped from order-1) */}
                <div className="order-2">
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                        <div className="space-y-8">
                            {module.features.map((feature: any, idx: number) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white dark:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:border-blue-200 dark:group-hover:border-blue-500/30 transition-colors mt-1">
                                        {idx === 0 ? <Database size={20} /> : idx === 1 ? <Activity size={20} /> : <Network size={20} />}
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-900 dark:text-white text-lg mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {feature.title}
                                        </h5>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
