import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type React from "react";
import HydrationGuard from "@/components/HydrationGuard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Julio's Portfolio",
  description: "A showcase of my work and skills",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <HydrationGuard>{children}</HydrationGuard>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
