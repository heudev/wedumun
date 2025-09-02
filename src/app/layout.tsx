import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wedumun.com'),
  title: "WEDUMUN - World - Educational Simulation of Diplomacy and Leadership Model United Nations",
  description: "Join WEDUMUN for world-class Model United Nations experiences. Develop diplomatic skills and engage with global issues through our international conferences.",
  keywords: "Model UN, MUN, diplomacy, international relations, youth conference, WEDUMUN",
  authors: [{ name: "WEDUMUN Team" }],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "WEDUMUN - World - Educational Simulation of Diplomacy and Leadership Model United Nations",
    description: "Join WEDUMUN for world-class Model United Nations experiences",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/icon.png",
        width: 300,
        height: 300,
        alt: "WEDUMUN Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
