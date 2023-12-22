import imgMancity from "@/assets/clubs/mancityB.png";
import imgSeriesA from "@/assets/clubs/seriesA.png";
import imgFcb from "@/assets/clubs/barca.png";
import imgSkybet from "@/assets/clubs/skybet.png";
import imgCrystal from "@/assets/clubs/crystal.png";
import imgCg from "@/assets/clubs/cg.png";
import imgMls from "@/assets/clubs/mls.png";
import imgBayer from "@/assets/clubs/bayer.png";
import { StaticImageData } from "next/image";

export type TTeam = {
  image: any;
  title: string;
  tagline: string;
};
export const teamsData: TTeam[] = [
  {
    image: imgMancity,
    title: "曼彻斯特城",
    tagline: "亚洲官方合作伙伴",
  },
  {
    image: imgSeriesA,
    title: "意甲联赛",
    tagline: "亚洲官方合作伙伴",
  },
  {
    image: imgFcb,
    title: "巴萨罗那",
    tagline: "亚洲官方合作伙伴",
  },
  {
    image: imgSkybet,
    title: "英甲联赛",
    tagline: "官方合作伙伴",
  },
  {
    image: imgCrystal,
    title: "水晶宫",
    tagline: "官方袖标合作伙伴",
  },
  {
    image: imgCg,
    title: "cg战队",
    tagline: "官方全球赞助商",
  },
  {
    image: imgMls,
    title: "美职联",
    tagline: "官方合作伙伴",
  },
  {
    image: imgBayer,
    title: "勒沃库森",
    tagline: "官方合作伙伴",
  },
];
