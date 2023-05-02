import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
declare const badgeVariants: (props?: {
    variant?: "default" | "destructive" | "outline" | "secondary";
} & import("class-variance-authority/dist/types").ClassProp) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): JSX.Element;
export { Badge, badgeVariants };
