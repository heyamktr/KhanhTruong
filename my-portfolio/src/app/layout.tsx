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
    "Portfolio of Khanh Truong, a Computer Science and Mathematics student at DePauw University with experience in full-stack development, AI integration, computer vision, mobile applications, and software engineering research.",
  openGraph: {
    title: "Khanh Truong | Software Engineer",
    description:
      "Computer Science & Mathematics student at DePauw University building across full-stack web, AI, and mobile. GPA 3.82, graduating May 2028.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Khanh Truong | Software Engineer",
    description:
      "Computer Science & Mathematics student at DePauw University building across full-stack web, AI, and mobile.",
  },
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
