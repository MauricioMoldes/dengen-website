import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component

function AboutPage() {
  return (

   <Layout>
 <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-6">About DenGen</h1>

      {/* Introduction Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#003865] mb-4">What is DenGen?</h2>
        <p className="text-gray-600 mb-6">
          DenGen (Danish Genomes) is a genomics initiative designed to provide a comprehensive resource for understanding the genetic diversity of the Danish population. This proof-of-concept database, aims to advance clinical research, genetic diagnostics, and personalized medicine in Denmark. Our goal is to provide a valuable dataset of genomic variants, including Single Nucleotide Variants (SNVs) and Structural Variants (SVs), which will be freely accessible to researchers, clinicians, and the scientific community.
        </p>      

        <h3 className="text-xl font-semibold text-[#003865] mb-4">Our Mission</h3>
        <p className="text-gray-600 mb-6">
          DenGen's mission is to map the genetic landscape of Denmark through large-scale whole-genome sequencing. By doing so, we aim to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
          <li>Identify and catalog genetic variants that are specific to the Danish population.</li>
          <li>Provide a resource for improving the accuracy of genetic diagnostics and precision medicine in Denmark.</li>
          <li>Facilitate research on the genetic basis of diseases prevalent in the Danish population.</li>
          <li>Contribute to global genomics databases for comparative research and variant discovery.</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#003865] mb-4">The DenGen Dataset</h3>
        <p className="text-gray-600 mb-6">
          The initial DenGen dataset consists of high-quality whole-genome sequencing data from over 2,000 Danish individuals from patient diagnostics. The dataset is covering a spectrum of the Danish population, and have been filtered to minimise 1st and 2nd degree relations. The dataset includes both Single Nucleotide Variants and Structural Variants.
        </p>

        <h3 className="text-xl font-semibold text-[#003865] mb-4">Does the database contain person identifiable or pathogenic variants?</h3>
        <p className="text-gray-600 mb-6">
          The dataset in the database is anonymized, and only variants occuring 5 or more times are displayed. Pathogenic variants are rare variants, and since filtering includes only common variants, potential pathogenic variants are excluded from the dataset. 
        </p>

        <h3 className="text-xl font-semibold text-[#003865] mb-4">Why DenGen Matters</h3>
        <p className="text-gray-600 mb-6">
          With an increasing focus on personalized medicine and genomics-based healthcare, having a comprehensive understanding of the genetic variations in a given population is critical. DenGen fills this gap by providing data that can be used to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
          <li>Enhance disease gene discovery by linking genetic variants with phenotypic traits.</li>
          <li>Improve the clinical relevance of genetic tests, enabling better diagnostic accuracy.</li>
          <li>Support epidemiological research into genetic risk factors for complex diseases.</li>
          <li>Facilitate drug development and clinical trials tailored to the genetic makeup of the Danish population.</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#003865] mb-4">Our Methodology</h3>
        <p className="text-gray-600 mb-6">
          DenGen uses state-of-the-art sequencing platforms and bioinformatics pipelines to process and analyze genomic data. Our process includes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
          <li>Whole-genome sequencing on the Illumina NovaSeq 6000 platform with PCR-free library preparation.</li>
          <li>Bioinformatics pipelines for variant calling, including SNVs and structural variants, using tools like GATK, Delly, Manta, and CNVnator.</li>
          <li>Comprehensive quality control and annotation to ensure data accuracy and usability.</li>
          <li>Aggregation of variant frequencies specific to the Danish population to improve genetic analysis and filtering.</li>
        </ul>

         <p className="text-gray-600 mb-6">
          Learn more about the <a href="/pipelines" className="text-[#003865] hover:underline">DenGen Pipelines</a>.
        </p>

        <h3 className="text-xl font-semibold text-[#003865] mb-4">Acknowledgements</h3>
        
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">          
         <li><strong>Danish National Genome Center (NGC)</strong>: The NGC provided the computational infrastructure necessary for large-scale data processing, analysis, and long-term storage. This included secure high-performance computing resources and data hosting platforms that enabled efficient handling of the entire DenGen dataset.</li>
          <li><strong>Broad Institute</strong>: Valueable technical insights, academic  discussions and general contribiutions to open source clinical bioinformatics software. </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#003865] mb-4">Contact Us</h3>
        <p className="text-gray-600 mb-6">
          If you have questions, want to collaborate, or would like more information about DenGen, please visit our <a href="/contact" className="text-[#003865] hover:underline">Contact Page</a>.
        </p>
      </div>

        
    </div>

   </Layout>

  );
}
export default AboutPage;



