import { MouseEvent, ChangeEvent } from "react";

type ChangeElementType = (e: ChangeEvent<HTMLInputElement>) => void;
type ChangeElementTextBox = (e: ChangeEvent<HTMLTextAreaElement>) => void;
type childrenType = React.ReactNode;
interface ButtonProps {
   text: string;
   containerStyles?: string;
   action?: (e: MouseEvent<HTMLButtonElement>) => void;
   disabled?: boolean;
}

interface serviceCardProps {
   idx: number;
   icon?: childrenType;
   title: string;
   description: string;
}

interface memberProps {
   name: string;
   designation: string;
   image: string;
   facebook: string;
   linkedin: string;
   twitter: string;
   instagram: string;
}

interface TestimonialProps {
   _id?: string;
   name: string;
   userName: string;
   reviews: number;
   message: string;
   image: string;
}

interface InputTextProps {
   type: string;
   name: string;
   onChange?: ChangeElementType;
   placeholder: string;
   error?: string;
   label: string;
   initialValue?: string;
   styles?: string;
}

interface InputTextBoxProps {
   label: string;
   rows: number;
   cols: number;
   name: string;
   placeholder: string;
   onChange?: ChangeElementTextBox;
   initialValue?: string;
   error?: string;
   styles?: string;
}
export type {
   ButtonProps,
   serviceCardProps,
   childrenType,
   memberProps,
   TestimonialProps,
   InputTextProps,
   InputTextBoxProps,
};
