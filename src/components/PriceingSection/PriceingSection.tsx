import { PriceCard, SectionHeading } from "..";

const PriceingSection = () => {
   return (
      <div className="py-14">
         <SectionHeading text="Our Price & Packages"></SectionHeading>
         <div className="grid grid-cols-3 gap-10 md:px-10 px-6 rounded-md">
            <PriceCard></PriceCard>
            <PriceCard></PriceCard>
            <PriceCard></PriceCard>
         </div>
      </div>
   );
};

export default PriceingSection;
