"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { cn } from '@/lib/utils';
import { User, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useLoading } from '@/context/LoadingContext';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Research', href: '/research' },
    { name: 'Publications', href: '/publications' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isLoading } = useLoading();
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Don't render Navbar content until loading is likely done or effectively handled.
    // However, for layoutId to work, the component must be mounted.
    // But we want the profile pic to be invisible initially in Navbar while Preloader is up?
    // Actually, Preloader is ON TOP (z-60). Navbar is z-50.
    // So Navbar can be fully rendered underneath.
    // But... duplicate layoutId can be an issue. 
    // Best practice: Only render the specific layoutId element in Navbar when !isLoading.

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: isLoading ? 3.2 : 0 }} // Delay entrance if loading
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-md py-3"
                    : "bg-transparent py-5"
            )}
        >
            {/* Scroll Progress Bar */}
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 origin-left"
            />

            {/* Left: Profile & Name */}
            <Link href="/" className="flex items-center gap-3 group">
                {!isLoading && (
                    <motion.div
                        layoutId="profile-pic"
                        className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 overflow-hidden group-hover:ring-2 ring-blue-500 transition-all relative"
                        transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }}
                    >
                        {/* Profile Picture */}
                        <Image
                            src="/profile.jpg"
                            alt="Profile"
                            fill
                            className="object-cover"
                        />

                        {/* Tooltip */}
                        <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            Welcome! I'm Youssef Ahmad.
                        </div>
                    </motion.div>
                )}
                {/* Fallback space keeper if needed, or just let it animate in. 
                    If !isLoading, it renders. Before that, space is empty?
                    Actually, if space is empty, the name might jump.
                    Keep structure stable.
                 */}
                {isLoading && <div className="w-10 h-10" />}

                <span className={cn(
                    "text-lg font-serif font-bold transition-colors",
                    isScrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"
                )}>
                    Youssef Ahmad
                </span>
            </Link>

            {/* Center: Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 dark:border-slate-700/50 shadow-sm">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium px-4 py-2 rounded-full transition-all",
                                isActive
                                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold"
                                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50"
                            )}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </div>

            {/* Right: Contact & Theme */}
            <div className="hidden md:flex items-center gap-4">
                <ThemeToggle />
                <Link
                    href="/contact"
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95"
                >
                    Contact
                </Link>
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="md:hidden flex items-center gap-4">
                <ThemeToggle />
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[100] bg-white dark:bg-slate-950 flex flex-col p-8 pt-24 md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={cn(
                                            "text-2xl font-serif font-bold p-4 rounded-xl transition-all",
                                            isActive
                                                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                                                : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-xl font-bold rounded-xl shadow-lg"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
