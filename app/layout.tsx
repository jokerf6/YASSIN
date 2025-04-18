// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YASSIN | Egyptian Fine Artist",
  description:
    "Portfolio of Yassin, an Egyptian fine artist known for hyper-realistic portraiture with cultural and political themes.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
