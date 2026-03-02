import React from 'react';
import { Metadata } from 'next';
import PublicationsContent from '@/components/publications/PublicationsContent';

export const metadata: Metadata = {
    title: 'Publications & Projects',
    description: 'A collection of international medical publications and research projects. Showcasing leadership in cardiac sarcomas, surgical oncology, and multi-center clinical trials.',
};

export default function PublicationsPage() {
    return <PublicationsContent />;
}
