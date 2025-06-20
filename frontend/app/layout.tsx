import type { Metadata } from "next";
import Aside from "../components/aside";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yaman's Assignment",
  description: "My assignment to join Thmanyah team 🎉",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <Aside />
        <div>{children}</div>
      </body>
    </html>
  );
}
