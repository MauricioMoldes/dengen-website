import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component

function LoremIpsumPage() {
  return (
    <Layout>
       <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Lorem Ipsum Example Page</h1>

      {/* Introduction Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="text-xl font-semibold text-[#003865] mb-4">Introduction</p>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor urna in ante volutpat, nec viverra eros
          maximus. Nulla facilisi. Quisque dapibus lectus ut purus tincidunt, eu malesuada nulla sodales. Morbi id magna
          vel velit pretium suscipit. Curabitur pretium leo sit amet vestibulum pretium.
        </p>
        <p className="text-gray-600 mb-6">
          For more information, visit our <a href="/about" className="text-[#003865] hover:underline">About Page</a>.
        </p>
      </div>

      {/* Table Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="text-xl font-semibold text-[#003865] mb-4">Sample Data Table</p>
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-black text-white">
            <tr>
              <th className="px-4 py-2 border text-left">ID</th>
              <th className="px-4 py-2 border text-left">Name</th>
              <th className="px-4 py-2 border text-left">Role</th>
              <th className="px-4 py-2 border text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">John Doe</td>
              <td className="px-4 py-2 border">Software Engineer</td>
              <td className="px-4 py-2 border">johndoe@example.com</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2 border">2</td>
              <td className="px-4 py-2 border">Jane Smith</td>
              <td className="px-4 py-2 border">Project Manager</td>
              <td className="px-4 py-2 border">janesmith@example.com</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2 border">3</td>
              <td className="px-4 py-2 border">Emily White</td>
              <td className="px-4 py-2 border">Designer</td>
              <td className="px-4 py-2 border">emilywhite@example.com</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2 border">4</td>
              <td className="px-4 py-2 border">Michael Brown</td>
              <td className="px-4 py-2 border">Data Scientist</td>
              <td className="px-4 py-2 border">michaelbrown@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    
      {/* Bullet Points Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="text-xl font-semibold text-[#003865] mb-4">Key Features</p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Innovative technology for seamless integration.</li>
          <li>User-friendly interface with a simple design.</li>
          <li>Fast and secure data processing.</li>
          <li>Collaboration with leading institutions.</li>
        </ul>
      </div>

      {/* Buttons Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 text-center">
        <p className="text-xl font-semibold text-[#003865] mb-4">Get Started</p>
        <p className="text-gray-600 mb-6">
          Ready to learn more? Start exploring the possibilities of our platform today!
        </p>
        <a
          href="/start"
          className="bg-[#003865] text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </a>
      </div>      
    </div>

    </Layout>
  );
}
export default LoremIpsumPage;



