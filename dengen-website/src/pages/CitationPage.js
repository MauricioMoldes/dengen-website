import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component

function CitationPage() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Cite DenGen</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#003865] mb-4">How to Cite DenGen</h2>
        <p className="text-gray-600 mb-4">
          We are pleased that you are referencing DenGen in your work. Below are the recommended citation formats for different types of publications. Please use the appropriate format depending on the type of resource you are citing.
        </p>

        {/* Citation Formats */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-[#003865]">APA Style:</h3>
            <p className="text-gray-600">
              Doe, J., Smith, J., Johnson, A., Lee, B., & White, E. (2025). DenGen: The Danish Genomic Database for Clinical and Research Applications. <em>DenGen Research Institute</em>. Available at <a href="https://www.dengen.com" className="text-[#003865] hover:underline">https://www.dengen.com</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#003865]">MLA Style:</h3>
            <p className="text-gray-600">
              Doe, Jane, et al. "DenGen: The Danish Genomic Database for Clinical and Research Applications." <em>DenGen Research Institute</em>, 2025. <a href="https://www.dengen.com" className="text-[#003865] hover:underline">https://www.dengen.com</a>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#003865]">Chicago Style:</h3>
            <p className="text-gray-600">
              Doe, Jane, John Smith, Alice Johnson, Bob Lee, and Emily White. 2025. "DenGen: The Danish Genomic Database for Clinical and Research Applications." <em>DenGen Research Institute</em>. Accessed January 13, 2025. <a href="https://www.dengen.com" className="text-[#003865] hover:underline">https://www.dengen.com</a>
            </p>
          </div>

          <div>
  <h3 className="text-xl font-semibold text-[#003865]">BibTeX Style:</h3>
  <pre className="bg-gray-100 p-4 rounded-md font-mono text-gray-600">
    {`
      @misc{denGen2025,
        author = {Jane Doe and John Smith and Alice Johnson and Bob Lee and Emily White},
        title = {DenGen: The Danish Genomic Database for Clinical and Research Applications},
        year = {2025},
        publisher = {DenGen Research Institute},
        url = {https://www.dengen.com}
      }
    `}
  </pre>
</div>
        </div>

        {/* Acknowledgements Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-[#003865]">Acknowledgments</h3>
          <p className="text-gray-600">
            DenGen is funded by the Novo Nordisk Foundation and supported by the Danish National Genome Center (NGC). We also thank the research participants for their contributions to this important project.
          </p>
        </div>

        {/* Footer Information */}
        <div className="mt-6">
          <p className="text-gray-600">
            For further information on how to cite or use DenGen, please contact us at <a href="mailto:info@dengen.com" className="text-[#003865] hover:underline">info@dengen.com</a>.
          </p>
        </div>
      </div>
    </div>
    </Layout>
  );
}
export default CitationPage;



