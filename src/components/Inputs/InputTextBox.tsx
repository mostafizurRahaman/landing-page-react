import { InputTextBoxProps } from "../../types/type";
import ErrorMessage from "../ErrorMessage";

const InputTextBox = ({
   label,
   rows,
   cols,
   name,
   placeholder,
   onChange,
   initialValue,
   error,
   styles,
}: InputTextBoxProps) => {
   return (
      <div className="w-full flex flex-col gap-1">
         <div className="flex-col  flex  justify-start w-full gap-1 ">
            <label
               className=" text-white font-semibold text-sm capitalize"
               htmlFor={name}
            >
               {label}
            </label>
            <textarea
               name={name}
               id={name}
               cols={cols}
               rows={rows}
               className={`text-sm placeholder:text-gray-700 border-[1.5px]  border-gray-800 outline-none w-full h-full placeholder:capitalize   py-2 pl-1 gap-2  rounded-md  ${
                  styles && styles
               }`}
               placeholder={placeholder}
               onChange={onChange}
               value={initialValue}
            ></textarea>
         </div>
         {error && <ErrorMessage message={error}></ErrorMessage>}
      </div>
   );
};

export default InputTextBox;
