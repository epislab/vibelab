import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ShowNavbarWrapper from "@/common/menu/component/ShowNavbarWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vibe Coding Curriculum",
  description: "Vibe Coding 커리큘럼 PWA",
  manifest: "/manifest.json",
  icons: [
    { rel: "icon", url: "/icons/android-chrome-192x192.png", sizes: "192x192" },
    { rel: "apple-touch-icon", url: "/icons/android-chrome-512x512.png", sizes: "512x512" }
  ]
};

export const viewport = {
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add any additional meta tags or links here */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ShowNavbarWrapper />
        {children}
        
      </body>
    </html>
  );
}
