import { Button } from "..";
import image from "../../assets/text.jpg";
import { BsFillCalendarFill } from "react-icons/bs";
const Blog = () => {
   return (
      <div className="text-black bg-white rounded-md shadow-[2px_2px_2px_2px_#ddd]">
         <img
            className="w-full h-[250px] mb-10 rounded-t-lg"
            src={image}
            alt=""
         />
         <div className="px-5 pb-5">
            <div className=" flex items-center justify-between  mb-10 w-full">
               <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full  border-2 border-green-500">
                     <img
                        src="https://lh3.googleusercontent.com/ogw/AKPQZvxlwE3TWWT6HsJOc62LYSWJDXLR1nrbO036PxcQ=s64-c-mo"
                        alt=""
                        className="w-full h-full rounded-full"
                     />
                  </div>

                  <h3 className="text-sm ">Mostafizur rahaman</h3>
               </div>
               <div className="flex items-center gap-2 text-sm">
                  <BsFillCalendarFill size={20}></BsFillCalendarFill>
                  <p>{new Date().toDateString()}</p>
               </div>
            </div>
            <div>
               <h2 className="text-xl font-bold capitalize  mb-3">
                  Hosting title start from here
               </h2>
               <p className="text-sm text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veniam velit eos quaerat ab in iste consequuntur dicta illo
                  maxime odit, eum harum voluptatibus nostrum dolores cumque
                  voluptate commodi libero pariatur ad quisquam corporis
                  accusamus mollitia voluptates ipsam! Ratione perspiciatis quis
                  atque impedit vel iste fugit maxime adipisci, laudantium sequi
               </p>
            </div>
            <div className="flex items-center justify-center">
               <Button
                  text="get started"
                  containerStyles="px-10 py-2 rounded-full border-2 border-white 
            bg-gradient-to-r from-primary via-blue-500 to-purple-600 mx-auto mt-7 inline-block text-white capitalize hover:scale-95
         "
               ></Button>
            </div>
         </div>
      </div>
   );
};

export default Blog;
