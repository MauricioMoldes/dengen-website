import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component

function FundingPage() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Our Funders</h1>

      {/* Introduction Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="text-xl font-semibold text-[#003865] mb-4">Funding for DenGen</p>
        <p className="text-gray-600 mb-6">
          DenGen is made possible through the generous support of our funding partners. Their contributions enable us to
          continue advancing genomics research and provide valuable insights to the clinical and research communities. We
          extend our deepest gratitude to our funders for their ongoing support.
        </p>
        <p className="text-gray-600 mb-6">
          If you are interested in supporting DenGen or learning more about our funding opportunities, please contact us at
          <a href="mailto:funding@dengen.com" className="text-[#003865] hover:underline"> funding@dengen.com</a>.
        </p>
      </div>

      {/* Funders List Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="text-xl font-semibold text-[#003865] mb-4">Our Funding Partners</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Funders List Item 1 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-[#003865] mb-2">Novo Nordisk Foundation</h2>
            <p className="text-gray-600 mb-4">
              The Novo Nordisk Foundation is one of DenGen's primary supporters, providing funding for key infrastructure and research projects.
            </p>
            <a href="https://www.novonordiskfonden.dk/en/" className="text-[#003865] hover:underline">
              Visit Novo Nordisk Foundation
            </a>
          </div>

          {/* Funders List Item 2 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-[#003865] mb-2">The Danish National Genome Center</h2>
            <p className="text-gray-600 mb-4">
              The Danish National Genome Center plays a crucial role in supporting the growth of DenGen by funding research and data-sharing initiatives.
            </p>
            <a href="https://www.sundhedsdatastyrelsen.dk/" className="text-[#003865] hover:underline">
              Visit The Danish National Genome Center
            </a>
          </div>

          {/* Funders List Item 3 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-[#003865] mb-2">The Carlsberg Foundation</h2>
            <p className="text-gray-600 mb-4">
              The Carlsberg Foundation provides funding for scientific research with a focus on innovation and new technological developments.
            </p>
            <a href="https://www.carlsbergfondet.dk/en/" className="text-[#003865] hover:underline">
              Visit The Carlsberg Foundation
            </a>
          </div>

          {/* Funders List Item 4 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-[#003865] mb-2">The Danish Council for Independent Research</h2>
            <p className="text-gray-600 mb-4">
              The Danish Council for Independent Research supports DenGen through grants for research projects aimed at advancing genomics and clinical applications.
            </p>
            <a href="https://www.dff.dk/en/" className="text-[#003865] hover:underline">
              Visit The Danish Council for Independent Research
            </a>
          </div>

          {/* Funders List Item 5 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-[#003865] mb-2">European Commission</h2>
            <p className="text-gray-600 mb-4">
              The European Commission funds DenGen as part of its commitment to advancing research in genomics and healthcare across Europe.
            </p>
            <a href="https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/home" className="text-[#003865] hover:underline">
              Visit European Commission Funding
            </a>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
export default FundingPage;



