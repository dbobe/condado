import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <div className="block lg:hidden">
        <Navbar />
      </div>
      <div className="hidden lg:block">
        <SideBar />
      </div>
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
