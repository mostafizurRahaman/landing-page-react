import { PriceCard, SectionHeading } from "..";

const PriceingSection = () => {
   return (
      <div  className="py-14">
         <SectionHeading text="Our Price & Packages"></SectionHeading>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10  px-10 rounded-md">
            <PriceCard></PriceCard>
            <PriceCard></PriceCard>
            <PriceCard></PriceCard>
         </div>
      </div>
   );
};

export default PriceingSection;
