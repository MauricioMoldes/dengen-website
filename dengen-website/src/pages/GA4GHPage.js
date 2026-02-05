import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component

function GA4GHPage() {

  const ga4ghStandards = [
    {
      section: "Large Scale Genomics",
      items: [
        { name: "Read File Formats (SAM/BAM/CRAM)", purpose: "Specifications for storing next-generation sequencing read data.", specificationVersion: "V3.0.0", supportedVersion: "V3.0.0", implementation: "Production" },
        { name: "Variation File Formats (VCF/BCF)", purpose: "The specifications for Variant Call Format Files (VCF) and its binary counterpart BCF.", specificationVersion: "V4.0.0", supportedVersion: "V4.0.0", implementation: "Production" },
      ],
    },
    {
      section: "Discovery",
      items: [
        { name: "Beacon v2", purpose: "Supports discovery of genomic variants, phenotypes, and individuals", specificationVersion: "V2.0", supportedVersion: "V2.0", implementation: (
        <a 
          href="http://10.62.55.108:3000/beacon" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 underline"
        >
          Beacon
        </a>
      )
    },
      ],
    },
    {
      section: "Data Use / Researcher Identities",
      items: [
        { name: "Data Use Ontology (DUO)", purpose: "Allow users to semantically tag genomic datasets with usage restrictions, allowing them to become automatically discoverable based on a health, clinical, or biomedical researcher’s authorisation level or intended use.", specificationVersion: "V1.0", supportedVersion: "-", implementation: "Considering" },
      ],
    },
    {
      section: "Genomic Knowledge Standards",
      items: [
        { name: "Variation Representation (VRS)", purpose: "Provides a flexible framework of computational models, schemas, and algorithms to precisely and consistently exchange genetic variation data across communities.", specificationVersion: "V2.0", supportedVersion: "-", implementation: "Considering" },
      ],
    },
    {
      section: "Clin / Pheno Data Capture",
      items: [
        { name: "Phenopackets", purpose: "Provides information models with different levels of complexity to enable high level clinical phenotype information as well as deep clinical phenotype information to be exchanged.", specificationVersion: "V2.0.0", supportedVersion: "-", implementation: "Exploring" },
      ],
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto py-8">        

        <div className="flex justify-center mb-6">
          <img 
            src="https://ega-archive.org/assets/img/GA-logo-horizontal-tag-RGB.svg" 
            alt="GA4GH Logo" 
            className="h-36 object-contain" 
          />
        </div>

        <p className="text-gray-700 text-center mb-8">
          DenGen adopts international GA4GH standards to ensure interoperable, secure, and reproducible genomic data sharing for clinical and research use.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technical Standards</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specification Version</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supported Version</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Implementation</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {ga4ghStandards.map((section, idx) => (
                <React.Fragment key={idx}>
                  {/* Section Header */}
                  <tr className="bg-gray-100">
                    <td colSpan="5" className="px-4 py-2 font-semibold text-gray-800">{section.section}</td>
                  </tr>
                  {/* Standards Rows */}
                  {section.items.map((item, index) => (
                    <tr key={index} className="align-top">
                      <td className="px-4 py-3 max-w-xs break-words font-medium">{item.name}</td>
                      <td className="px-4 py-3 max-w-xs break-words text-gray-600">{item.purpose}</td>
                      <td className="px-4 py-3 max-w-xs break-words text-gray-600">{item.specificationVersion}</td>
                      <td className="px-4 py-3 max-w-xs break-words text-gray-600">{item.supportedVersion}</td>
                      <td className="px-4 py-3 max-w-xs break-words text-gray-600">{item.implementation}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </Layout>
  );
}

export default GA4GHPage;










/*



function GA4GHPage() {
  // Example data for DenGen GA4GH adoption
  const standards = [
    { name: "Beacon v2", description: "Federated variant queries across datasets" },
    { name: "VRS (Variation Representation)", description: "Standardized representation of genetic variants" },
    { name: "Phenopackets (exploration)", description: "Structured clinical phenotype data (planned integration)" },
    { name: "DUO / Consent Codes", description: "Data use and access standardization (future)" },
  ];

  return (
    <Layout>
      <div className="container mx-auto py-8">

      
        <div className="flex justify-center mb-6">
          <img 
            src="https://ega-archive.org/assets/img/GA-logo-horizontal-tag-RGB.svg" 
            alt="GA4GH Logo" 
            className="h-36 object-contain" 
          />
        </div>

        <p className="text-gray-700 text-center mb-8">
          DenGen adopts international GA4GH standards to ensure interoperable, secure, and reproducible genomic data sharing for clinical and research use.
        </p>

        
        <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Standard</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose / Adoption</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {standards.map((s, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">{s.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{s.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </Layout>
  );
}

export default GA4GHPage;

*/
