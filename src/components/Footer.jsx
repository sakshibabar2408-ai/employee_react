import React from 'react'

function Footer() {
  return (
    <div>
    <footer className="bg-gray-800 text-white py-5 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">

          <div className="mb-4 md:mb-0">
            <span className="text-lg font-semibold">Employee</span>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
    <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy</a>
          </div>
        </div>
      </div>
      </footer>
    </div>
  )
}

export default Footer