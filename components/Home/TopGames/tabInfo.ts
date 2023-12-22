import imgGameCard1 from "@/assets/topGames/card_image_1.png";
import imgCardTitle1 from "@/assets/topGames/card_title_1.png";
import { StaticImageData } from "next/image";

export type TTabTitle = {
  id: number;
  title: string;
};
export type TGameCard = {
  title: StaticImageData;
  image: StaticImageData;
  description: string;
  tags: string[];
};
export const tabTitleData: TTabTitle[] = [
  {
    id: 1,
    title: "皇创反波胆",
  },
  {
    id: 2,
    title: "体育赛事",
  },
  {
    id: 3,
    title: "真人娱乐",
  },
  {
    id: 4,
    title: "棋牌游戏",
  },
  {
    id: 5,
    title: "电子竞技",
  },
  {
    id: 6,
    title: "彩票投注",
  },
  {
    id: 7,
    title: "电子游艺",
  },
  {
    id: 8,
    title: "娱乐游戏",
  },
];

export const gamesDemoData: TGameCard[] = [
  {
    title: imgCardTitle1,
    image: imgGameCard1,
    description:
      "业内最高赔率，覆盖世界各地赛事，让球、大小、半全场、波胆、单双、总入球、连串过关等多元竞猜。更有动画直播、视频直播，让您轻松体验聊球投注，乐在其中。",
    tags: ["皇创反波胆", "电子游艺"],
  },
  {
    title: imgCardTitle1,
    image: imgGameCard1,
    description:
      "业内最高赔率，覆盖世界各地赛事，让球、大小、半全场、波胆、单双、总入球、连串过关等多元竞猜。更有动画直播、视频直播，让您轻松体验聊球投注，乐在其中。",
    tags: ["真人娱乐", "电子游艺"],
  },
  {
    title: imgCardTitle1,
    image: imgGameCard1,
    description:
      "业内最高赔率，覆盖世界各地赛事，让球、大小、半全场、波胆、单双、总入球、连串过关等多元竞猜。更有动画直播、视频直播，让您轻松体验聊球投注，乐在其中。",
    tags: ["棋牌游戏"],
  },
];
