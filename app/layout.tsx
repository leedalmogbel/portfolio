import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Waleed Almogbel — Full Stack Developer",
  description:
    "Full Stack Developer with 10+ years of experience building web applications for companies like Singapore Airlines, Hilton, Globe Telecom, and ABS-CBN.",
  openGraph: {
    title: "Waleed Almogbel — Full Stack Developer",
    description:
      "Full Stack Developer with 10+ years of experience building web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
