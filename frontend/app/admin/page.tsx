"use client";

export default function AdminDashboard() {
  const grievances = [
    { id: 1, name: "Saket", title: "Water issue", status: "Pending" },
    { id: 2, name: "Rahul", title: "Road damage", status: "Resolved" },
    { id: 3, name: "Amit", title: "Electricity cut", status: "Urgent" },
  ];

  const getStatusColor = (status: string) => {
    if (status === "Pending") return "bg-yellow-500/20 text-yellow-400";
    if (status === "Resolved") return "bg-green-500/20 text-green-400";
    if (status === "Urgent") return "bg-red-500/20 text-red-400";
  };

  return (
    <div>

      <h2 className="text-xl mb-6">Grievances</h2>

      <div className="overflow-x-auto bg-white/5 border border-white/10 rounded-xl">
        <table className="w-full text-left">

          <thead className="bg-white/10">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Title</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {grievances.map((g) => (
              <tr key={g.id} className="border-t border-white/10 hover:bg-white/5">
                <td className="p-4">{g.id}</td>
                <td className="p-4">{g.name}</td>
                <td className="p-4">{g.title}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(g.status)}`}>
                    {g.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}