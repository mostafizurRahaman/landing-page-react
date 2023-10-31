import { MouseEvent } from "react";

interface ButtonProps {
   text: string;
   containerStyles?: string;
   action?: (e: MouseEvent<HTMLButtonElement>) => void;
   disabled?: boolean;
}

export type { ButtonProps };
