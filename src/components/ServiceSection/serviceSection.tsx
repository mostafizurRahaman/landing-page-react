import { serviceCardProps } from "../../types/type";
import ServiceCard from "../serviceCard/ServiceCard";
import { SiGotomeeting } from "react-icons/si";
const ServiceSection = () => {
   const services: serviceCardProps[] = [
      {
         title: "Fast and Reliable ",
         description:
            "Experience lightning-fast and unwavering reliability with our Domain Hosting Service. Your website deserves nothing but the best, and our high-performance",
      },
      {
         title: "International Domain Hosting  ",
         description:
            "Unlock the global potential of your website with our International Domain Hosting service. Reach audiences around the world seamlessly and efficiently,  ",
      },
      {
         title: "VPS Hosting for Domains",
         description:
            "Elevate your online presence with VPS Hosting for Domains. Our Virtual Private Servers offer the perfect balance of power, flexibility, and control. ",
      },
   ];
   return (
      <div
         id="service"
         className="grid grid-col-1   md:grid-cols-3 gap-5 w-[90%] md:-my-14 mx-auto md:pt-0 pb-10 pt-10 "
      >
         {services.map((i, idx) => (
            <ServiceCard
               idx={idx}
               key={idx}
               title={i.title}
               description={i.description}
               icon={
                  <SiGotomeeting
                     className=" text-white "
                     size={40}
                  ></SiGotomeeting>
               }
            ></ServiceCard>
         ))}
      </div>
   );
};

export default ServiceSection;
