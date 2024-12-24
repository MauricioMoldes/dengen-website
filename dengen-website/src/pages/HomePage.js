import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Logos from '../components/Logos';

function HomePage() {
  return (
    
     <div className="px-32">
     
      <Navbar />
     	  
      <Features />
  
      <Footer />

      <Logos />

    </div>

  );

}

export default HomePage;
