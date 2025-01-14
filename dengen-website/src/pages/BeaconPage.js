import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component

function BeaconPage() {
  return (
    <Layout>
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Beacon: A Gateway to Danish Genomic Data</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Introduction Section */}
        <h2 className="text-2xl font-semibold text-[#003865] mb-4">What is the GA4GH Beacon Protocol?</h2>
        <p className="text-gray-600 mb-4">
          The Global Alliance for Genomics and Health (GA4GH) Beacon Protocol is a standardized framework designed to facilitate the discovery of genomic data. It allows researchers to query genomic datasets to determine whether a dataset contains specific genetic variants of interest, all while maintaining privacy and security.
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li><strong>Standardized Queries:</strong> Simplifies access to diverse genomic datasets.</li>
          <li><strong>Privacy-Focused:</strong> Ensures user queries do not compromise individual privacy.</li>
          <li><strong>Interoperability:</strong> Supports integration across global genomic initiatives.</li>
        </ul>

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
        <h2 className="text-2xl font-semibold text-[#003865] mb-4">Beyond DenGen – A National Beacon</h2>
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
          Users can access the DenGen Beacon through an intuitive interface designed for ease of use. Key features include:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li><strong>Query Submission:</strong> Search for specific genetic variants or genomic regions.</li>
          <li><strong>Detailed Responses:</strong> Receive aggregated data without compromising individual privacy.</li>
          <li><strong>Interactive Tools:</strong> Visualize results and integrate findings into broader research workflows.</li>
        </ul>

        {/* Call to Action Section */}
        <div className="text-center mt-6">
          <p className="text-gray-600 mb-4">
            "Discover the power of genomic data. Explore the DenGen Beacon today and join us in advancing genomic research for Denmark and beyond."
          </p>
          <a
            href="http://localhost:8000/"
            className="bg-[#003865] text-white py-2 px-4 rounded hover:bg-[#005a99] transition"
          >
            Access the Beacon
          </a>
        </div>
      </div>
    </div>
    </Layout>
  );
}
export default BeaconPage;



