import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      <TopNav />
      <main className="ml-64 pt-24 px-12 pb-12 min-h-screen">
        {children}
      </main>
    </div>
  );
}
