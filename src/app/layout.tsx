import type { Metadata } from "next";
// import "@/styles/globals.css";
// import "@/styles/typography.css"
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uspace - Ecommerce store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${inter.className}`} suppressHydrationWarning 
      >

        {children}

      </body>
    </html>
  );
}
