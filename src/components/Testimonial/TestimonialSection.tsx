import { SectionHeading } from "..";
import { TestimonialProps } from "../../types/type";
import TestimonialCard from "./TestimonialCad";

const TestimonialSection = () => {
   const testimonials: TestimonialProps[] = [
      {
         name: "Mostafizur rahaman",
         userName: "mostafiz",
         message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officia necessitatibus natus quae voluptate aspernatur magnam eum dolores laboriosam earum vel beatae, impedit tenetur ipsam voluptates fuga libero ducimus quasi aliquid hic harum accusantium? Quos cumque nobis, ",
         reviews: 5,
         image: "https://lh3.googleusercontent.com/ogw/AKPQZvxlwE3TWWT6HsJOc62LYSWJDXLR1nrbO036PxcQ=s64-c-mo",
      },
      {
         name: "Mostafizur rahaman",
         userName: "mostafiz",
         message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officia necessitatibus natus quae voluptate aspernatur magnam eum dolores laboriosam earum vel beatae, impedit tenetur ipsam voluptates fuga libero ducimus quasi aliquid hic harum accusantium? Quos cumque nobis, ",
         reviews: 2,
         image: "https://lh3.googleusercontent.com/ogw/AKPQZvxlwE3TWWT6HsJOc62LYSWJDXLR1nrbO036PxcQ=s64-c-mo",
      },
      {
         name: "Mostafizur rahaman",
         userName: "mostafiz",
         message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officia necessitatibus natus quae voluptate aspernatur magnam eum dolores laboriosam earum vel beatae, impedit tenetur ipsam voluptates fuga libero ducimus quasi aliquid hic harum accusantium? Quos cumque nobis, ",
         reviews: 1,
         image: "https://lh3.googleusercontent.com/ogw/AKPQZvxlwE3TWWT6HsJOc62LYSWJDXLR1nrbO036PxcQ=s64-c-mo",
      },
   ];
   return (
      <section id="review" className="md:px-10 px-5 py-10">
         <SectionHeading text="Customer Reviews"></SectionHeading>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-5  ">
            {testimonials.map((i: TestimonialProps, idx: number) => (
               <TestimonialCard key={idx} testimonial={i}></TestimonialCard>
            ))}
         </div>
      </section>
   );
};

export default TestimonialSection;
