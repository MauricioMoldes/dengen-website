import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component

function TeamPage() {

  const teamMembers = [
    {
      name: "Frederik Otzen Bagger",
      role: "Project Lead",
      bio: "Frederik Bagger is an experienced bioinformatician specializing in genomic data analysis. She leads the DenGen project, overseeing the research and ensuring the accuracy of the dataset.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3EpwdMA04GdtraUTmWvqFjXlpPOfQ_APVTA&s",
    },
    {
      name: "Christian Baudet",
      role: "Senior Bioinformatician",
      bio: "Christian Baudet brings expertise in computational biology and genetic variant interpretation. He works on the pipelines and quality control processes for the DenGen database.",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQEG2jkTm5o8yA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516532687196?e=2147483647&v=beta&t=BDBG0ZC9beyKMprh2b2fEztKzHMj6iEku1kRV621Juw",
    },
    {
      name: "Luca Robinson",
      role: "Genomics Researcher",
      bio: "Luca Robinson is responsible for analyzing large-scale genomic datasets and developing machine learning models to interpret the DenGen data.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHf0Q-Px14RQw/profile-displayphoto-shrink_200_200/B4DZYPmOG7GwAc-/0/1744018400172?e=1752710400&v=beta&t=kq4Ae_7WUbjyeFEP3HHMGppCFI9ezkZaMWDS5dIOitI",
    },
    {
      name: "Andreas Jespersen",
      role: "Genomics Researcher",
      bio: "Andreas Jespersen focuses on the development of the DenGen website and its various features, ensuring seamless user experience and performance.",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQHW6TyDz841QQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1551367633591?e=1752710400&v=beta&t=4yBQMTckKZP430_-_lZRKKrGk42LvHTEPj2tOQC_Zvo",
    },    
    {
      name: "Mauricio Moldes",
      role: "Senior Software Engineer",
      bio: "Mauricio Moldes contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "https://media.licdn.com/dms/image/v2/C5603AQGBpiN4B1SZyA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517069062586?e=1752710400&v=beta&t=Ju58TDByr9JXBwilL3mP0nEe4ivFj40FYYPgx8BzCXg",
    },
    {
      name: "Gül Sude Demircan",
      role: "Genomics Researcher",
      bio: "Gül Demircan contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQFTdQsf2fLU6Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1577970668713?e=1752710400&v=beta&t=vLKHcLGAIjV0mhBo4C08IJKbnIubE1T5MMwfmmhXKqQ",
    },
    {
      name: "Xin Sun",
      role: "Senior Software Engineer",
      bio: "Xin Sun contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHTZ3BKonV5WQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1678565793476?e=1752710400&v=beta&t=ftM75iVRqLlaGJeIdRtk58-XqaR-Q5H0_JJASIwyKow",
    },
    {
      name: "Miyako Kodama Henriksen",
      role: "Genomics Researcher",
      bio: "Miyako Henriksen contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "https://media.licdn.com/dms/image/v2/C5603AQF0_9h7Z2W1Dg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516487959835?e=1752710400&v=beta&t=UvYBe9AslCjlDXkLwtZadbYT4iNzf6Jx6FoDWnY2jVo",
    },    
    {
      name: "Filipe Garrett Vieira",
      role: "Genomics Researcher",
      bio: "Filipe Garrett Vieira contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "https://researchprofiles.ku.dk/assets/no-portrait-473c6d005990baa1f418d9c668dcd4ec.png",
    },
    {
      name: "Tobias Overlund Stannius",
      role: "Genomics Researcher",
      bio: "Tobias  Stannius contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHCPPgkx1xobA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1673174198227?e=1752710400&v=beta&t=AZHg4oEDFwf9tJfjGiadkNys8nO4HVi2OVXvhqcrKAs",
    },
    {
      name: "Javiera Laing Carmona",
      role: "Genomics Researcher",
      bio: "Javiera Carmona contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQF65uHv1pSz6A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1650738837009?e=1752710400&v=beta&t=vviNojLV8QA6-c_jASTJE4OJcIALp8TXtNqYpJTi2Bg",
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



