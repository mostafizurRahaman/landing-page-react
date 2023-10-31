import { SectionHeading } from "..";
import { memberProps } from "../../types/type";
import TeamCard from "../TeamCard/TeamCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {
   Pagination,
   Autoplay,
   Navigation,
   EffectCoverflow,
} from "swiper/modules";
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
         <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            breakpoints={{
               640: {
                  slidesPerView: 1,
               },
               768: {
                  slidesPerView: 2,
               },
               1024: {
                  slidesPerView: 3,
               },
            }}
            coverflowEffect={{
               rotate: 45,
               stretch: 0,
               depth: 100,
               modifier: 1,
               slideShadows: true,
            }}
            pagination={true}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full"
         >
            {team.map((member: memberProps, idx: number) => (
               <SwiperSlide key={idx}>
                  <TeamCard member={member}></TeamCard>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default OurTeamSection;
