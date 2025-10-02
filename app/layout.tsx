import type React from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8b5cf6",
};

export const metadata = {
  title: "Alvin Jonathan | Portfolio",
  description: "Undergraduate Computer Science Student passionate in Web Development, Front-end Development, and IoT",
  metadataBase: new URL("https://alvin-jonathan.vercel.app"),
  keywords: "portfolio, computer science, software development, AI, machine learning, IoT, web development, alvin jonathan",
  authors: [{ name: "Alvin Jonathan" }],
  creator: "Alvin Jonathan",
  openGraph: {
    title: "Alvin Jonathan | Portfolio",
    description: "Undergraduate Computer Science Student passionate in Web Development, Front-end Development, and IoT",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvin Jonathan | Portfolio",
    description: "Undergraduate Computer Science Student passionate in Web Development, Front-end Development, and IoT",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="bg-background text-foreground overflow-x-hidden">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
