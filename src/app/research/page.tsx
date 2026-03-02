import React from 'react';
import { researchModules } from '@/lib/data';
import ResearchModule from '@/components/research/ResearchModule';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Research & Innovation',
    description: 'Explore our AI-powered research platform and global studies. Redefining medical discovery through standardized workflows and clinician-led innovation.',
};

export default function ResearchPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-32">
            {/* Header Section */}
            <section className="container mx-auto px-6 mb-20 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6 font-display">
                    Research & Innovation
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-light">
                    Redefining medical discovery through community, data, and technology.
                </p>
            </section>

            {/* Modules Section */}
            <section className="container mx-auto px-6 max-w-6xl space-y-20">
                {researchModules.map((module, index) => (
                    <ResearchModule key={module.id} module={module} index={index} />
                ))}
            </section>
        </div>
    );
}
