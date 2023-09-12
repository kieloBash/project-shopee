import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SidebarProvider } from "@/components/contexts/SidebarContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Liz Inventory - Shopee",
  description: "Shopee Invoice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SidebarProvider>
        <body
          className={`${poppins.className} flex min-h-screen bg-accent-100`}
        >
          {children}
        </body>
      </SidebarProvider>
    </html>
  );
}
