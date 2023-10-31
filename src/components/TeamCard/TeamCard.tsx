import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { memberProps } from "../../types/type";

const TeamCard = ({ member }: { member: memberProps }) => {
   const { name, designation, image, facebook, twitter, linkedin, instagram } =
      member;
   return (
      <div className="bg-white  p-2 rounded-lg shadow-[5px_5px_5px_5px_#ddd] relative group ">
         <img className="h-[250px] w-full " src={image} alt="" />
         <div>
            <h3 className="text-base font-bold uppercase text-center text-primary">
               {name}
            </h3>
            <p className="text-base uppercase text-center font-medium">
               {designation}
            </p>
         </div>
         <div className="list-none text-black-500  gap-2 flex-col  items-center justify-center absolute bottom-16  left-4 duration-500  group-hover:flex hidden ">
            <li>
               <a
                  className="hover:text-red-500 duration-500  transition-all"
                  href={facebook}
               >
                  <FaFacebook size={20}></FaFacebook>
               </a>
            </li>
            <li>
               <a
                  className="hover:text-red-500 duration-500  transition-all"
                  href={twitter}
               >
                  <FaTwitter size={20}></FaTwitter>
               </a>
            </li>
            <li>
               <a
                  className="hover:text-red-500 duration-500  transition-all"
                  href={instagram}
               >
                  <FaInstagram size={20}></FaInstagram>
               </a>
            </li>
            <li>
               <a
                  className="hover:text-red-500 duration-500  transition-all"
                  href={linkedin}
               >
                  <FaLinkedin size={20}></FaLinkedin>
               </a>
            </li>
         </div>
      </div>
   );
};

export default TeamCard;
