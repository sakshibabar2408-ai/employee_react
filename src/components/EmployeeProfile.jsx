import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EmployeeProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [emp, setEmp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    // ✅ Use deployed backend API
    axios
      .get(`https://emloyee-crud-django-2.onrender.com/getById?id=${id}`)
      .then((res) => {
        console.log("Employee data:", res.data);
        setEmp(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching employee:", err);
        setError("Employee not found or server error");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!emp) return;

    axios
      .put("https://emloyee-crud-django-2.onrender.com/update", emp)
      .then(() => {
        alert("Employee updated successfully!");
        navigate("/dashboard");
      })
      .catch((err) => alert(err.message || "Update failed"));
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-blue-50">
        <p className="text-lg text-gray-600 animate-pulse">
          Loading Employee Profile...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center bg-red-50">
        <p className="text-red-600 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-indigo-100 to-white p-8">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-8 border border-blue-100">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          👨‍💼 Employee Profile
        </h2>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label className="block text-gray-600 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={emp.name || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-blue-500 rounded-md px-4 py-2 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={emp.email || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-blue-500 rounded-md px-4 py-2 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Password</label>
            <input
              type="text"
              name="password"
              value={emp.password || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-blue-500 rounded-md px-4 py-2 outline-none transition"
            />
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg transition"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeProfile;
