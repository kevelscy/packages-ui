import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
declare const buttonVariants: (props?: {
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
    size?: "default" | "sm" | "lg";
} & import("class-variance-authority/dist/types").ClassProp) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
