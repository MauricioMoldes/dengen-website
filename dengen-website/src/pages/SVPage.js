
import React from "react";
import { useState,useEffect } from 'react';
import Layout from "./LayoutPage"; // Import the Layout component


function SVPage() {

const [reportHtml, setReportHtml] = useState(null);

useEffect(() => {
    // Fetch the HTML content (File or API)
    fetch("00crstivm-103918010210-Normal_Blood_noinfo-WGS_v1_IlluminaDNAPCRFree_RHGM01904-221005_A01961_BH35L5DSX5-EXT_LABKA_NGCWGS-NGCWGS05717.html")
      .then((response) => response.text())
      .then((html) => setReportHtml(html))
      .catch((error) => console.error("Error loading report:", error));
  }, []);

 return (
    <Layout>
      

      <main className="flex flex-col items-center space-y-6">
 
            
          {reportHtml ? (
            <div
              className="report-content"
              dangerouslySetInnerHTML={{ __html: reportHtml }}
            ></div>
          ) : (
            <p className="text-gray-600">Loading report...</p>
          )}
       </main>
    
    </Layout>
  );
}
export default SVPage;




