import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';


function HomePage() {
  return (
    
     <div className="px-64">
     
      <Navbar />
     	  
      {/* Key Features */}
      <section className="py-12">
        <h2 className="text-3xl text-center font-bold">Why DenGen?</h2>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="w-full md:w-1/3 px-6 text-center">
            <h3 className="text-xl font-semibold">Population Insights</h3>
            <p className="mt-2">Explore the most comprehensive Danish genome database.</p>
          </div>
          <div className="w-full md:w-1/3 px-6 text-center">
            <h3 className="text-xl font-semibold">High-Quality Data</h3>
            <p className="mt-2">Sequenced with cutting-edge NovaSeq6000 technology.</p>
          </div>
          <div className="w-full md:w-1/3 px-6 text-center">
            <h3 className="text-xl font-semibold">Collaborative Potential</h3>
            <p className="mt-2">Join researchers in unlocking Denmark’s genetic secrets.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>© 2024 DenGen | Developed by the Deparment of Genomic Medicine, Rigshospitalet </p>
      </footer>
    </div>

  );

}

export default HomePage;
