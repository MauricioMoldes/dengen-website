import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component

function TeamPage() {

  const teamMembers = [
    {
      name: "Frederik Otzen Bagger",
      role: "Project Lead",
      bio: "Dr. Jane Doe is an experienced bioinformatician specializing in genomic data analysis. She leads the DenGen project, overseeing the research and ensuring the accuracy of the dataset.",
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
      role: "Data Scientist",
      bio: "Luca Robinson is responsible for analyzing large-scale genomic datasets and developing machine learning models to interpret the DenGen data.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFfYxl3CP7kvA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1683101154858?e=1743033600&v=beta&t=wvXE4l8pFTDW1_YrX35i4-AI7Kkm_VJ-IjyNHexBO9U",
    },
    {
      name: "Andreas Jespersen",
      role: "",
      bio: "Bob Lee focuses on the development of the DenGen website and its various features, ensuring seamless user experience and performance.",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQHW6TyDz841QQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1551367633591?e=1743033600&v=beta&t=moXVRvMbvCrccbdDpG-vI4vE-668UJNhPHU45sYnmr0",
    },    
    {
      name: "Mauricio Moldes",
      role: "Senior Software Engineer",
      bio: "TODO Emily White contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "https://media.licdn.com/dms/image/v2/C5603AQGBpiN4B1SZyA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517069062135?e=1743033600&v=beta&t=3GgFMQIRAhqi7-zEpgUhE2pQw8TSDnROqG4T0VhDszY",
    },
    {
      name: "Gül Sude Demircan",
      role: "Genomics Researcher",
      bio: "TODO Emily White contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQFTdQsf2fLU6Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1577970668713?e=1743033600&v=beta&t=KqBwecx3iLKxOnwa6QpvduyxK0_Ulpcp5bSrjG5Nubk",
    },
    {
      name: "Xin Sun",
      role: "Genomics Researcher",
      bio: "TODO Emily White contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHTZ3BKonV5WQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1678565793476?e=1743033600&v=beta&t=NRM1-ow5w5Nk6TAfxhw9S9q_FJbkw-ZjqtAnmeG_vM4",
    },
    {
      name: "Miyako Kodama Henriksen",
      role: "Genomics Researcher",
      bio: "TODO Emily White contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "https://media.licdn.com/dms/image/v2/C5603AQF0_9h7Z2W1Dg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516487959835?e=1743033600&v=beta&t=0labwTE1IQSRBUwv3No6DbRPZulmC23oxbvW7Omi2xs",
    },    
    {
      name: "Filipe Garrett Vieira",
      role: "Genomics Researcher",
      bio: "TODO Emily White contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "https://researchprofiles.ku.dk/assets/no-portrait-473c6d005990baa1f418d9c668dcd4ec.png",
    },
    {
      name: "Tobias Overlund Stannius",
      role: "Genomics Researcher",
      bio: "TODO Emily White contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHCPPgkx1xobA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1673174198227?e=1743033600&v=beta&t=eNfVH3FjhKDZlp1-92JGoWNgl5IoLSRo5wy3ux7f_VE",
    },
    {
      name: "Javiera Laing Carmona",
      role: "Genomics Researcher",
      bio: "TODO Emily White contributes to the scientific research aspect of DenGen, focusing on genomics, variant calling, and collaboration with clinical researchers.",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQF65uHv1pSz6A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1650738837009?e=1743033600&v=beta&t=MRcp1u6gBN99S-6KoBPfvNGgENdTc23RRaf5W69Ch58",
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



