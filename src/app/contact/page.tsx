import React from 'react';
import { Metadata } from 'next';
import ContactContent from '@/components/contact/ContactContent';

export const metadata: Metadata = {
    title: 'Connect',
    description: 'Looking for a research position or a clinical collaboration? Reach out to Youssef Ahmed regarding MedResearchCollab, clinical AI architecture, or cardiovascular research opportunities.',
};

export default function ContactPage() {
    return <ContactContent />;
}
