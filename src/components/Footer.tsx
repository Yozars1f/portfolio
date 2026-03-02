"use client";

import React from 'react';
import { personalInfo } from '@/lib/data';
import { Github, Linkedin, Mail, FileText, Check, Copy } from 'lucide-react'; // Assuming mapping icons to socials

export default function Footer() {
    const [copied, setCopied] = React.useState(false);

    const handleCopyEmail = (e: React.MouseEvent) => {
        // We still let the mailto happen, but we copy the text too
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="w-full py-8 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-900">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center bg-transparent">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                        {personalInfo.headline}
                    </p>
                </div>

                <div className="flex items-center space-x-6">
                    {personalInfo.socials.linkedin && (
                        <a
                            href={personalInfo.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                    )}
                    <div className="relative group">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            onClick={handleCopyEmail}
                            className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
                            aria-label="Email"
                        >
                            {copied ? <Check size={20} className="text-emerald-500" /> : <Mail size={20} />}
                        </a>
                        {copied && (
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-[10px] rounded shadow-xl whitespace-nowrap animate-bounce">
                                Email Copied!
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}
