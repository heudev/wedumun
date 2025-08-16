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
  title: "WEDUMUN - Western European Diplomatic United Nations",
  description: "Join WEDUMUN for world-class Model United Nations experiences. Develop diplomatic skills and engage with global issues through our international conferences.",
  keywords: "Model UN, MUN, diplomacy, international relations, youth conference, WEDUMUN",
  authors: [{ name: "WEDUMUN Team" }],
  openGraph: {
    title: "WEDUMUN - Western European Diplomatic United Nations",
    description: "Join WEDUMUN for world-class Model United Nations experiences",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
