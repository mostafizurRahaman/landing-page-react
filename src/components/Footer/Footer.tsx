const Footer = () => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3 px-6 py-10  md:px-10  bg-black text-white">
         <div>
            <h1 className="text-3xl font-bold uppercase">Nitex Hosting</h1>
         </div>
         <div className="">
            <h2 className="text-xl font-bold capitalize mb-5">
               Information About us{" "}
            </h2>
            <ul className="flex flex-col gap-1 text-white tracking-widest text-base capitalize underline pb-1">
               <li className="hover:text-blue-500 duration-300">
                  <a href="#home">home </a>
               </li>
               <li className="hover:text-blue-500 duration-300">
                  <a href="#blog">blogs </a>
               </li>
               <li className="hover:text-blue-500 duration-300">
                  <a href="#service">services </a>
               </li>
               <li className="hover:text-blue-500 duration-300">
                  <a href="#testimonial">testimonials </a>
               </li>
            </ul>
         </div>
         <div className="">
            <h2 className="text-xl font-bold capitalize mb-5">
               Privacy & policy
            </h2>
            <ul className="flex flex-col gap-1 text-white tracking-widest text-base capitalize underline pb-1">
               <li className="hover:text-blue-500 duration-300">
                  <a href="#">terms & service </a>
               </li>
               <li className="hover:text-blue-500 duration-300">
                  <a href="#">Payment conditions </a>
               </li>
               <li className="hover:text-blue-500 duration-300">
                  <a href="#">our policies </a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Footer;
