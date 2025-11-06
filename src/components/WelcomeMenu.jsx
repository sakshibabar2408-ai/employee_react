import React from 'react';

function WelcomeMenu() {
  return (
    <nav className="bg-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Brand (Left Side) */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-gray-800">Employee</a>
          </div>

          {/* Right Side - Login & Register */}
          <div className="flex items-center space-x-4">
            <a href="\login" className="text-gray-700 hover:text-gray-900 transition">Login</a>
            <a
              href="\register"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Register
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default WelcomeMenu;
