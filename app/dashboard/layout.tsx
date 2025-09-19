import { DashboardSidebar } from "@/components/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex overflow-hidden">
      <DashboardSidebar />
      <main className="flex-1 lg:ml-64 pt-16 lg:pt-0 overflow-auto">
        {children}
      </main>
    </div>
  );
}