import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LoadingProvider } from "@/context/LoadingContext";
import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: {
    default: "Youssef Ahmed | Medical Doctor & Clinical AI Researcher",
    template: "%s | Youssef Ahmed"
  },
  description: "Founder of MedResearchCollab, MD (Class of 2025). Specializing in Clinical AI Architecture, Cardiovascular Research, and Scaling Global Research Workflows.",
  keywords: ["Medical Doctor", "Clinical AI", "Research Platform", "Cardiovascular Medicine", "Digital Health", "Syria Research", "USMLE", "MedResearchCollab"],
  authors: [{ name: "Youssef Ahmed" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-domain.com",
    title: "Youssef Ahmed | Medical Doctor & Clinical AI Researcher",
    description: "Bridging the gap between clinical medicine and AI-driven research. Founder of MedResearchCollab.",
    siteName: "Youssef Ahmed Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef Ahmed | Medical Doctor & Clinical AI Researcher",
    description: "Architecting the future of global clinical research through AI integration.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 antialiased transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <Preloader />
            <Navbar />
            <main className="min-h-screen pt-20">
              {children}
            </main>
            <Footer />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
