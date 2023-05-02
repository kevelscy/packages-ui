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
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';
const MenubarMenu = MenubarPrimitive.Menu;
const MenubarGroup = MenubarPrimitive.Group;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;
const Menubar = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(MenubarPrimitive.Root, Object.assign({ ref: ref, className: cn('flex h-10 items-center space-x-1 rounded-md border bg-background p-1', className) }, props)));
});
Menubar.displayName = MenubarPrimitive.Root.displayName;
const MenubarTrigger = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(MenubarPrimitive.Trigger, Object.assign({ ref: ref, className: cn('flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground', className) }, props)));
});
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
const MenubarSubTrigger = React.forwardRef((_a, ref) => {
    var { className, inset, children } = _a, props = __rest(_a, ["className", "inset", "children"]);
    return (React.createElement(MenubarPrimitive.SubTrigger, Object.assign({ ref: ref, className: cn('flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground', inset && 'pl-8', className) }, props),
        children,
        React.createElement(ChevronRight, { className: "ml-auto h-4 w-4" })));
});
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
const MenubarSubContent = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(MenubarPrimitive.SubContent, Object.assign({ ref: ref, className: cn('z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1', className) }, props)));
});
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
const MenubarContent = React.forwardRef((_a, ref) => {
    var { className, align = 'start', alignOffset = -4, sideOffset = 8 } = _a, props = __rest(_a, ["className", "align", "alignOffset", "sideOffset"]);
    return (React.createElement(MenubarPrimitive.Portal, null,
        React.createElement(MenubarPrimitive.Content, Object.assign({ ref: ref, align: align, alignOffset: alignOffset, sideOffset: sideOffset, className: cn('z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-top-1', className) }, props))));
});
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
const MenubarItem = React.forwardRef((_a, ref) => {
    var { className, inset } = _a, props = __rest(_a, ["className", "inset"]);
    return (React.createElement(MenubarPrimitive.Item, Object.assign({ ref: ref, className: cn('relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', inset && 'pl-8', className) }, props)));
});
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
const MenubarCheckboxItem = React.forwardRef((_a, ref) => {
    var { className, children, checked } = _a, props = __rest(_a, ["className", "children", "checked"]);
    return (React.createElement(MenubarPrimitive.CheckboxItem, Object.assign({ ref: ref, className: cn('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className), checked: checked }, props),
        React.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" },
            React.createElement(MenubarPrimitive.ItemIndicator, null,
                React.createElement(Check, { className: "h-4 w-4" }))),
        children));
});
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
const MenubarRadioItem = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(MenubarPrimitive.RadioItem, Object.assign({ ref: ref, className: cn('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className) }, props),
        React.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" },
            React.createElement(MenubarPrimitive.ItemIndicator, null,
                React.createElement(Circle, { className: "h-2 w-2 fill-current" }))),
        children));
});
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
const MenubarLabel = React.forwardRef((_a, ref) => {
    var { className, inset } = _a, props = __rest(_a, ["className", "inset"]);
    return (React.createElement(MenubarPrimitive.Label, Object.assign({ ref: ref, className: cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className) }, props)));
});
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
const MenubarSeparator = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(MenubarPrimitive.Separator, Object.assign({ ref: ref, className: cn('-mx-1 my-1 h-px bg-muted', className) }, props)));
});
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;
const MenubarShortcut = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("span", Object.assign({ className: cn('ml-auto text-xs tracking-widest text-muted-foreground', className) }, props)));
};
MenubarShortcut.displayname = 'MenubarShortcut';
export { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarLabel, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarPortal, MenubarSubContent, MenubarSubTrigger, MenubarGroup, MenubarSub, MenubarShortcut };
