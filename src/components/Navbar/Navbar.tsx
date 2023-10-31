import { useState } from "react";

import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Navbar = () => {
   const [open, setOpen] = useState<boolean>(false);
   return (
      <div
         className={`flex  flex-wrap items-center bg-primary justify-between h-24 md:h-20 px-5 md:px-10     w-full  top-0 z-[999]  shadow-2xl relative  `}
      >
         <div className="">
            <div className="text-white font-bold uppercase text-2xl flex gap-3 items-center justify-starts ">
               <h2>Netex</h2>
            </div>
         </div>
         <nav
            className={`w-1/2  md:w-auto flex md:flex-row flex-col  items-center  gap-5 text-secondary h-screen md:h-auto font-bold md:bg-transparent bg-primary absolute  md:static top-20 duration-500 transition-all  ease-in-out ${
               open ? " left-0" : " top-20 left-[-999px]"
            }`}
         >
            <li className="text-sm capitalize list-none ">Dashboard</li>
            <li className="text-sm capitalize list-none ">Dashboard</li>
            <li className="text-sm capitalize list-none ">Dashboard</li>
            <li className="text-sm capitalize list-none ">Dashboard</li>
            <li className="text-sm capitalize list-none ">Dashboard</li>
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
