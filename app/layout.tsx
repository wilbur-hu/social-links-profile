import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const inter = localFont({
  src: "./fonts/Inter-VariableFont_slnt,wght.ttf",
  display: "swap",
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Social Links Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="font-inter h-full">{children}</body>
    </html>
  );
}
