import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EmployeeDashboard() {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://emloyee-crud-django-2.onrender.com/getall")
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  const deleteEmployee = (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;

    axios
      .delete(`https://emloyee-crud-django-2.onrender.com/delete?id=${id}`)
      .then(() => {
        setEmployee((prev) => prev.filter((emp) => emp.id !== id));
        alert("Employee deleted successfully!");
      })
      .catch((error) => alert(error.message || "Something went wrong"));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 p-8">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10 tracking-wide">
        👨‍💼 Employee Dashboard
      </h2>

      <div className="overflow-x-auto shadow-xl rounded-xl bg-white">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-blue-600 text-white uppercase text-sm tracking-wider">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Password</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {employee.length > 0 ? (
              employee.map((emp, index) => (
                <tr
                  key={emp.id}
                  className="border-b hover:bg-blue-50 transition duration-150 ease-in-out"
                >
                  <td className="px-6 py-3 font-semibold text-gray-600">
                    {index + 1}
                  </td>
                  <td className="px-6 py-3">{emp.id}</td>
                  <td className="px-6 py-3">{emp.name}</td>
                  <td className="px-6 py-3">{emp.email}</td>
                  <td className="px-6 py-3">{emp.password}</td>
                  <td className="px-6 py-3 text-center flex justify-center gap-3">
                    <button
                      onClick={() => navigate(`/employee/${emp.id}`)}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-lg transition transform hover:scale-105"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={() => deleteEmployee(emp.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg transition transform hover:scale-105"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center text-gray-500 py-6 italic"
                >
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
