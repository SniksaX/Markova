import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Markova Digital Marketing",
  description: "Innovative digital marketing solutions for the modern business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-black text-gray-100 min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
