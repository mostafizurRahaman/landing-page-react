import { serviceCardProps } from "../../types/type";

const ServiceCard = ({ icon, title, description }: serviceCardProps) => {
   return (
      <div className="p-5  rounded-lg shadow-[5px_5px_-10px_-10px_#000000] border-[1px] border-primary   flex items-center justify-center bg-secondary flex-col gap-3 ">
         {icon && icon}
         <h3 className="text-xl text-center font-semibold uppercase text-primary">
            {title}
         </h3>
         <p className="text-center">{description}</p>
      </div>
   );
};

export default ServiceCard;
