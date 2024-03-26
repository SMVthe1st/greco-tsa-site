import Credits from "@/components/about/credits";
import AboutContent from "@/components/about/content";
import AboutHero from "@/components/about/hero";

export default function About () {
    return (
        <main>
          <AboutHero/>
          <div className="overflow-hidden">
            <AboutContent/>
            <Credits/>
          </div>
        </main>
    );
  }
  