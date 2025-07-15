import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component

function TeamPage() {

  const teamMembers = [
    {
      name: "Frederik Otzen Bagger",
      role: "Project Lead",
      bio: "",
      image: `Frederik_Bagger.jpg`
    },
    {
      name: "Christian Baudet",
      role: "Senior Bioinformatician",
      bio: "",
      image: `Christian_Baudet.jpg`
    },
    {
      name: "Luca Robinson",
      role: "Genomics Researcher",
      bio: "",
      image: `Luca_Robsinson.jpg`
    },
    {
      name: "Andreas Jespersen",
      role: "Genomics Researcher",
      bio: "",
      image: `andreas_jesperson.jpg`
    },    
    {
      name: "Mauricio Moldes",
      role: "Senior Software Engineer",
      bio: "",
      image: `mauricio_moldes.jpg`
    },
    {
      name: "Gül Sude Demircan",
      role: "Genomics Researcher",
      bio: "",
      image: `gul_sude.jpg`
    },
    {
      name: "Xin Sun",
      role: "Senior Software Engineer",
      bio: "",
      image: `xin_sun.jpg`
    },
    {
      name: "Miyako Henriksen",
      role: "Genomics Researcher",
      bio: "",
      image: `Miyako_Henriksen.jpg`
    },    
    {
      name: "Filipe Garrett Vieira",
      role: "Genomics Researcher",
      bio: "",
      image: `Filipe_Vieira.jpg`
    },
    {
      name: "Tobias Stannius",
      role: "Genomics Researcher",
      bio: "",
      image: `Tobas_Stannius.jpg`
    },
    {
      name: "Javiera Laing Carmona",
      role: "Genomics Researcher",
      bio: "",
      image: `Javiera_Carmona.jpg`
    },
    {
      name: "Rasmus Lykke Marvig",
      role: "Genomics Researcher",
      bio: "",
      image: `Rasmus_Marvig.jpg`
    }

    

    
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



