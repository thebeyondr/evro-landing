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
  title: "EVRO",
  description: "An open-source protocol that maintains synthetic value units through fully decentralized smart-contract mechanics.",
  openGraph: {
    title: "EVRO",
    description: "An open-source protocol that maintains synthetic value units through fully decentralized smart-contract mechanics.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "EVRO",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EVRO",
    description: "An open-source protocol that maintains synthetic value units through fully decentralized smart-contract mechanics.",
    images: ["/assets/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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