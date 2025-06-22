import Nav from "@/components/nav";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Aside from "../components/aside";
import "./globals.css";
import ShamelessAd from "./search/components/shameless-ad";

export const metadata: Metadata = {
  title: "Yaman's Podcast App",
  description: "Built as an assignment for my application to Thmanyah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen antialiased">
        <Aside />
        <div className="flex-1">
          <Nav />
          {children}
        </div>
        <ShamelessAd />
        <Analytics />
      </body>
    </html>
  );
}
