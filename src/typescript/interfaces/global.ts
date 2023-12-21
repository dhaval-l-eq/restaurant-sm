import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type Size = 'sm' | 'md' | 'lg' | 'block';

export interface CustomClassProps {
   customClass?: string;
   size?: Size;
}

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
   name: string;
   icon?: JSX.Element;
}

export type IconTypes = 'user' | 'phone' | 'email' | 'password';

export interface IconProps {
   name: IconTypes;
}

// following interface will make sure that if isLink is true, linkPath must be provided
interface LinkPresent extends CustomClassProps {
   isLink?: true;
   linkPath: string;
}

interface LinkAbsent extends CustomClassProps {
   isLink?: false | undefined;
}

export type ButtonClassProps = LinkPresent | LinkAbsent;
