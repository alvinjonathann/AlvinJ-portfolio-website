import type React from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Portfolio - Computer Science Student",
  description: "Undergraduate Computer Science Student specializing in Software Development, AI/ML, and IoT",
  keywords: "portfolio, computer science, software development, AI, machine learning, IoT, web development",
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    title: "Portfolio - Computer Science Student",
    description: "Undergraduate Computer Science Student specializing in Software Development, AI/ML, and IoT",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Computer Science Student",
    description: "Undergraduate Computer Science Student specializing in Software Development, AI/ML, and IoT",
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
      <body className="bg-background text-foreground overflow-x-hidden">{children}</body>
    </html>
  );
}
