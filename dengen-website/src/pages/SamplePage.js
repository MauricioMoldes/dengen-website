import React from "react";
import { useState } from 'react';
import Layout from "./LayoutPage"; // Import the Layout component


function SamplePage() {

  const images = [
    {
      src: '/images/tstv_by_sample.0.png',
      legend: 'TS/TV by Sample',
      info: 'This image represents the distribution of read depths across the genome.',
    },
    {
      src: '/images/vaf25.snv.0.png',
      legend: 'Fractions of SNVs with VAF < 25% by sample',
      info: 'This image represents the distribution of read depths across the genome.',
    },
    {
      src: '/images/vaf25.indel.0.png',
      legend: 'Fractions of Indels with VAF < 25% by sample',
      info: 'This image represents the distribution of read depths across the genome.',
    },
    {
      src: '/images/hets_by_sample.0.png',
      legend: 'Hets vs non-ref Homs by sample',
      info: 'Hets vs non-ref Homs by sample.',
    },
    {
      src: '/images/singletons_by_sample.0.png',
      legend: 'Singletons by sample (hets and homs)',
      info: 'Singletons by sample (hets and homs)',
    },    
    {
      src: '/images/dp_by_sample.0.png',
      legend: 'Average depth by sample',
      info: 'Average depth by sample',
    },   
    
    {
      src: '/images/snps_by_sample.0.png',
      legend: 'Number of SNPs per Sample',
      info: 'This image represents the distribution of read depths across the genome.',
    },
    {
      src: '/images/indels_by_sample.0.png',
      legend: 'Number of Indels by sample',
      info: 'This image represents the distribution of read depths across the genome.',
    },
    {
      src: '/images/tstv_by_qual.0.png',
      legend: 'Ts/Tv stratified by QUAL',
      info: 'This image represents the TS/TV by Quality.',
    },
    {
      src: '/images/indels.0.png',
      legend: 'Indel distribution',
      info: 'This image represents the distribution of read depths across the genome.',
    },
    {
      src: '/images/indel_vaf.0.png',
      legend: 'Fraction of alternate indel allele',
      info: 'This image represents the distribution of read depths across the genome.',
    },  
    {
      src: '/images/depth.0.png',
      legend: 'Depth distribution',
      info: 'This image represents the distribution of read depths across the genome.',
    },
    {
      src: '/images/hwe.0.png',
      legend: 'Number of HETs by AF',
      info: 'This image represents the distribution of read depths across the genome.',
    },
    {
      src: '/images/substitutions.0.png',
      legend: 'Substitution types',
      info: 'This image represents the distribution of read depths across the genome.',
    },            
    {
      src: '/images/vaf.indel.0.png',
      legend: 'Indel Variant Allele Frequency',
      info: 'This image represents the distribution of read depths across the genome.',
    },
    {
      src: '/images/vaf.snv.0.png',
      legend: 'SNV Variant Allele Frequency',
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
        <p className="text-gray-600">Explore the quality control metrics generated for DenGen. Data was extracted with bcftools, and rendered using the plot-vcfstats according to the bcftools reference manual.</p>
      </header>


  <div class="overflow-x-auto">
    <table class="w-full border-collapse border border-gray-300 mb-6">
      <thead>
        <tr class="bg-orange-300">
          <th class="border border-gray-400 px-4 py-2">Callset</th>
          <th colspan="3" class="border border-gray-400 px-4 py-2">SNPs</th>
          <th colspan="2" class="border border-gray-400 px-4 py-2">Indels</th>
          <th class="border border-gray-400 px-4 py-2">MNPs</th>
          <th class="border border-gray-400 px-4 py-2">Others</th>
        </tr>
        <tr class="bg-orange-300">
          <th class="border border-gray-400 px-4 py-2"></th>
          <th class="border border-gray-400 px-4 py-2">n</th>
          <th class="border border-gray-400 px-4 py-2">ts/tv</th>
          <th class="border border-gray-400 px-4 py-2">(1st ALT)</th>
          <th class="border border-gray-400 px-4 py-2">n</th>
          <th class="border border-gray-400 px-4 py-2">frm*</th>
          <th class="border border-gray-400 px-4 py-2"></th>
          <th class="border border-gray-400 px-4 py-2"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-400 px-4 py-2">DenGen</td>
          <td class="border border-gray-400 px-4 py-2 text-right">80,969,313</td>
          <td class="border border-gray-400 px-4 py-2 text-right">1.60</td>
          <td class="border border-gray-400 px-4 py-2 text-right">1.66</td>
          <td class="border border-gray-400 px-4 py-2 text-right">18,366,910</td>
          <td class="border border-gray-400 px-4 py-2 text-center">–</td>
          <td class="border border-gray-400 px-4 py-2 text-right">0</td>
          <td class="border border-gray-400 px-4 py-2 text-right">0</td>
        </tr>
      </tbody>
    </table>

     <p class="text-sm text-gray-700 italic mb-6">
      * frameshift ratio: out/(out+in)
    </p>
    
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-orange-300">
          <th class="border border-gray-400 px-4 py-2">Callset</th>
          <th class="border border-gray-400 px-4 py-2">Singletons (AC=1)</th>
          <th class="border border-gray-400 px-4 py-2">SNPs</th>
          <th class="border border-gray-400 px-4 py-2">Indels</th>
          <th class="border border-gray-400 px-4 py-2">Multiallelic Sites</th>
          <th class="border border-gray-400 px-4 py-2">Multiallelic SNPs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-400 px-4 py-2">DenGen</td>
          <td class="border border-gray-400 px-4 py-2 text-right">49.2%</td>
          <td class="border border-gray-400 px-4 py-2 text-right">1.59</td>
          <td class="border border-gray-400 px-4 py-2 text-right">37.3%</td>
          <td class="border border-gray-400 px-4 py-2 text-right">0</td>
          <td class="border border-gray-400 px-4 py-2 text-right">0</td>
        </tr>
      </tbody>
    </table>
  </div>
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
export default SamplePage;



