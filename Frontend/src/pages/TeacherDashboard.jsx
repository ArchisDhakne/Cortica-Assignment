import React from "react";
import { useState,useEffect } from "react";
const TeacherDashboard = () => {
  const [students, setStudents] = useState([]);
  const className = JSON.parse(localStorage.getItem('user'))?.class;

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/students/${className}`
        );
        setStudents(response.data.students);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    if (className) {
      fetchStudents();
    }
  }, [className]);
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-500 text-white p-4">
        <h1 className="text-2xl">Teacher Dashboard</h1>
      </header>
      <main className="p-4">
        
        {/* View Attendance */}
        <section className="mb-6 bg-white shadow rounded p-4">
          <h2 className="text-xl font-bold mb-4">View Attendance</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Student Name</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Selfie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2">2024-11-27</td>
                <td className="border px-4 py-2">10:00 AM</td>
                <td className="border px-4 py-2">
                  <img src="https://via.placeholder.com/50" alt="Selfie" />
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Student List */}
        <section className="mb-6 bg-white shadow rounded p-4">
          <h2 className="text-xl font-bold mb-4">Student List</h2>
          <ul>
            {students.map((student) => (
            <li className="border-b py-2" key={student._id}>{student.name}</li>
          ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default TeacherDashboard;
