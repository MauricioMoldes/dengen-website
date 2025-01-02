import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component

function LoremIpsumPage() {
  return (
    <Layout>
      <div className="p-6 space-y-6">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">DenGen Lorem Ipsum</h1>
        <p className="text-lg text-gray-600 mt-2">Genomic Research and Variants Analysis</p>
      </header>

      {/* Paragraphs */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700">Introduction</h2>
        <p className="mt-4 text-gray-700">
          DenGen ipsum dolor sit amet, consectetur adipiscing elit. Sequencing depths at least 30x provide robust insights into genetic variation. Aggregated variant frequencies refine analyses and enhance clinical diagnostics.
        </p>
        <p className="mt-4 text-gray-700">
          Integer mollis sapien nec illumina NovaSeq6000 interdum, nisi lacus aliquet sapien. Fusce structural variant detection efficitur magna a lacinia, leveraging tools like CNVnator and Manta.
        </p>
      </section>

      
      {/* Bullets */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
        <ul className="list-disc pl-6 text-md">
          <li>Whole-genome sequencing euismod ligula feugiat.</li>
          <li>Danish population database malesuada facilisi cursus.</li>
          <li>Clinical diagnostics potenti nullam placerat metus.</li>          
        </ul>

      {/* Table */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700">Genomic Data Table</h2>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead className="bg-black">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left text-white">Column 1</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-white">Column 2</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-white">Column 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Lorem ipsum dolor sit amet.</td>
                <td className="border border-gray-300 px-4 py-2">Consectetur adipiscing elit.</td>
                <td className="border border-gray-300 px-4 py-2">Integer mollis sapien nec.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Sequencing depths 30x provide.</td>
                <td className="border border-gray-300 px-4 py-2">Aggregated variant frequencies.</td>
                <td className="border border-gray-300 px-4 py-2">Structural variant detection.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">NovaSeq6000 platform analysis.</td>
                <td className="border border-gray-300 px-4 py-2">Consensus tools for CNV.</td>
                <td className="border border-gray-300 px-4 py-2">Genome browser applications.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Links */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700">Useful Links</h2>
        <ul className="mt-4 list-inside pl-4 space-y-2">
          <li>
            <a href="#" className="text-blue-500 hover:underline">Genomic Research Overview</a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">Whole Genome Sequencing</a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">Data Analysis Techniques</a>
          </li>
        </ul>
      </section>

      {/* Button */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700">Get Started</h2>
        <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600">
          Start Analysis
        </button>
      </section>
    
    </div>

    </Layout>
  );
}
export default LoremIpsumPage;



