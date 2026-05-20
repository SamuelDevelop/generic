import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { AuthProvider } from "@/hooks/authContext";
import { Toaster } from "sonner";
import { ProfileProvider } from "@/hooks/profileContext";

export const metadata: Metadata = {
  title: "Generic",
  description: "A generic social media",
  icons: {
    icon: "/logo.png",
  },
};

const fontGoogleSans = localFont({
  src: [
    {
      path: "../assets/fonts/GoogleSans.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  
  variable: "--fontPrimary" 
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
        ${fontGoogleSans.variable} 
        ${fontPoltawski.variable}
        ${fontDomine.variable}
      `}
    >
      <body>
        <AuthProvider>
          <ProfileProvider>
            {children}

            <Toaster 
              position="top-center"
              richColors={false}
              closeButton
              expand
              duration={2500}
              theme="dark"
              toastOptions={{
                className: "toast",
              }}
            />
          </ProfileProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
