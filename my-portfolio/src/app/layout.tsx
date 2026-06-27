import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import ChatMascot from "@/components/ChatMascot";
import "./globals.css";

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Khanh Truong | Software Engineer",
  description:
    "Portfolio of Khanh Truong — software engineer building systems across web, AI, and mobile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kanit.variable}>
      <body>
        {children}
        <ChatMascot />
      </body>
    </html>
  );
}
