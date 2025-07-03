import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component

function CitationPage() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Cite DenGen</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#003865] mb-4">How to Cite DenGen</h2>
        {/*<p className="text-gray-600 mb-4">
          We are pleased that you are referencing DenGen in your work. Below are the recommended citation formats for different types of publications. Please use the appropriate format depending on the type of resource you are citing.
        </p>*/}
          <p className="text-gray-600 mb-4">
           A formal publication describing DenGen is forthcoming. In the meantime, we recommend the following provisional citation formats for acknowledging DenGen in your publications, presentations, or other academic work.
          </p>


        {/* Citation Formats */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-[#003865]">APA Style:</h3>
            <p className="text-gray-600">
              DenGen Research Team. (2025). DenGen: The Danish Genomic Database for Clinical and Research Applications. Available at <a href="https://www.dengen.dk" className="text-[#003865] hover:underline">https://www.dengen.dk</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#003865]">MLA Style:</h3>
            <p className="text-gray-600">
             DenGen Research Team. "DenGen: The Danish Genomic Database for Clinical and Research Applications." 2025. <a href="https://www.dengen.dk" className="text-[#003865] hover:underline">https://www.dengen.dk</a>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#003865]">Chicago Style:</h3>
            <p className="text-gray-600">
             DenGen Research Team. 2025. "DenGen: The Danish Genomic Database for Clinical and Research Applications." Accessed January 13, 2025. <a href="https://www.dengen.dk" className="text-[#003865] hover:underline">https://www.dengen.dk</a>
            </p>
          </div>

          <div>
  <h3 className="text-xl font-semibold text-[#003865]">BibTeX Style:</h3>
  <pre className="bg-gray-100 p-4 rounded-md font-mono text-gray-600">
    {`
      @misc{denGen2025,
        author = {DenGen Research Team},
        title = {DenGen: The Danish Genomic Database for Clinical and Research Applications},
        year = {2025},       
        url = {https://www.dengen.dk}
      }
    `}
  </pre>
</div>
        </div>       

        {/* Footer Information */}
        <div className="mt-6">
          <p className="text-gray-600">
            For further information on how to cite or use DenGen, please <a href="/contact" className="text-[#003865] hover:underline">contact us</a>
          </p>
        </div>
      </div>
    </div>
    </Layout>
  );
}
export default CitationPage;



