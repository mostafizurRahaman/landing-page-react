import { useState } from "react";

import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Navbar = () => {
   const [open, setOpen] = useState<boolean>(false);
   return (
      <div
         className={`flex  flex-wrap items-center bg-primary justify-between h-24 md:h-20 px-5 md:px-10     w-full  z-[999]  shadow-2xl  fixed top-0 left-0  `}
      >
         <div className="">
            <div className="text-white font-bold uppercase text-2xl flex gap-3 items-center justify-starts ">
               <h2>
                  <a href="#home">Nitex Hosting</a>
               </h2>
            </div>
         </div>
         <nav
            className={`w-1/2  md:w-auto flex md:flex-row flex-col  items-center  gap-5 text-secondary h-screen md:h-auto font-bold md:bg-transparent bg-primary fixed  md:static top-20 duration-500 transition-all  ease-in-out ${
               open ? " left-0" : " top-20 left-[-999px]"
            }`}
         >
            <li className="text-sm capitalize list-none ">
               <a href="#home">Home</a>
            </li>
            <li className="text-sm capitalize list-none ">
               <a href="#service">service</a>
            </li>
            <li className="text-sm capitalize list-none ">
               <a href="#blog">blog</a>
            </li>
            <li className="text-sm capitalize list-none ">
               <a href="#team">team</a>
            </li>
            <li className="text-sm capitalize list-none ">
               <a href="#review">Testimonials</a>
            </li>
         </nav>
         <div
            onClick={() => setOpen((prev) => !prev)}
            className=" block md:hidden text-white hover:text-red-500 duration-500"
         >
            {open ? (
               <FaBars size={20}></FaBars>
            ) : (
               <AiOutlineCloseCircle size={20}></AiOutlineCloseCircle>
            )}
         </div>
      </div>
   );
};

export default Navbar;
