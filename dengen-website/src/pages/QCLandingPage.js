import React, { useState } from "react";
import Layout from "./LayoutPage"; // Import the Layout component
import { Link } from 'react-router-dom';

const QCLandingPage = () => {

  const data = [
    { filename: "00crstivm-103918010210-Normal_Blood_noinfo-WGS_v1_IlluminaDNAPCRFree_RHGM01904-221005_A01961_BH35L5DSX5-EXT_LABKA_NGCWGS-NGCWGS05717", reads: "24M", alignments: "22M", variants: "1,746" },
    { filename: "Sample2.fastq", reads: "24M", alignments: "19M", variants: "2,037" }     
  ];

  const data_auto = Array.from({ length: 2211 }, (_, i) => ({
    filename: `Sample${i + 1}.fastq`,
    reads: `${Math.floor(Math.random() * 11) + 15}M`,
    alignments: `${Math.floor(Math.random() * 6) + 12}M`,
    variants: `${Math.floor(Math.random() * 2001) + 1000}`
  }));


  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">      

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-4xl text-green-600 mb-2">🧪</div>
            <h2 className="text-lg font-semibold">Number of samples</h2>
            <p className="text-gray-600">2.211</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-4xl text-green-600 mb-2">📦</div>
            <h2 className="text-lg font-semibold">Dataset Size</h2>
            <p className="text-gray-600">1TB</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-4xl text-green-600 mb-2">📂</div>
            <h2 className="text-lg font-semibold">Total Files</h2>
            <p className="text-gray-600">8,844 Files</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-4xl text-green-600 mb-2">📊</div>
            <h2 className="text-lg font-semibold">Statistics</h2>
            <p>
            <a href="/qc" class="text-blue-500 hover:underline">DenGen Statistics</a>
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-4 py-2 text-left border border-white">Filename</th>
                <th className="px-4 py-2 text-left border border-white">Reads</th>
                <th className="px-4 py-2 text-left border border-white">Alignments</th>
                <th className="px-4 py-2 text-left border border-white">Variants</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-gray-200 border-b hover:bg-gray-300"
                      : "bg-white border-b hover:bg-gray-100"
                  }
                >
                  <td className="px-4 py-2 border border-white">{row.filename}</td>
                  <td className="px-4 py-2 border border-white"><Link
            to={`/fastqc/${row.filename}`}
            className="ml-4 text-blue-500 hover:underline"
          >R1
          </Link>
          <Link
            to={`/fastqc/${row.filename}`}
            className="ml-4 text-blue-500 hover:underline"
          >R2
          </Link>
          </td>  
                  <td className="px-4 py-2 border border-white"><a href="/alignment" class="text-blue-500 hover:underline">Alignment Statistics</a></td>
                  <td className="px-4 py-2 border border-white"><Link
            to={`/variant/${row.filename}`}
            className="ml-4 text-blue-500 hover:underline"
          >SNPs
          </Link>
          <Link
            to={`/structural-variant/${row.filename}`}
            className="ml-4 text-blue-500 hover:underline"
          >SVs
          </Link>
          </td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
 </Layout>
  );
}

export default QCLandingPage;