"use client";

import React, { useState, useRef } from 'react';
import { personalInfo } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send, ArrowRight, ExternalLink, Copy, Check, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactContent() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        // Map form IDs to EmailJS template variables
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
            );
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            if (formRef.current) formRef.current.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-32">
            {/* Header */}
            <section className="container mx-auto px-6 mb-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6 font-display"
                >
                    Let's Connect
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-light"
                >
                    Open to collaborations, pioneering ideas, and new opportunities in MedTech.
                </motion.p>
            </section>

            <section className="container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-24">

                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 font-serif">Contact Information</h3>

                            <div className="space-y-8">
                                {/* Email */}
                                <div className="relative">
                                    <div className="flex items-start gap-4 group w-full">
                                        <a href={`mailto:${personalInfo.email}`} className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <Mail size={20} />
                                        </a>
                                        <div className="min-w-0 pr-12">
                                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Email</p>
                                            <a href={`mailto:${personalInfo.email}`} className="text-base md:text-lg font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all md:break-words">{personalInfo.email}</a>
                                        </div>
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(personalInfo.email);
                                                const btn = document.getElementById('copy-indicator');
                                                if (btn) {
                                                    btn.classList.remove('opacity-0');
                                                    setTimeout(() => btn.classList.add('opacity-0'), 2000);
                                                }
                                            }}
                                            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-blue-600 transition-colors"
                                            title="Copy Email"
                                        >
                                            <Copy size={20} />
                                        </button>
                                        <span id="copy-indicator" className="absolute right-0 -top-6 text-[10px] font-bold text-emerald-500 opacity-0 transition-opacity duration-300">
                                            Copied!
                                        </span>
                                    </div>
                                </div>

                                {/* LinkedIn */}
                                <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Linkedin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">LinkedIn</p>
                                        <div className="flex items-center gap-2">
                                            <p className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Connect on LinkedIn</p>
                                            <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 dark:text-slate-300" />
                                        </div>
                                    </div>
                                </a>

                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Location</p>
                                        <p className="text-lg font-semibold text-slate-900 dark:text-white">{personalInfo.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-10 shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700"
                        >
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 font-serif">Send a Message</h3>

                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500 transition-all"
                                        placeholder="Collaboration Opportunity"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500 transition-all resize-none"
                                        placeholder="How can we work together?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-slate-900 dark:bg-blue-600 text-white font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-blue-700 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span>Sending...</span>
                                            <Loader2 size={18} className="animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>

                                <AnimatePresence>
                                    {submitStatus === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="p-4 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-xl flex items-center gap-3 text-emerald-800 dark:text-emerald-200"
                                        >
                                            <Check size={20} />
                                            <p className="text-sm font-medium">Thank you! Your message has been sent successfully.</p>
                                        </motion.div>
                                    )}
                                    {submitStatus === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-800 dark:text-red-200"
                                        >
                                            <AlertCircle size={20} />
                                            <p className="text-sm font-medium">Failed to send message. Please try again or email me directly.</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </motion.div>

                </div>

                {/* Primary Goal & Open Invitation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 md:p-12 text-white shadow-2xl overflow-hidden relative"
                >
                    {/* Background Decor */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-6 text-blue-200 capitalize">My Primary Goal</h2>
                            <p className="text-lg text-slate-300 leading-relaxed mb-8">
                                I am actively seeking a <span className="text-white font-bold">Research Position (Fellowship or equivalent)</span> at a leading US academic institution. My core interest lies in <span className="text-white font-bold">Cardiovascular Medicine</span>, and I am particularly driven by opportunities that involve clinical research, data science, or the application of novel technologies to improve patient care.
                            </p>
                            <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
                                <span>Contact for Academic Inquiries</span>
                                <ArrowRight size={18} />
                            </a>
                        </div>

                        <div className="border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
                            <h2 className="text-3xl font-serif font-bold mb-6 text-emerald-200 capitalize">Open Invitation</h2>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Beyond this specific goal, I am a firm believer in the power of collaboration. If you have a  clinical challenge, a potential project, or simply wish to discuss the future of MedTech, please do not hesitate to reach out. I am always excited to connect with innovators and explore new possibilities.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </section>
        </div>
    );
}
