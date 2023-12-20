import Announce from "@/components/Home/Announce";
import BannerSlider from "@/components/Home/Banner/BannerSlider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <BannerSlider />
      <Announce />
      <h1>Home Page</h1>
    </main>
  );
}
