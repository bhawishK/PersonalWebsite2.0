import { Pixelify_Sans, Jersey_15 } from "next/font/google";
import Navbar from "@/components/Navbar";
import NextSection from "@/components/NextSection";
import "./globals.css";

// Clearest pixel face for headings / display chrome.
const pixelify = Pixelify_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-press",
  display: "swap",
});

// Same face as the navbar — used for paragraphs, bullets, and labels.
const jersey = Jersey_15({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Bhawish Kumar",
  description:
    "Bhawish Kumar: Computer Science at HKBU. Research in vision-language perception and grounding, software projects, leadership, and notes for junior developers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`${pixelify.variable} ${jersey.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <NextSection />
      </body>
    </html>
  );
}
