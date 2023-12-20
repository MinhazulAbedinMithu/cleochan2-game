import iconMessage from "@/assets/icons/message.png";
import iconGift from "@/assets/icons/gift.png";
import iconDeposit from "@/assets/icons/deposit-active.png";
import iconWithdraw from "@/assets/icons/withdraw-active.png";
import iconTransfer from "@/assets/icons/transfer-active.png";
import { TNavIconItem, TNavItem } from "./nav.interface";

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
    slug: "/",
    title: "体育",
  },
  {
    slug: "/",
    title: "真人",
  },
  {
    slug: "/",
    title: "棋牌",
  },
  {
    slug: "/",
    title: "电竞",
  },
  {
    slug: "/",
    title: "彩票",
  },
  {
    slug: "/",
    title: "电子",
  },
  {
    slug: "/",
    title: "娱乐",
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
