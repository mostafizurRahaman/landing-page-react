const SectionHeading = ({ text }: { text: string }) => {
   return (
      <h3 className="text-3xl font-bold text-center  underline uppercase text-primary my-10 ">
         {text}
      </h3>
   );
};

export default SectionHeading;
