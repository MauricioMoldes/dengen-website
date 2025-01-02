import React, { useState } from "react";

const DenGenStats = () => {

// State to keep track of the current image index
const [currentImageIndex, setCurrentImageIndex] = useState(0);

// List of image paths
const images = [

  {
    src: "dengen.png",
    title: "Age and Gender Distribution",
  },
  {
    src: "dengen_2211_merged.png",
    title: "Ancestry Distribution",
  },
  {
    src: "dengen_2211_merged_rotx_90.png",
    title: "Ancestry Distribution",
  },
  {
    src: "1000g_dengen_2211_merged.png",
    title: "Ancestry Distribution with 1000 Genomes Phase3",
  }

];

// Function to go to the previous image
const prevImage = () => {
  setCurrentImageIndex((prevIndex) =>
    prevIndex === 0 ? images.length - 1 : prevIndex - 1
  );
};

// Function to go to the next image
const nextImage = () => {
  setCurrentImageIndex((prevIndex) =>
    prevIndex === images.length - 1 ? 0 : prevIndex + 1
  );
};


  return (
    <section className="bg-blue-100 py-12 text-center">
    <h2 className="text-3xl font-bold text-gray-800">DenGen In Numbers</h2>
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
      {/* Number of Participants */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700">Participants</h3>
        <p className="text-3xl font-bold text-blue-600">2,211</p>
      </div>

       {/* Number of Variants Detected */}
       <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700">Average Age</h3>
        <p className="text-3xl font-bold text-blue-600">41.8 years</p>
      </div>

      {/* Number of Variants Detected */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700">Gender Distribution</h3>
        <p className="text-3xl font-bold text-blue-600">47.3% XY</p>
      </div>

      {/* Number of Variants Detected */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700">Variants Detected</h3>
        <p className="text-3xl font-bold text-blue-600">5.8M+</p>
      </div>

      {/* Sequencing Depth */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700">Sequencing Depth</h3>
        <p className="text-3xl font-bold text-blue-600">30x+</p>
      </div>

      {/* Countries Represented */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700">Sequencing Technologies</h3>
        <p className="text-3xl font-bold text-blue-600">Illumina NovaSeq6000</p>
      </div>

     {/* Countries Represented */}
     <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700">Run Technologies</h3>
        <p className="text-3xl font-bold text-blue-600">Illumina DNA PCR-free (tagmentation) kit</p>
      </div>

      {/* Countries Represented */}
     <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700">Sequencing Center</h3>
        <p className="text-3xl font-bold text-blue-600">DGM</p>
      </div>

       {/* Countries Represented */}
     <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700">Variant Calling Reference </h3>
        <p className="text-3xl font-bold text-blue-600">GRCh38</p>
      </div>
      

      {/* Research Collaborators */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700">Research Collaborators</h3>
        <p className="text-3xl font-bold text-blue-600">2 Institutes</p>
      </div>

      {/* Countries Represented */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700">Countries Represented</h3>
        <p className="text-3xl font-bold text-blue-600">1</p>
      </div>      

      </div>

      {/* Age and Gender Distribution Image with Carousel */}
      <div className="mt-12 bg-blue-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">DenGen Statistics</h3>
        {/* Sliding Image Card with One Image at a Time */}
        <div className="bg-white p-6 rounded-lg transform transition-all duration-500">
            {/* Image Title */}
            <p className="mt-4 text-lg font-semibold text-gray-700">{images[currentImageIndex].title}</p>

          <div className="relative">
            {/* Display Image */}
            <img
              src={images[currentImageIndex].src}
              alt={`Age and Gender Distribution ${currentImageIndex + 1}`}
              className="mx-auto rounded-lg shadow-lg w-full max-w-2xl h-auto"
            />
            
            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-900"
            >
              ←
            </button>
            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-900"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default DenGenStats;

