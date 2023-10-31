import { serviceCardProps } from "../../types/type";

const ServiceCard = ({ icon, title, description, idx }: serviceCardProps) => {
   return (
      <div
         data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
         className="p-5  rounded-lg shadow-[5px_5px_-10px_-10px_#000000] border-[1px] border-primary   flex items-center justify-center bg-secondary flex-col gap-3 "
      >
         <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
            {icon && icon}
         </div>
         <h3 className="text-lg text-center font-semibold uppercase text-primary">
            {title}
         </h3>
         <p className="text-center">{description}</p>
      </div>
   );
};

export default ServiceCard;
