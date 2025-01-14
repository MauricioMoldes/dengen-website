import { useState } from 'react';

const Features = () => {
  return (
    <div className="container mx-auto py-8">
    {/* Hero Section */}
    <div className="text-center py-12 bg-[#5e9cc3] text-white rounded-lg shadow-md mb-8">
      <h1 className="text-5xl font-bold mb-4">Welcome to DenGen</h1>
      <p className="text-lg mb-6">
        The Danish Genomic Database: Unlocking the potential of genomic data for research and medicine.
      </p>
      <a
        href="cohort-statistics"
        className="bg-white text-[#5e9cc3] py-2 px-6 rounded hover:bg-gray-200 transition font-semibold"
      >
        Discover More
      </a>
    </div>

    {/* Feature Highlights Section */}
    <div id="features" className="grid md:grid-cols-3 gap-6">
      {/* Genome Browser */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <img
          src="/images/genome-browser-icon.png"
          alt="Genome Browser"
          className="mx-auto h-20 mb-4"
        />
        <h2 className="text-2xl font-bold text-[#003865] mb-2">Genome Browser</h2>
        <p className="text-gray-600 mb-4">
          Visualize and explore genomic data with an intuitive browser.
        </p>
        <a
          href="/genome-browser"
          className="bg-[#003865] text-white py-2 px-4 rounded hover:bg-[#005a99] transition"
        >
          Explore Now
        </a>
      </div>

      {/* Beacon */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <img
          src="/images/beacon-icon.png"
          alt="Beacon"
          className="mx-auto h-20 mb-4"
        />
        <h2 className="text-2xl font-bold text-[#003865] mb-2">Beacon</h2>
        <p className="text-gray-600 mb-4">
          Query genomic data securely with the GA4GH Beacon protocol.
        </p>
        <a
          href="/beacon"
          className="bg-[#003865] text-white py-2 px-4 rounded hover:bg-[#005a99] transition"
        >
          Learn More
        </a>
      </div>

      {/* Data Quality Portal */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <img
          src="/images/data-quality-icon.png"
          alt="Data Quality"
          className="mx-auto h-20 mb-4"
        />
        <h2 className="text-2xl font-bold text-[#003865] mb-2">Data Quality Portal</h2>
        <p className="text-gray-600 mb-4">
          Ensure high-quality genomic data for reliable research.
        </p>
        <a
          href="/landing"
          className="bg-[#003865] text-white py-2 px-4 rounded hover:bg-[#005a99] transition"
        >
          Access Portal
        </a>
      </div>
    </div>

    {/* Call to Action 
    <div className="text-center mt-12">
      <h2 className="text-3xl font-bold text-[#003865] mb-4">Start Exploring DenGen</h2>
      <p className="text-gray-600 mb-6">
        Discover tools and resources designed to enhance genomic research and clinical applications.
      </p>
      <a
        href="/about"
        className="bg-[#003865] text-white py-3 px-6 rounded hover:bg-[#005a99] transition font-semibold"
      >
        Get Started
      </a>
    </div>
    */}
  </div>
  );
};


export default Features;

