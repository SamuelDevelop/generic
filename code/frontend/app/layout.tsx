import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

export const metadata: Metadata = {
  title: "Generic",
  description: "A generic social media",
  icons: {
    icon: "../../../assets/images/brand/logo.png",
  },
};

const fontLexend = localFont({
  src: [
    {
      path: "../assets/fonts/Lexend.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  
  variable: "--fontLexend" 
});

const fontInter = localFont({
  src: [
    {
      path: "../assets/fonts/Inter.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  
  variable: "--fontInter" 
});

const fontPoltawski = localFont({
  src: [
    {
      path: "../assets/fonts/Poltawski.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  
  variable: "--fontPoltawski" 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fontInter.variable} ${fontPoltawski.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
