import React from "react";
import Layout from "./LayoutPage";

function ComingSoonPage() {
  return (
    <Layout>
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-5xl font-bold text-[#003865] mb-6">
          Coming Soon
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
          We're working hard to bring you something exciting. A new feature will soon be available to explore and interact with DenGen data.
        </p>        
        <p className="text-gray-500 italic text-md">
          Thank you for your patience. Stay tuned for updates!
        </p>
       
      </div>
    </Layout>
  );
}

export default ComingSoonPage;



