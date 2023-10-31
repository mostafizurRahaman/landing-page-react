import {
   Banner,
   BlogSection,
   ContactUs,
   ServiceSection,
   TestimonialSection,
} from "../../components";
import Aboutus from "../../components/Aboutus/Aboutus";
import OurTeamSection from "../../components/OurTeamSection/OurTeamSection";
import PriceingSection from "../../components/PriceingSection/PriceingSection";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <ServiceSection></ServiceSection>
         <Aboutus></Aboutus>
         <OurTeamSection></OurTeamSection>
         <PriceingSection></PriceingSection>
         <TestimonialSection></TestimonialSection>
         <BlogSection></BlogSection>
         <ContactUs></ContactUs>
      </div>
   );
};

export default Home;
