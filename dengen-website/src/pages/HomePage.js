import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import DenGenStats from '../components/DenGenStats';
import Footer from '../components/Footer';
import Logos from '../components/Logos';

function HomePage() {
  return (
    
     <div className="px-32">
     
      <Navbar />
     	  
      <Features />

      <DenGenStats />
  
      <Footer />

      <Logos />

    </div>

  );

}

export default HomePage;
