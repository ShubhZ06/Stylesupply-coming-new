import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StyleSupply — Coming Soon",
  description:
    "Join the waitlist to be first in line. StyleSupply launches 14th April.",
  openGraph: {
    title: "StyleSupply — Coming Soon",
    description: "Join the waitlist to be first in line.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
