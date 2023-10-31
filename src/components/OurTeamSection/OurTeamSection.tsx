import { SectionHeading } from "..";
import { memberProps } from "../../types/type";
import TeamCard from "../TeamCard/TeamCard";

const OurTeamSection = () => {
   const team: memberProps[] = [
      {
         name: "Rayhan Ahmed",
         designation: "CEO",
         image: "https://i.ibb.co/p15ghd7/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg",
         facebook: "https://www.facebook.com/mostafiz04011",
         linkedin: "https://www.linkedin.com/in/mostafiz0401/",
         twitter: "https://twitter.com/mostafiz0401",
         instagram: "https://www.instagram.com/mostafizur0401/",
      },
      {
         name: "Rakib Hossain",
         designation: "Managing Director",
         image: "https://i.ibb.co/p15ghd7/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg",
         facebook: "https://www.facebook.com/mostafiz04011",
         linkedin: "https://www.linkedin.com/in/mostafiz0401/",
         twitter: "https://twitter.com/mostafiz0401",
         instagram: "https://www.instagram.com/mostafizur0401/",
      },
      {
         name: "Md. Morsed ALom",
         designation: "Creative Director",
         image: "https://i.ibb.co/p15ghd7/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg",
         facebook: "https://www.facebook.com/mostafiz04011",
         linkedin: "https://www.linkedin.com/in/mostafiz0401/",
         twitter: "https://twitter.com/mostafiz0401",
         instagram: "https://www.instagram.com/mostafizur0401/",
      },
      {
         name: "Amir Chowdhury",
         designation: "Hiring Manager",
         image: "https://i.ibb.co/p15ghd7/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg",
         facebook: "https://www.facebook.com/mostafiz04011",
         linkedin: "https://www.linkedin.com/in/mostafiz0401/",
         twitter: "https://twitter.com/mostafiz0401",
         instagram: "https://www.instagram.com/mostafizur0401/",
      },
      {
         name: "Mostafizur rahaman",
         designation: "Front End  developer",
         image: "https://i.ibb.co/p15ghd7/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg",
         facebook: "https://www.facebook.com/mostafiz04011",
         linkedin: "https://www.linkedin.com/in/mostafiz0401/",
         twitter: "https://twitter.com/mostafiz0401",
         instagram: "https://www.instagram.com/mostafizur0401/",
      },
      {
         name: "Nur mohammad",
         designation: "Backend developer",
         image: "https://i.ibb.co/p15ghd7/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg",
         facebook: "https://www.facebook.com/mostafiz04011",
         linkedin: "https://www.linkedin.com/in/mostafiz0401/",
         twitter: "https://twitter.com/mostafiz0401",
         instagram: "https://www.instagram.com/mostafizur0401/",
      },
   ];
   return (
      <div>
         <SectionHeading text="our team"></SectionHeading>
         <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-10">
            {team.map((member: memberProps, idx: number) => (
               <TeamCard key={idx} member={member}></TeamCard>
            ))}
         </div>
      </div>
   );
};

export default OurTeamSection;
