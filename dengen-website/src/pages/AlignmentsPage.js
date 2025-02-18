import React from "react";
import { useState } from 'react';
import Layout from "./LayoutPage"; // Import the Layout component
import { useParams } from 'react-router-dom';

function AlignmentsPage() {

  const { filename } = useParams();
  const images = [
    {
      src: `/alignments/${filename}/acgt-cycles.png`,
      //src: `https://http://10.62.55.108/ftp/alignments/${filename}/acgt-cycles.png`,
      legend: 'TS/TV by Sample',
      info: 'This image represents the distribution of read depths across the genome.',
    },
    {
      src:  `/alignments/${filename}/coverage.png`,
      legend: 'Fractions of SNVs with VAF < 25% by sample',
      info: 'This image represents the distribution of read depths across the genome.',
    },
    {
      src: `/alignments/${filename}/gc-content.png`,
      legend: 'Fractions of Indels with VAF < 25% by sample',
      info: 'This image represents the distribution of read depths across the genome.',
    },
    {
      src: `/alignments/${filename}/gc-depth.png`,
      legend: 'Hets vs non-ref Homs by sample',
      info: 'Hets vs non-ref Homs by sample.',
    },
    {
      src: `/alignments/${filename}/indel-cycles.png`,
      legend: 'Singletons by sample (hets and homs)',
      info: 'Singletons by sample (hets and homs)',
    },    
    {
      src: `/alignments/${filename}/indel-dist.png`,
      legend: 'Average depth by sample',
      info: 'Average depth by sample',
    }, 
    {
      src: `/alignments/${filename}/insert-size.png`,
      legend: 'Number of SNPs per Sample',
      info: 'This image represents the distribution of read depths across the genome.',
    },
    {
      src: `/alignments/${filename}/quals2.png`,
      legend: 'Number of Indels by sample',
      info: 'This image represents the distribution of read depths across the genome.',
    },
    {
      src: `/alignments/${filename}/quals3.png`,
      legend: 'Ts/Tv stratified by QUAL',
      info: 'This image represents the TS/TV by Quality.',
    },
    {
      src: `/alignments/${filename}/quals-hm.png`,
      legend: 'Indel distribution',
      info: 'This image represents the distribution of read depths across the genome.',
    },
    {
      src: `/alignments/${filename}/quals.png`,
      legend: 'Fraction of alternate indel allele',
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

            {/* Image */}
            <img
              src={image.src}
              alt={`Quality Control ${index + 1}`}
              className="w-full h-auto rounded"
              style={{ maxWidth: '1000px' }} // Image max width
            />
           

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



