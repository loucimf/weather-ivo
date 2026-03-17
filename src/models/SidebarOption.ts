import type { SystemIconProps } from "@src/design-system/SystemIcon";
import type { JSX } from "react";

export interface ISidebarOption {
    id: string;
    icon: SystemIconProps
    label: string;
    content: JSX.Element;
    selected?: boolean; 
}