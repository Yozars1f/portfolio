import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Volunteering from "@/components/Volunteering";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Highlights />
      <Education />
      <Skills />
      <Volunteering />
    </main>
  );
}
