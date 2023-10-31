import { Button, InputText, InputTextBox, SectionHeading } from "..";

const ContactUs = () => {
   return (
      <section className="py-10  px-6 md:px-10 bg-primary mt-16 mb-0">
         <SectionHeading
            text="Contact Us"
            textStyles="text-white"
         ></SectionHeading>
         <form className="flex items-center flex-col gap-3">
            <InputText
               type="text"
               name="name"
               placeholder="Enter your full name"
               label="Full name "
            ></InputText>
            <InputText
               type="email"
               name="email"
               placeholder="Enter your email"
               label="Your email "
            ></InputText>
            <InputText
               type="text"
               name="Your Phone"
               placeholder="Enter your phone"
               label="Your phone"
            ></InputText>
            <InputTextBox
               label="Your Message"
               rows={7}
               cols={10}
               name="message"
               placeholder="write your message"
            ></InputTextBox>
            <Button
               text="get started"
               containerStyles="px-10 py-2 rounded-full border-2 border-white 
            bg-gradient-to-r from-primary via-blue-500 to-purple-600 mx-auto mt-7 inline-block text-white capitalize hover:scale-95
         "
            ></Button>
         </form>
      </section>
   );
};

export default ContactUs;
