
import React from "react";
import { useState,useEffect } from 'react';
//import Layout from "./LayoutPage"; // Import the Layout component
import { useParams } from 'react-router-dom';


function FastQCPage() {

const { filename } = useParams();
const cleanedFilename = filename.replace(/_R\d+$/, '');
const [reportHtml, setReportHtml] = useState(null);

useEffect(() => {
    // Fetch the HTML content (File or API)
    fetch(`/reads/${cleanedFilename}/${filename}_fastqc.html`)
      .then((response) => response.text())
      .then((html) => setReportHtml(html))
      .catch((error) => console.error("Error loading report:", error));
  }, []);

 return (

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
    
    
  );
}
export default FastQCPage;




