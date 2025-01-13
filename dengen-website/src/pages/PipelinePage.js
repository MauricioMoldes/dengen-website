import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component

function ContactPage() {
  return (
    <Layout>
       <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-6">DenGen Bioinformatics Pipeline</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#003865] mb-4">Overview</h2>
        <p className="text-gray-600 mb-6">
          The DenGen bioinformatics pipeline is designed to process whole-genome sequencing data from the Danish population, with a focus on both single-nucleotide variants (SNVs) and structural variants (SVs). Our pipeline incorporates a combination of cutting-edge algorithms and in-house developed tools to provide accurate and reliable variant detection.
        </p>

        <h3 className="text-xl font-semibold text-[#003865] mb-4">Pipeline Steps</h3>
        <p className="text-gray-600 mb-4">
          The pipeline follows a systematic approach to process raw sequencing data and identify genetic variants. The key steps in our pipeline are as follows:
        </p>

        {/* Pipeline Steps Section */}
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-[#003865]">1. Data Preprocessing</h4>
            <p className="text-gray-600">
              Raw sequencing data is first preprocessed to remove adapter sequences, low-quality reads, and other contaminants. We use tools such as <strong>FastQC</strong> and <strong>Trim Galore</strong> to ensure high-quality input data for subsequent analyses.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#003865]">2. Alignment</h4>
            <p className="text-gray-600">
              Sequencing reads are aligned to the reference genome using <strong>Burrows-Wheeler Aligner (BWA)</strong> with appropriate settings for paired-end reads. This step is crucial for positioning each read correctly within the genome.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#003865]">3. Variant Calling</h4>
            <p className="text-gray-600">
              Variant detection is performed using the <strong>GATK HaplotypeCaller</strong> for SNVs, providing high sensitivity and accuracy. For structural variants, a consensus approach combining tools such as <strong>CNVnator</strong>, <strong>Delly</strong>, <strong>Lumpy</strong>, and <strong>Manta</strong> is employed to detect copy number variations (CNVs) and SVs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#003865]">4. Variant Annotation</h4>
            <p className="text-gray-600">
              Once variants are called, they are annotated with information such as functional impact, allele frequency, and related clinical information using tools like <strong>VEP (Variant Effect Predictor)</strong> and <strong>ANNOVAR</strong>.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#003865]">5. Quality Control and Filtering</h4>
            <p className="text-gray-600">
              After variant annotation, we perform rigorous quality control steps to ensure the validity of the variant calls. Filtering criteria are applied based on quality scores, read depth, and other metrics to remove false positives and low-confidence variants.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#003865]">6. Data Integration and Final Output</h4>
            <p className="text-gray-600">
              The final output includes a comprehensive list of high-confidence variants, ready for further analysis. These variants are stored in the DenGen database, providing researchers and clinicians with valuable insights into the genetic makeup of the Danish population.
            </p>
          </div>
        </div>

        {/* Additional Tools Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-[#003865] mb-4">Additional Tools and Resources</h3>
          <p className="text-gray-600 mb-4">
            In addition to the main pipeline tools, we also utilize several other bioinformatics tools to improve the accuracy and reliability of our results:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>IGV (Integrative Genomics Viewer)</strong> for visualizing variant calls and sequencing alignments.</li>
            <li><strong>GATK Best Practices</strong> to optimize the variant discovery process.</li>
            <li><strong>BEDTools</strong> for manipulating genomic intervals and file formats.</li>
            <li><strong>VCFtools</strong> for working with variant call format (VCF) files, allowing for filtering and summarizing data.</li>
          </ul>
        </div>

        {/* Data Access Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-[#003865] mb-4">Access the Data</h3>
          <p className="text-gray-600 mb-4">
            The results of our bioinformatics pipeline are stored in the DenGen database, which is accessible to researchers and clinicians through our public and secure data access portals. If you're interested in using the data, please refer to our <a href="/data-access" className="text-[#003865] hover:underline">Data Access Page</a> for more details.
          </p>
        </div>
      </div>
    </div>
    </Layout>
  );
}
export default ContactPage;



