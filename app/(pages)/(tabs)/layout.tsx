import AuthProvider from "@/components/providers/AuthProvider";
import Navbar from "@/components/global/Navbar";
import Sidebar from "@/components/global/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthProvider>
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="w-full flex-1">{children}</div>
        </div>
      </AuthProvider>
    </>
  );
}
