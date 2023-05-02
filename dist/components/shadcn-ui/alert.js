var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
const alertVariants = cva('relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11', {
    variants: {
        variant: {
            default: 'bg-background text-foreground',
            destructive: 'text-destructive border-destructive/50 dark:border-destructive [&>svg]:text-destructive text-destructive'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
const Alert = React.forwardRef((_a, ref) => {
    var { className, variant } = _a, props = __rest(_a, ["className", "variant"]);
    return (React.createElement("div", Object.assign({ ref: ref, role: "alert", className: cn(alertVariants({ variant }), className) }, props)));
});
Alert.displayName = 'Alert';
const AlertTitle = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("h5", Object.assign({ ref: ref, className: cn('mb-1 font-medium leading-none tracking-tight', className) }, props)));
});
AlertTitle.displayName = 'AlertTitle';
const AlertDescription = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("div", Object.assign({ ref: ref, className: cn('text-sm [&_p]:leading-relaxed', className) }, props)));
});
AlertDescription.displayName = 'AlertDescription';
export { Alert, AlertTitle, AlertDescription };
