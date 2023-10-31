import { Blog, SectionHeading } from "..";

const BlogSection = () => {
   return (
      <div className="md:px-10 px-6">
         <SectionHeading text="Our Blogs"></SectionHeading>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10  ">
            <Blog></Blog>
            <Blog></Blog>
            <Blog></Blog>
         </div>
      </div>
   );
};

export default BlogSection;
