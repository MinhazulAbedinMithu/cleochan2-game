import Announce from "@/components/Home/Announce";
import BannerSlider from "@/components/Home/Banner/BannerSlider";
import FeaturedTeams from "@/components/Home/FeaturedTeams/FeaturedTeams";
import Footer from "@/components/Home/Footer/Footer";
import ExcellentService from "@/components/Home/Services/ExcellentService";
import MoreServices from "@/components/Home/Services/MoreServices";
import TopGames from "@/components/Home/TopGames/TopGames";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <BannerSlider />
      <Announce />
      <FeaturedTeams />
      <TopGames />
      <ExcellentService />
      <MoreServices />
      <Footer />
    </main>
  );
}
