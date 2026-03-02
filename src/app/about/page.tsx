import React from 'react';
import VideoIntro from '@/components/about/VideoIntro';
import Timeline from '@/components/about/Timeline';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My Journey',
    description: 'The story behind MedResearchCollab: From medical training in Syria to architecting global research infrastructures and AI-driven clinical tools.',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-32">
            {/* Header Section */}
            <section className="container mx-auto px-6 mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                    My Journey
                </h1>

            </section>

            {/* Video Section */}
            <section className="container mx-auto px-6">
                <VideoIntro />
            </section>

            {/* Timeline Section */}
            <section className="container mx-auto px-6">
                <Timeline />
            </section>
        </div>
    );
}
