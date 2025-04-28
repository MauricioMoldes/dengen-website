import React from "react";
import { useState } from 'react';
import Layout from "./LayoutPage"; // Import the Layout component
import { useParams } from 'react-router-dom';

function AlignmentsPage() {

  const { filename } = useParams();
  const images = [
    {
      src: `/alignments/${filename}/${filename}-acgt-cycles.png`,
      //src: `https://http://10.62.55.108/ftp/alignments/${filename}/acgt-cycles.png`,
      legend: 'AGCT Cycles',
      info: 'This image represents acgt-cycles.',
    },
    {
      src:  `/alignments/${filename}/${filename}-coverage.png`,
      legend: 'Coverage',
      info: 'This image represents the Coverage.',
    },
    {
      src: `/alignments/${filename}/${filename}-gc-content.png`,
      legend: 'GC Content',
      info: 'This image represents GC Content.',
    },
    {
      src: `/alignments/${filename}/${filename}-gc-depth.png`,
      legend: 'GC Depth',
      info: 'This image represents GC Depth.',
    },
    {
      src: `/alignments/${filename}/${filename}-indel-cycles.png`,
      legend: 'Indel Cycles',
      info: 'This image represents Indel Cycles.',
    },    
    {
      src: `/alignments/${filename}/${filename}-indel-dist.png`,
      legend: 'Indel Dist',
      info: 'Average depth by sample',
    }, 
    {
      src: `/alignments/${filename}/${filename}-insert-size.png`,
      legend: 'Insert Size',
      info: 'This image represents the distribution of read depths across the genome.',
    },
    {
      src: `/alignments/${filename}/${filename}-quals.png`,
      legend: 'Qual 1',
      info: 'This image represents the distribution of read depths across the genome.',
    },
    {
      src: `/alignments/${filename}/${filename}-quals2.png`,
      legend: 'Qual 2',
      info: 'This image represents the distribution of read depths across the genome.',
    },
    {
      src: `/alignments/${filename}/${filename}-quals3.png`,
      legend: 'Qual 3',
      info: 'This image represents the TS/TV by Quality.',
    },
    {
      src: `/alignments/${filename}/${filename}-quals-hm.png`,
      legend: 'Qual HM ',
      info: 'This image represents the distribution of read depths across the genome.',
    }
      
  ];

const [showInfo, setShowInfo] = useState(null); // Track which image info is being shown

  const toggleInfo = (index) => {
    setShowInfo(showInfo === index ? null : index); // Toggle visibility of the info card
  };


  return (
    <Layout>
           
	  <div class="p-8 bg-gray-100">
        <header className="text-center mb-6">
        <h1 className="text-2xl font-bold">DenGen Quality Control Summary Statistics</h1>
        <p className="text-gray-600">Explore the quality control metrics generated for DenGen. Data was extracted with samtools, and rendered using the plot-bamstats according to the samtools reference manual.</p>
      </header>
    </div>

    <div class="p-8 bg-gray-100">
        <header className="text-center mb-6">
        <h2 className="text-xl font-bold">{filename}</h2>
      </header>
    </div>
    
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
  <main className="flex flex-col items-center space-y-6">
    {images.map((image, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md p-4 w-11/12 max-w-6xl relative">
        {/* Info Icon */}
        <button
          onClick={() => toggleInfo(index)}
          className="absolute top-4 right-4 text-xl text-blue-500 hover:text-blue-600"
        >
          ℹ️
        </button>

        <p className="mt-4 text-xl text-gray-700 text-center">{image.legend}</p>

        {/* Image Wrapper */}
        <div className="relative">
          <img
            src={image.src}
            alt={`Quality Control ${index + 1}`}
            className="w-full h-full object-cover rounded"
          />

      {/* Overlay to cover sample name with extended width */}
      <div className="absolute top-2 left-[-0%] right-[-0%] h-7 bg-white" />
        </div>

        {/* Info Card */}
        {showInfo === index && (
          <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-800">{image.info}</p>
          </div>
        )}
      </div>
    ))}
  </main>
</div>


    </Layout>
  );
}
export default AlignmentsPage;



