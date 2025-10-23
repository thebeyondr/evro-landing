import type { Metadata } from "next";
import { Oswald, Lexend_Zetta } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const lexendZetta = Lexend_Zetta({
  variable: "--font-lexend-zetta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EVRO - EVolution in ROi",
  description: "The decentralized foundation for DeFi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/assets/img-hero.png" />
        <link rel="preload" as="image" href="/assets/Evro-Logo-wordmark.svg" />
      </head>
      <body
        className={`${oswald.className} ${lexendZetta.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
