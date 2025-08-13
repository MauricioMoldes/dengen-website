import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component
import config from '../config';

function BeaconPage() {
  return (
    <Layout>
    <div className="container mx-auto py-8">
     <h1 className="text-4xl font-bold text-center mb-6">DenGen Beacon: A Gateway to Danish Genomic Data</h1>

  <div className="bg-white p-6 rounded-lg shadow-md">
    {/* Introduction Section */}
    <h2 className="text-2xl font-semibold text-[#003865] mb-4">What is the GA4GH Beacon Protocol?</h2>

    {/* Add logo here */}
    <div className="flex justify-center mb-6">
      <img 
        src="https://ega-archive.org/assets/img/GA-logo-horizontal-tag-RGB.svg" 
        alt="GA4GH Logo" 
        className="h-36 object-contain" 
      />
    </div>

    <p className="text-gray-600 mb-4">
      The <a href="https://www.ga4gh.org/" className="text-[#003865] hover:underline">Global Alliance for Genomics and Health (GA4GH) </a> Beacon API Beacon Protocol is a standardized framework designed to facilitate the discovery of genomic data. It allows researchers to query genomic datasets to determine whether a dataset contains specific genetic variants of interest, all while maintaining privacy and security.
    </p>

    <p className="text-gray-600 mb-6">
      Read more about <a href="https://www.ga4gh.org/product/beacon-api/" className="text-[#003865] hover:underline">GA4GH Beacon API</a>.
    </p>
        

        {/* DenGen Beacon Implementation Section */}
        <h2 className="text-2xl font-semibold text-[#003865] mb-4">DenGen’s Beacon Implementation</h2>
        <p className="text-gray-600 mb-4">
          DenGen’s Beacon is built upon the GA4GH Beacon reference implementation, ensuring compatibility with international standards. This powerful tool allows researchers to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Explore aggregated genetic variant frequencies.</li>
          <li>Filter and analyze common and rare variants within the Danish population.</li>
          <li>Connect with global genomic data resources for comparative analyses.</li>
        </ul>

        {/* National Beacon Section */}
        <h2 className="text-2xl font-semibold text-[#003865] mb-4">Beyond DenGen : A National Beacon</h2>
        <p className="text-gray-600 mb-4">
          While the DenGen Beacon hosts data from the DenGen project, it also serves as a foundation for a broader Danish Beacon initiative. This ambitious effort aims to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li><strong>Expand Data Coverage:</strong> Host genomic data from up to 60,000 individuals, creating one of the most comprehensive national genomic databases.</li>
          <li><strong>Facilitate Research:</strong> Provide an essential resource for genomic research, personalized medicine, and population health studies.</li>
          <li><strong>Enhance Collaboration:</strong> Foster international collaboration by connecting with other GA4GH-compliant beacons worldwide.</li>
        </ul>

        {/* How to Use Section */}
        <h2 className="text-2xl font-semibold text-[#003865] mb-4">How to Use the DenGen Beacon</h2>
        <p className="text-gray-600 mb-4">
          Users can access the DenGen Beacon through an intuitive interface designed for ease of use. 
        </p>

         <div className="text-center mt-6">
        <a
            href={config.REACT_APP_CLINICAL_BEACON_UI}  target="_blank"           
            className="bg-[#003865] text-white py-2 px-4 rounded hover:bg-[#005a99] transition"
          >
            Access the DenGen Beacon Interface
          </a>
        </div>

        {/* API Section */}
<h3 className="text-xl font-semibold text-[#003865] mb-3">API Endpoints</h3>
<p className="text-gray-700 mb-2">
  The DenGen Beacon API provides programmatic access to genomic variant queries. You can access the API at:
</p>
<code className="block bg-gray-100 p-3 rounded font-mono text-sm text-[#003865] mb-4">
  http://beacon.dengen.dk/api
</code>

<p className="text-gray-600">
  For detailed API documentation and query parameters, please refer to the <a href="https://docs.genomebeacons.org/" className="text-[#003865] hover:underline">GA4GH Beacon v2 Specification</a>.
</p> 

      
      </div>
    </div>
    </Layout>
  );
}
export default BeaconPage;



