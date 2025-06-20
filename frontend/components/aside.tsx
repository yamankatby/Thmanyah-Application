"use client";

import localFont from "next/font/local";
import { PropsWithChildren } from "react";
import Logo from "./logo";

const america = localFont({
  src: "../public/fonts/GTAmerica-ExtendedBold.woff2",
  variable: "--font-america",
});

function Item({ children, icon }: PropsWithChildren<{ icon: string }>) {
  return (
    <li className="nav-item purple relative flex cursor-pointer items-center gap-3 px-[22px] py-[9px] text-sm after:absolute after:inset-0 after:blur-[10px]">
      <img src={`/icons/${icon}.svg`} className="w-4" />
      {children}
    </li>
  );
}

export default function Aside() {
  return (
    <aside className="sticky top-0 hidden h-screen w-[225px] flex-col border-r border-inherit bg-[#141523] md:flex">
      <span className="mt-[18px] mb-[28px] ml-[18px] inline-block self-start">
        <Logo />
      </span>
      <ul className="flex flex-col tracking-[-.5px] text-white">
        <Item icon="home">Home</Item>
        <Item icon="discover">Discover</Item>
        <span
          className={`uppercase ${america.className} mt-[17px] mb-[3px] ml-[18px] inline-block text-xs text-[#A3A3A8]`}
        >
          Your Stuff
        </span>
        <Item icon="my-queue">My Queue</Item>
        <Item icon="my-podcasts">My Podcasts</Item>
        <Item icon="recents">Recents</Item>
      </ul>
      <p className="mt-auto mb-[28px] px-[18px] text-xs text-[#777]">
        Built as an assignment for my application to Thmanyah.
      </p>
    </aside>
  );
}
