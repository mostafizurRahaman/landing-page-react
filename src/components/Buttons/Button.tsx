import { ButtonProps } from "../../types/type";

const Button = ({ text, containerStyles, action, disabled }: ButtonProps) => {
   return (
      <button
         className={containerStyles}
         onClick={() => action}
         disabled={disabled && disabled}
      >
         {text}
      </button>
   );
};

export default Button;
