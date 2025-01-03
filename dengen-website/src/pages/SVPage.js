
import React from "react";
import { useState,useEffect } from 'react';
import Layout from "./LayoutPage"; // Import the Layout component
import { useParams } from 'react-router-dom';

function SVPage() {

const { filename } = useParams();
const [reportHtml, setReportHtml] = useState(null);

useEffect(() => {
    // Fetch the HTML content (File or API)
    fetch(`/sv/${filename}.html`)
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




