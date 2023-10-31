import { Button } from "..";
import aboutUs from "../../assets/about-us.png";
const Aboutus = () => {
   return (
      <section className="flex items-center gap-10 md:gap-5 md:flex-row flex-col px-6 md:px-16">
         <div className=" w-full md:w-1/2">
            <img src={aboutUs} alt="" className="w-full h-auto" />
         </div>
         <div className="md:w-1/2 w-full ">
            <h3 className="text-xl capitalize font-bold">about us</h3>
            <div className="flex flex-col gap-2">
               <h3 className="text-3xl font-medium capitalize text-primary">
                  Nitex is the best hosting provider
               </h3>
               <p className="text-lg">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
               </p>
               <p className="text-lg mt-5">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
               </p>
               <Button
                  text="about us"
                  containerStyles="text-lg text-white text-center px-10 capitalize hover:rounded-bl-full hover:rounded-tl-none duration-300 transition-all  py-2 rounded-full   bg-primary rounded-bl-none inline-block mr-auto "
               ></Button>
            </div>
         </div>
      </section>
   );
};

export default Aboutus;
