import { useState } from 'react';

const Features = () => {
  return (
    <div className="container mx-auto py-8">
    {/* Hero Section */}
    <div className="text-center py-12 bg-[#5e9cc3] text-white rounded-lg shadow-md mb-8">
  <h1 className="text-5xl font-bold mb-4">DenGen</h1>
  <p className="text-lg mb-6">
  DenGen is a genomics initiative designed to provide a comprehensive resource for understanding the genetic diversity of the Danish population. 
  </p>
  <a
    href="cohort-statistics"
    className="bg-white text-[#5e9cc3] py-2 px-6 rounded hover:bg-gray-200 transition font-semibold mr-4"
  >
    DenGen in Numbers
  </a>
  <a
    href="about"
    className="bg-white text-[#5e9cc3] py-2 px-6 rounded hover:bg-gray-200 transition font-semibold"
  >
    Learn More
  </a>
</div>


    {/* Feature Highlights Section */}
    <div id="features" className="grid md:grid-cols-4 gap-6">
      
     
      <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col">
	        <h2 className="text-2xl font-bold text-[#003865] mb-2">Genome Agreggation Browser</h2>
          <p className="text-gray-600 mb-4 flex-grow">
          Explore DenGen's aggregated and harmonized exome and genome sequencing data as well as summary data.
          </p>
          <a
           
            href="/comming-soon"
            className="bg-[#003865] text-white py-2 px-4 rounded hover:bg-[#005a99] transition mt-auto"
            target="_blank" rel="noopener noreferrer"
          >
            Explore Now
          </a>
        </div>

       {/* Allele Frequency Browser */}
     <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col">
          <h2 className="text-2xl font-bold text-[#003865] mb-2">Allele Frequency Browser</h2>
          <p className="text-gray-600 mb-4 flex-grow">
          Discover allele frequency insights in DenGen’s harmonized genomic dataset, enabling population-scale variant exploration.
          </p>
          <a
            href="http://10.62.55.108:3001/"
            className="bg-[#003865] text-white py-2 px-4 rounded hover:bg-[#005a99] transition mt-auto"
            target="_blank" rel="noopener noreferrer"
          >
            Browse Now
          </a>
        </div>

      {/* Beacon */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col">
	  {/*<img
            src="https://avatars.githubusercontent.com/u/33450937?s=200&v=4"
            alt="Beacon"
            className="mx-auto h-20 mb-4"
          />*/}
          <h2 className="text-2xl font-bold text-[#003865] mb-2">Danish Beacon</h2>
          <p className="text-gray-600 mb-4 flex-grow">
          Discover Danish Human Genomic data securely with the GA4GH Beacon protocol.
          </p>
          <a
            href="/comming-soon"
            className="bg-[#003865] text-white py-2 px-4 rounded hover:bg-[#005a99] transition mt-auto"
            target="_blank" rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>


      {/* Data Quality Portal  */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col">
	  {/*<img
            src="https://www.rigshospitalet.dk/english/departments/centre-of-diagnostic-investigation/department-of-genomic-medicine/PublishingImages/genomic-medicine.jpg"
            alt="Beacon"
            className="mx-auto h-20 mb-4"
          />*/}
          <h2 className="text-2xl font-bold text-[#003865] mb-2">Data Quality Portal</h2>
          <p className="text-gray-600 mb-4 flex-grow">
          Explore DenGen's Data Quality Portal, designed to provide generic quality control reports over the cohort files.
          </p>
          <a
            href="/landing"
            className="bg-[#003865] text-white py-2 px-4 rounded hover:bg-[#005a99] transition mt-auto"
            target="_blank" rel="noopener noreferrer"
          >
            Access Portal
          </a>
        </div>
    </div>

    {/* Call to Action 
    <div className="text-center mt-12">
      <h2 className="text-3xl font-bold text-[#003865] mb-4">Start Exploring DenGen</h2>
      <p className="text-gray-600 mb-6">
        Discover tools and resources designed to enhance genomic research and clinical applications.
      </p>
      <a
        href="/about"
        className="bg-[#003865] text-white py-3 px-6 rounded hover:bg-[#005a99] transition font-semibold"
      >
        Get Started
      </a>
    </div>
    */}
  </div>
  );
};


export default Features;

