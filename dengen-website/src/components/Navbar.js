import { useState } from 'react';

const Navbar = () => {
  return (
    <div>
      {/* Rigshospitalet Logo Above Navbar - Left Aligned */}
      <div className="flex justify-start py-2 bg-white shadow-md">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Rigshospitalet_logo.svg/800px-Rigshospitalet_logo.svg.png?20171103201311" alt="Rigshospitalet" className="h-12 ml-4" />
      </div>

      {/* Navbar */}
      <nav className="bg-[#00488C] shadow-md p-4">
        <div className="flex justify-between items-center">
                   
          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-white hover:underline">Home</a>
            </li>
            
            {/* About Dropdown Menu with Hover Effect */}
            <li className="relative group">
              <button className="text-white hover:underline">
                About
              </button>

              {/* Dropdown Menu Items */}
              <div className="absolute left-0 hidden bg-[#00488C] shadow-lg mt-2 w-56 rounded-md group-hover:block">
                <ul className="text-white">
                  <li>
                    <a href="/about" className="block px-4 py-2 hover:bg-blue-600">DenGen Description</a>
                  </li>
                  <li>
                    <a href="#data-use-terms" className="block px-4 py-2 hover:bg-blue-600">Data Use Terms</a>
                  </li>
                  <li>
                    <a href="#data-access" className="block px-4 py-2 hover:bg-blue-600">Data Access</a>
                  </li>
                  <li>
                    <a href="#funders" className="block px-4 py-2 hover:bg-blue-600">Funders</a>
                  </li>
                  <li>
                    <a href="#publications" className="block px-4 py-2 hover:bg-blue-600">Publications</a>
                  </li>
                  <li>
                    <a href="#citation" className="block px-4 py-2 hover:bg-blue-600">Citation</a>
                  </li>
                  <li>
                    <a href="#contact" className="block px-4 py-2 hover:bg-blue-600">Contact</a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Links to other pages */}
            <li>
              <a href="genome-browser" target="_blank" className="text-white hover:underline">Genome Browser</a>
            </li>
            <li>
              <a href="http://localhost:8080/" target="_blank" className="text-white hover:underline">Beacon</a>
            </li>
            <li>
              <a href="data-qc-portal" target="_blank" className="text-white hover:underline">Data QC Portal</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

