import { FaStar } from "react-icons/fa";
import { TestimonialProps } from "../../types/type";

const TestimonialCard = ({
   testimonial,
}: {
   testimonial: TestimonialProps;
}) => {
   return (
      <article className={`bg-info p-5  bg-primary text-white rounded-2xl`}>
         <div className="flex items-center gap-3 ">
            <div className=" w-20 h-20 bg-gradient-to-l from-secondary rounded-full  flex items-center justify-center to-blue-500">
               <img
                  className="w-[74 px] h-[74px] rounded-full bg-white "
                  src={testimonial.image}
               />
            </div>
            <div>
               <h4 className="text-xl capitalize">{testimonial.name}</h4>
               <p className="text-lg text-white font-medium mt-[-8px]">
                  @{testimonial.userName}
               </p>
               <p className="flex items-center gap-1  ">
                  {testimonial.reviews &&
                     [...Array(testimonial.reviews).keys()].map(
                        (i: number, idx: number) => (
                           <FaStar
                              key={idx}
                              className="text-orange-600"
                           ></FaStar>
                        )
                     )}
                  {testimonial.reviews &&
                     [...Array(5 - testimonial.reviews).keys()].map(
                        (i: number, idx: number) => <FaStar key={idx}></FaStar>
                     )}
               </p>
            </div>
         </div>
         <p className="text-sm ps-24 ">
            {testimonial.message.slice(0, 100)}...
         </p>
      </article>
   );
};

export default TestimonialCard;
