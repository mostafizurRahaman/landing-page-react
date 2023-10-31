const SectionHeading = ({
   text,
   textStyles,
}: {
   text: string;
   textStyles?: string;
}) => {
   return (
      <h3
         className={`${textStyles} text-3xl font-bold text-center  underline uppercase text-primary my-10 `}
      >
         {text}
      </h3>
   );
};

export default SectionHeading;
