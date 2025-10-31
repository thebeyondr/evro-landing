import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${lexendZetta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}