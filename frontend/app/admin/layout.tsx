export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#0B0F19] text-white">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white/5 border-r border-white/10 p-6">
        <h2 className="text-xl font-bold mb-8 text-indigo-400">Admin Panel</h2>

        <nav className="space-y-4">
          <div className="hover:text-indigo-400 cursor-pointer">Dashboard</div>
          <div className="hover:text-indigo-400 cursor-pointer">Grievances</div>
          <div className="hover:text-indigo-400 cursor-pointer">Users</div>
        </nav>
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <div className="flex justify-between items-center px-8 py-4 border-b border-white/10 bg-white/5">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <div className="text-gray-400">Official</div>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-8">
          {children}
        </div>

      </div>
    </div>
  );
}