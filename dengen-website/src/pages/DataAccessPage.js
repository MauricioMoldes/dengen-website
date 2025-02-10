import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component

function DataAccessPage() {
  return (
    <Layout>
    
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Access DenGen Data</h1>
    <div className="bg-white p-6 rounded-lg shadow-md">

      {/* Governing Law */}  
      <h2 className="text-2xl font-semibold text-[#003865] mb-4">Overview</h2>
    <p className="text-gray-600 mb-6">
    You can only request access to, and download, summary files here, if you want access to the underlying individual data you need to contact Data Centre.
    You need to login to request access to the summary files.  
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
export default DataAccessPage;



