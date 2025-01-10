// import ClientLayout from "@/components/ClientLayout";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-h-screen flex flex-col lg:flex-row">
      <div className="block lg:hidden">
        <Navbar />
      </div>
      <div className="hidden lg:block">
        <SideBar />
      </div>
      {children}
    </div>
  );
}
