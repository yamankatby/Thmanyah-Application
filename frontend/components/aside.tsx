"use client";

import { motion } from "motion/react";
import localFont from "next/font/local";
import { PropsWithChildren } from "react";

const america = localFont({
  src: "../public/fonts/GTAmerica-ExtendedBold.woff2",
  variable: "--font-america",
});

function Item({ children, icon }: PropsWithChildren<{ icon: string }>) {
  return (
    <li
      className="px-[22px] py-[9px] text-sm flex items-center gap-3 hover:text-red-500"
      style={
        {
          // background:
          //   "radial-gradient(50% 25% at 0% 50%,#3ADEE633 0%,rgba(19,241,255,0)100%)!important",
        }
      }
    >
      <img src={`/icons/${icon}.svg`} className="w-[16px]" />
      {children}
    </li>
  );
}

export default function Aside() {
  return (
    <aside className="w-[225px] border-r border-inherit hidden md:block bg-[#141523]">
      <motion.img
        src="/logo.svg"
        whileTap={{ scale: 0.95 }}
        className="mt-[18px] ml-[18px] mb-[28px] inline-block cursor-pointer"
      />
      <ul className="text-white tracking-[-.5px]">
        <Item icon="home">Home</Item>
        <Item icon="discover">Discover</Item>
        <span
          className={`uppercase ${america.className} text-xs ml-[18px] mt-[17px] mb-[3px] inline-block text-[#A3A3A8]`}
        >
          Your Stuff
        </span>
        <Item icon="my-queue">My Queue</Item>
        <Item icon="my-podcasts">My Podcasts</Item>
        <Item icon="recents">Recents</Item>
      </ul>
    </aside>
  );
}
