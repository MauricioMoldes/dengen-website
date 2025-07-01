import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component

function PublicationsPage() {
  return (

   <Layout>
    <div className="container mx-auto py-8">

    <h1 className="text-4xl font-bold text-center mb-6">Publications</h1>

    <div className="bg-white p-6 rounded-lg shadow-md">
  {/* Overview Section */}
  
    <h2 className="text-2xl font-semibold text-[#003865] mb-4">Overview</h2>    
      
    <p className="text-gray-600 mb-6">
      The DenGen Genome Aggregation Browser is proud to support scientific advancements by providing access to a comprehensive dataset of genomic variants. Below, you will find key statistics about DenGen's impact and a list of publications that have cited or utilized DenGen data.
    </p>
  

  {/* Statistics Section */}
  
    <h2 className="text-2xl font-semibold text-[#003865] mb-4">Statistics</h2>
    <ul className="text-gray-600 mb-6 list-disc list-inside">
      <li>Total Papers Citing DenGen: <span className="font-bold">0 (Dataset release pending)</span></li>
      <li>Fields of Research: <span className="font-bold">Genomics, Clinical Diagnostics, Personalized Medicine</span></li>
      <li>Most Recent Publication: <span className="font-bold">NA</span></li>
    </ul>
  

  {/* Publications List Section */}
  
    <h2 className="text-2xl font-semibold text-[#003865] mb-4">Publications</h2>
    <p className="text-gray-600 mb-6">Currently, no publications citing DenGen are available. Once the dataset is released and researchers begin publishing, this section will be updated regularly. If you have published research using DenGen data and would like to see it listed here, please  <a href="/contact" className="text-blue-500 underline">contact us</a>.</p>
    
{/*
    <ul className="text-gray-600 mb-6 list-disc list-inside">
      <li>
        <span className="font-bold">Doe, J., & Smith, A. (2025).</span> "Genetic Diversity in the Danish Population: Insights from DenGen." <em>Journal of Genomics Research</em>. DOI: <a href="#" className="text-blue-500 underline">10.1234/jgr.2025.001</a>
      </li>
      <li>
        <span className="font-bold">Lee, K., et al. (2024).</span> "Structural Variants in Denmark: Applications in Clinical Genomics." <em>Nature Genetics</em>. DOI: <a href="#" className="text-blue-500 underline">10.1234/ng.2024.567</a>
      </li>
      <li>
        <span className="font-bold">Andersen, P., et al. (2023).</span> "DenGen: A Resource for Population-Specific Variant Frequencies." <em>Genomics Insights</em>. DOI: <a href="#" className="text-blue-500 underline">10.1234/gi.2023.890</a>
      </li>
    </ul>
    <p className="text-gray-600">
      If you have published research using DenGen data and would like to see it listed here, please  <a href="/contact" className="text-blue-500 underline">contact us</a>.
    </p> 

    */}
</div>
</div>

   </Layout>

  );
}
export default PublicationsPage;



