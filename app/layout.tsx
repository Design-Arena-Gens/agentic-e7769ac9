import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: "Mid-Century Motion: A Cinematic Journey",
  description:
    "Immersive 1960s-inspired cinematic storyboards spanning idyllic suburbs to vibrant cityscapes."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plexSans.className}>{children}</body>
    </html>
  );
}
