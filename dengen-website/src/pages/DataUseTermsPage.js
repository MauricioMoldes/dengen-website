import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component

function DataUseTermsPage() {
  return (
    <Layout>
     <div className="container mx-auto py-8">
  <h1 className="text-4xl font-bold text-center mb-6">Terms of Use</h1>

  {/* Introduction Section */}
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-[#003865] mb-4">Introduction</h2>
    <p className="text-gray-600 mb-6">
      Welcome to the DenGen Genome Aggregation Browser. By accessing or using this platform, you agree to comply with the following terms and conditions. If you do not agree with any part of these terms, please refrain from using the platform.
    </p>


  {/* Purpose Section */}
 
    <h2 className="text-2xl font-semibold text-[#003865] mb-4">Purpose</h2>
    <p className="text-gray-600 mb-6">
      The DenGen Genome Aggregation Browser is designed to make genomic datasets more findable and accessible, promoting collaboration, fostering new research, and increasing public benefit.
    </p>


  {/* Data Use and Restrictions */}

    <h2 className="text-2xl font-semibold text-[#003865] mb-4">Data Use and Restrictions</h2>
    <ul className="text-gray-600 mb-6 list-disc list-inside">
      <li><strong>Non-Commercial Use:</strong> The data provided is intended for academic and non-commercial research purposes only. Any commercial use requires explicit permission from DenGen.</li>
      <li><strong>Data Integrity:</strong> Users must not attempt to re-identify individuals from the aggregated genomic data. Any such attempts are strictly prohibited.</li>
      <li><strong>Compliance with Laws:</strong> Users are responsible for ensuring that their use of the data complies with all applicable laws and regulations, including Danish data protection laws.</li>
    </ul>
  

  {/* Privacy and Data Protection */}
 
    <h2 className="text-2xl font-semibold text-[#003865] mb-4">Privacy and Data Protection</h2>
    <p className="text-gray-600 mb-6">
      DenGen is committed to protecting the privacy of individuals. While the data is aggregated and anonymized, users must handle it responsibly and in accordance with the General Data Protection Regulation (GDPR). {/* and the Danish Data Protection Act. For more information, please refer to the Danish Data Protection Agency's guidelines. (<a href="https://www.datatilsynet.dk/english" className="text-blue-500 underline">datatilsynet.dk</a>)*/}
    </p>
  

  {/* Limitation of Liability */}
 
    <h2 className="text-2xl font-semibold text-[#003865] mb-4">Limitation of Liability</h2>
    <p className="text-gray-600 mb-6">
      DenGen strives to provide accurate and up-to-date data but makes no warranties regarding the completeness or accuracy of the information. DenGen shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the platform or its data.
    </p>


  {/* Modifications */}
 
    <h2 className="text-2xl font-semibold text-[#003865] mb-4">Modifications</h2>
    <p className="text-gray-600 mb-6">
      DenGen reserves the right to modify these terms at any time. Users are encouraged to review the terms periodically to stay informed of any changes.
    </p>
 

  {/* Governing Law */}
  
    <h2 className="text-2xl font-semibold text-[#003865] mb-4">Governing Law</h2>
    <p className="text-gray-600 mb-6">
      These terms are governed by and construed in accordance with the laws of Denmark. Any disputes arising from these terms or the use of the DenGen Genome Aggregation Browser shall be subject to the exclusive jurisdiction of the Danish courts.
    </p>
  

  {/* Contact Information */} 
    <h2 className="text-2xl font-semibold text-[#003865] mb-4">Contact Information</h2>
    <p className="text-gray-600 mb-6">
      For questions or further information, please <a href="/contact" className="text-blue-500 underline">contact us</a>.
    </p>
  
</div>
</div>
    </Layout>
  );
}
export default DataUseTermsPage;
