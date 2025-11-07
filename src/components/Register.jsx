import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // ✅ Added Link and useNavigate

function Register() {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // ✅ For navigation after registration

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEmployee((old) => ({ ...old, [name]: value }));
  };

  const register = (e) => {
    e.preventDefault();

    axios
      .post('https://emloyee-management.onrender.com/register', {
        name: employee.name,
        email: employee.email,
        password: employee.password
      })
      .then((response) => {
        if (response.data) {
          alert('Registered successfully!');
          navigate('/EmployeeDashboard'); // ✅ Redirect to EmployeeDashboard
        } else {
          alert('User already exists!');
        }
        reset();
      })
      .catch(() => alert('Something went wrong'));
  };

  const reset = () => {
    setEmployee({
      name: '',
      email: '',
      password: ''
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={register}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={employee.name}
            onChange={inputHandler}
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={employee.email}
            onChange={inputHandler}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={employee.password}
            onChange={inputHandler}
            placeholder="Enter your password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Register
        </button>

        {/* Link to Login */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
