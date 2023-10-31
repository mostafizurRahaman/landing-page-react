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

export type {
   ButtonProps,
   serviceCardProps,
   childrenType,
   memberProps,
   TestimonialProps,
};
