import { Button } from "..";
import cardImage from "../../assets/server.png";

const PriceCard = () => {
   return (
      <div className="bg-secondary p-5  shadow-[5px_5px_10px_1px_#ddd] rounded-b-lg rounded-full  pt-20  flex flex-col gap-3 items-center">
         <h3 className="text-xl text-center  font-bold uppercase mb-10">
            service name
         </h3>
         <img src={cardImage} alt="" className="w-3/5 mx-auto" />
         <h6 className="text-lg  font-bold text-gray-500 capitalize text-center my-5">
            per month
         </h6>
         <ul className="flex items-center flex-col justify-center gap-2 text-xl text-gray-500 hover:text-primary">
            <li>250GB Bandwidth</li>
            <li>08 Email Account</li>
            <li>Unlimited Database</li>
            <li>10GB Free Disk</li>
            <li>24/7 Support</li>
         </ul>

         <Button
            text="get started"
            containerStyles="px-10 py-2 rounded-full border-2 border-white 
            bg-gradient-to-r from-primary via-blue-500 to-purple-600 mx-auto mt-7 inline-block text-white capitalize hover:scale-95
         "
         ></Button>
      </div>
   );
};

export default PriceCard;
