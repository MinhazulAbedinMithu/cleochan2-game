import Announce from "@/components/Home/Announce";
import BannerSlider from "@/components/Home/Banner/BannerSlider";
import FeaturedTeams from "@/components/Home/FeaturedTeams/FeaturedTeams";
import TopGames from "@/components/Home/TopGames/TopGames";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <BannerSlider />
      <Announce />
      <FeaturedTeams />
      <TopGames />
      <h1>Home Page</h1>
    </main>
  );
}
