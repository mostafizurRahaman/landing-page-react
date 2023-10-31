import { Banner, ServiceSection } from "../../components";
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
      </div>
   );
};

export default Home;
