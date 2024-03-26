import HomeHero from "@/components/home/hero";
import Sources from "@/components/home/sources";
import HomeCard from "@/components/home/cards";
import HomeContent from "@/components/home/content";

export default function Home () {
  return (
    <main>
      <HomeHero/>
      <Sources/>
      <hr className="relative m-14 border-green-50"></hr> 
      <HomeCard/>
      <hr className="relative m-14 border-green-50"></hr> 
      <HomeContent/>
    </main>
  );
}
