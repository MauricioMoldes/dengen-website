import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component

function ContactPage() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

      {/* Contact Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-xl font-semibold text-[#003865] mb-4">For additional information about DenGen, please contact:</p>
         
         {/* Contact email box */}
        <div className="mb-6">
          {/*<h3 className="text-lg font-semibold text-[#003865]">DenGen</h3>*/}
          {/* <p className="text-gray-600">Head of Bioinformatics</p>*/}
          <p className="text-gray-600">Email: <a href="mailto:support@dengen.dk" className="text-[#003865] hover:underline">support@dengen.dk</a></p>
           {/*<p className="text-gray-600">Phone: <a href="tel:+4528550628" className="text-[#003865] hover:underline">+45 2855 0628</a></p>*/}
        </div>

      {/* 
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#003865]">Frederik Otzen Bagger</h3>
          <p className="text-gray-600">Head of Bioinformatics</p>
          <p className="text-gray-600">Email: <a href="mailto:frederik.otzen.bagger@regionh.dk" className="text-[#003865] hover:underline">frederik.otzen.bagger@regionh.dk</a></p>
          <p className="text-gray-600">Phone: <a href="tel:+4528550628" className="text-[#003865] hover:underline">+45 2855 0628</a></p>
        </div>

        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#003865]">Maria Rossing</h3>
          <p className="text-gray-600">Head of Department, Senior Chief Physician</p>
          <p className="text-gray-600">Email: <a href="mailto:caroline.maria.rossing@regionh.dk" className="text-[#003865] hover:underline">caroline.maria.rossing@regionh.dk</a></p>
          <p className="text-gray-600">Phone: <a href="tel:+4535452223" className="text-[#003865] hover:underline">+45 3545 2223</a></p>
        </div>

        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#003865]">Martin Skygge</h3>
          <p className="text-gray-600">Chief Biomedical Laboratory Scientist</p>
          <p className="text-gray-600">Email: <a href="mailto:martin.skygge@regionh.dk" className="text-[#003865] hover:underline">martin.skygge@regionh.dk</a></p>
          <p className="text-gray-600">Phone: <a href="tel:+4521367897" className="text-[#003865] hover:underline">+45 2136 7897</a></p>
        </div>
         */}
      </div>
    </div>
    </Layout>
  );
}
export default ContactPage;



