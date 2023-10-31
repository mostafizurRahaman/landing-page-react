import { Button } from "..";
import image from "../../assets/bannerImage.png";
import styles from "./banner.module.css";
const Banner = () => {
   return (
      <div
         className={`min-h-screen text-white flex items-center justify-center flex-col md:flex-row px-6 md:px-10 ${styles.bg} pt-7  `}
      >
         <div
            className="flex items-center md:items-start flex-col gap-5 w-full md:w-1/2 "
            data-aos="fade-right"
         >
            <h3 className=" text-3xl font-semibold capitalize  ">
               buy and sell
            </h3>
            <h1 className=" text-5xl capitalize md:text-start text-center">
               Your Domain & Hosting <br /> at best price
            </h1>
            <Button
               text="get started"
               containerStyles="btn capitalize font-bold over:scale-95 hover:tracking-widest"
            ></Button>
         </div>
         <div
            className=" w-full md:w-1/2  flex items-center justify-center"
            data-aos="fade-left"
         >
            <img
               src={image}
               className=" w-3/5   md:w-4/5 "
               alt="nitex_hosting"
            />
         </div>
      </div>
   );
};

export default Banner;
