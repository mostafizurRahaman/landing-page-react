import { Banner, ServiceSection } from "../../components";
import Aboutus from "../../components/Aboutus/Aboutus";
import OurTeamSection from "../../components/OurTeamSection/OurTeamSection";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <ServiceSection></ServiceSection>
         <Aboutus></Aboutus>
         <OurTeamSection></OurTeamSection>
      </div>
   );
};

export default Home;
