import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component

function AboutPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center mb-6">About DenGen</h1>
        <p className="text-md mb-4">
          The DenGen database comprises frequencies of genetic variants in the Danish population, offering valuable information for genomics research and clinical diagnostics. The dataset combines both single-nucleotide variants (SNVs) and structural variants (SVs) of 2,211 unrelated individuals in a whole-genome sequencing cohort. The data is obtained from routine clinical practice.
        </p>
        <p className="text-md mb-4">
          Paired-end sequencing was performed on a NovaSeq6000 platform from Illumina using Illumina DNA PCR-free (tagmentation) kit, with an average read-depth of at least 30x. The sequencing data was analyzed using an in-house bioinformatics pipeline, built on GATK’s HaplotypeCaller to identify SNVs. For CNV detection, the pipeline utilizes a consensus approach, combining multiple CNV detection algorithms (CNVnator, Delly, Lumpy, and Manta) to address the limitations of individual tools and achieve more robust results.
        </p>
        <p className="text-md mb-4">
          The database provides a collection of aggregated variant frequencies in the Danish population for both researchers and clinicians. The design furthermore allows for refinement of the next N+1 analysis as a specific filter for common variant calls in the Danish population, whether they arise from sequencing errors, tool-specific noise, or as population-specific events. The dataset is available at the Danish National Genome Center (NGC) infrastructure, and the aggregated variant information will be publicly available in an anonymized form.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">DenGen Whole-Genome Sequencing Cohort:</h2>
        <ul className="list-disc pl-6 text-md">
          <li>The blood samples are obtained from routine clinical practice.</li>
          <li>Paired-end sequencing on a NovaSeq6000 platform from Illumina and Illumina DNA PCR-free (tagmentation) kit are used.</li>
          <li>Sequencing with an average read-depth of at least 30x.</li>
          <li>2,211 out of 2,916 individuals found to be unrelated, and 705 related (most of them are Trios).</li>
        </ul>
    </Layout>
  );
}
export default AboutPage;



