import AuthProvider from "@/components/providers/AuthProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/global/Navbar";
import Sidebar from "@/components/global/Sidebar";
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
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <div className="w-full flex-1">
              <AuthProvider>{children}</AuthProvider>
            </div>
          </div>
        </body>
      </SidebarProvider>
    </html>
  );
}
