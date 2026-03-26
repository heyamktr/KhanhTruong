import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BackgroundDecor from "@/components/BackgroundDecor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khanh Truong | Portfolio",
  description: "Portfolio site for Khanh Truong built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative isolate flex min-h-full flex-col bg-background text-foreground">
        <BackgroundDecor />
        <div className="relative z-10 flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
