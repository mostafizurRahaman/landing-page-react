import { MouseEvent } from "react";

type childrenType = React.ReactNode;
interface ButtonProps {
   text: string;
   containerStyles?: string;
   action?: (e: MouseEvent<HTMLButtonElement>) => void;
   disabled?: boolean;
}

interface serviceCardProps {
   icon?: childrenType;
   title: string;
   description: string;
}

export type { ButtonProps, serviceCardProps, childrenType };
