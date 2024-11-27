// src/pages/StudentDashboard.jsx
import React, { useState } from "react";
import Webcam from "react-webcam";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentDashboard = () => {
  const [attendanceHistory, setAttendanceHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showWebcam, setShowWebcam] = useState(false);

  const totalPages = 3; // Dummy total pages for pagination

  const handleMarkAttendance = () => {
    // Dummy function to handle attendance
    setShowWebcam(true);
    toast.success("Attendance marked successfully!");
  };

  const handleCapture = (image) => {
    setShowWebcam(false);
    setAttendanceHistory([
      ...attendanceHistory,
      { date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), selfie: image },
    ]);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Fetch new attendance data here based on the page
  };

  return (
    <div className="p-6">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>

      {/* Mark Attendance Section */}
      <div className="mb-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleMarkAttendance}
        >
          Mark Attendance
        </button>
        {showWebcam && (
          <div className="mt-4">
            <Webcam
              audio={false}
              screenshotFormat="image/jpeg"
              width={320}
              height={240}
              onUserMediaError={() => toast.error("Webcam access denied.")}
              onUserMedia={() => toast.success("Webcam ready.")}
              onScreenshot={(image) => handleCapture(image)}
            />
          </div>
        )}
      </div>

      {/* Attendance History Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Attendance History</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Time</th>
              <th className="border border-gray-300 p-2">Selfie</th>
            </tr>
          </thead>
          <tbody>
            {attendanceHistory.slice((currentPage - 1) * 5, currentPage * 5).map((record, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{record.date}</td>
                <td className="border border-gray-300 p-2">{record.time}</td>
                <td className="border border-gray-300 p-2">
                  <img src={record.selfie} alt="Selfie" className="w-16 h-16 object-cover" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="mt-4">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 border border-gray-300 ${
                currentPage === i + 1 ? "bg-gray-300" : ""
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Profile Management Section */}
      <div>
        <h2 className="text-xl font-bold mb-2">Profile Management</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => toast.info("Profile update feature coming soon!")}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default StudentDashboard;
