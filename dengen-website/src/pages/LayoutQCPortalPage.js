import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logos from '../components/Logos';

function Layout({ children }) {
  return (

     <div className="px-32">

      <Navbar />

      {/* Main Content */}
      <main className="flex-grow p-6">{children}</main>

      <Footer />

      <Logos />

    </div>

  );

}

export default Layout;

