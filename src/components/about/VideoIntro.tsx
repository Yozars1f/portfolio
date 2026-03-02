"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VideoIntro() {
    return (
        <div className="w-full max-w-2xl mx-auto mb-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 shadow-2xl group"
            >
                <Image
                    src="/about-podium.jpg"
                    alt="Youssef Ahmed speaking at a podium"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                />
            </motion.div>
        </div>
    );
}
