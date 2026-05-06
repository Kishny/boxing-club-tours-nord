import AdminNav from "@/components/admin/AdminNav";

export default function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      <AdminNav />

      {/* Content: offset for desktop sidebar, top bar on mobile */}
      <div className="w-full min-w-0 pt-14 lg:ml-52 lg:pt-0">
        {children}
      </div>
    </div>
  );
}
