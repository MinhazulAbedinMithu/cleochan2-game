import iconMessage from "@/assets/icons/message.png";
import iconGift from "@/assets/icons/gift.png";
import iconDeposit from "@/assets/icons/deposit-active.png";
import iconWithdraw from "@/assets/icons/withdraw-active.png";
import iconTransfer from "@/assets/icons/transfer-active.png";
import { TNavIconItem, TNavItem } from "./nav.interface";
import PhysicalThree from "./Dropdowns/PhysicalThree";
import RealFour from "./Dropdowns/RealFour";
import ChessCardFive from "./Dropdowns/ChessCardFive";
import GamingSix from "./Dropdowns/GamingSix";
import LotterySeven from "./Dropdowns/LotterySeven";
import ElectroEight from "./Dropdowns/ElectroEight";
import EntertainNine from "./Dropdowns/EntertainNine";

export const navListData: TNavItem[] = [
  {
    slug: "/",
    title: "首页",
  },
  {
    slug: "/",
    title: "皇创反波胆",
  },
  {
    slug: "/physical",
    title: "体育",
    dropdownEl: <PhysicalThree />,
  },
  {
    slug: "/casino",
    title: "真人",
    dropdownEl: <RealFour />,
  },
  {
    slug: "/chess",
    title: "棋牌",
    dropdownEl: <ChessCardFive />,
  },
  {
    slug: "/gaming",
    title: "电竞",
    dropdownEl: <GamingSix />,
  },
  {
    slug: "/lottery",
    title: "彩票",
    dropdownEl: <LotterySeven />,
  },
  {
    slug: "/electronic",
    title: "电子",
    dropdownEl: <ElectroEight />,
  },
  {
    slug: "/fishing-game",
    title: "娱乐",
    dropdownEl: <EntertainNine />,
  },
];

export const navIconListData: TNavIconItem[] = [
  {
    slug: "/",
    title: "客服",
    icon: iconMessage,
  },
  {
    slug: "/",
    title: "优惠",
    icon: iconGift,
  },
  {
    slug: "/",
    title: "充值",
    icon: iconDeposit,
  },
  {
    slug: "/",
    title: "提现",
    icon: iconWithdraw,
  },
  {
    slug: "/",
    title: "转账",
    icon: iconTransfer,
  },
];
