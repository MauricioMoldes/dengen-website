import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component

function TeamPage() {

  const teamMembers = [
    {
      name: "Frederik Otzen Bagger",
      role: "Project Lead",
      bio: "Dr. Jane Doe is an experienced bioinformatician specializing in genomic data analysis. She leads the DenGen project, overseeing the research and ensuring the accuracy of the dataset.",
      image: "/team/.jpg",
    },
    {
      name: "Christian Baudet",
      role: "Senior Bioinformatician",
      bio: "Christian Baudet brings expertise in computational biology and genetic variant interpretation. He works on the pipelines and quality control processes for the DenGen database.",
      image: "/team/.jpg",
    },
    {
      name: "Luca Robinson",
      role: "Data Scientist",
      bio: "Luca Robinson is responsible for analyzing large-scale genomic datasets and developing machine learning models to interpret the DenGen data.",
      image: "/team/.jpg",
    },
    {
      name: "Andreas Jespersen",
      role: "",
      bio: "Bob Lee focuses on the development of the DenGen website and its various features, ensuring seamless user experience and performance.",
      image: "https://example.com/bob-lee.jpg",
    },    
    {
      name: "Mauricio Moldes",
      role: "Senior Software Engineer",
      bio: "TODO Emily White contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "/team/.jpg",
    },
    {
      name: "Gül Sude Demircan",
      role: "Genomics Researcher",
      bio: "TODO Emily White contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "/team/.jpg",
    },
    {
      name: "Xin Sun",
      role: "Genomics Researcher",
      bio: "TODO Emily White contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "/team/.jpg",
    },
    {
      name: "Filipe Garrett Vieira",
      role: "Genomics Researcher",
      bio: "TODO Emily White contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "/team/.jpg",
    },
    {
      name: "Tobias Overlund Stannius",
      role: "Genomics Researcher",
      bio: "TODO Emily White contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "/team/.jpg",
    },
    {
      name: "Javiera Laing Carmona",
      role: "Genomics Researcher",
      bio: "TODO Emily White contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "/team/.jpg",
    },

    
  ];

  return (
    <Layout>
     <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Meet the DenGen Team</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#003865]">{member.name}</h3>
            <p className="text-xl text-gray-500 mb-2">{member.role}</p>
            <p className="text-center text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
}
export default TeamPage;



