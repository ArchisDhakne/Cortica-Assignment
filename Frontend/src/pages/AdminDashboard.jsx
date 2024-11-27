import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-red-500 text-white p-4">
        <h1 className="text-2xl">Admin Dashboard</h1>
      </header>
      <main className="p-4">
        {/* Manage Teachers */}
        <section className="mb-6 bg-white shadow rounded p-4">
          <h2 className="text-xl font-bold mb-4">Manage Teachers</h2>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Add Teacher
          </button>
        </section>

        {/* Manage Users */}
        <section className="mb-6 bg-white shadow rounded p-4">
          <h2 className="text-xl font-bold mb-4">Manage Users</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2">Student</td>
                <td className="border px-4 py-2">Active</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
