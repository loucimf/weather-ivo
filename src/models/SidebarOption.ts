import type { SystemIcon } from "@src/design-system/SystemIcon";
import type { ComponentProps, JSX } from "react";

export interface ISidebarOption {
    id: string;
    icon: ComponentProps<typeof SystemIcon>["type"]
    label: string;
    content: JSX.Element;
    selected?: boolean; 
}