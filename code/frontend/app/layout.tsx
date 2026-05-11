import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { AuthProvider } from "@/components/authContext";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Generic",
  description: "A generic social media",
  icons: {
    icon: "/logo.png",
  },
};

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

const fontDomine = localFont({
  src: [
    {
      path: "../assets/fonts/Domine.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  
  variable: "--fontDomine" 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`
        ${fontInter.variable} 
        ${fontPoltawski.variable}
        ${fontDomine.variable}
      `}
    >
      <body>
        <AuthProvider>
          {children}

          <Toaster 
            position="top-center"
            richColors
            closeButton
            expand
            duration={2500}
            theme="dark"
          />
        </AuthProvider>
      </body>
    </html>
  );
}
