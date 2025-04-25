import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Shlomo Dahan",
  description: "Shlomo Dahan's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen bg-gray-100"
        )}
      >
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-auto">
          <div className="flex-1 bg-white min-h-full lg:rounded-tl-xl border border-transparent lg:border-neutral-200">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
