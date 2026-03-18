import type { ComponentProps, KeyboardEvent } from "react"
import { HorizontalContainer, VerticalContainer } from "./containers"
import { designSystemStyles } from "../styles/designSystemStyles"
import type { ISidebarOption } from "@src/models/SidebarOption"
import { SystemIcon } from "@src/design-system/SystemIcon"
import { H1Title } from "@src/design-system/Titles"
import styles from "@styles/components/LeftMenuOption.module.css"
import { SmallText, Text } from "@src/design-system/Texts"


export const Sidebar: React.FC<{
    options: ISidebarOption[]
    currentTab: ISidebarOption
    setCurrentTab: (opt: ISidebarOption) => void,
    width?: string
}> = ({ 
    options,
    currentTab,
    setCurrentTab,
    width = "20%"
}) => {

    return (
        <VerticalContainer
            height={"100%"}
            width={width}
            backgroundColor={designSystemStyles.colorBackgroundGray2}
            alignment="start"
            padding={designSystemStyles.paddingMd}
        >
            <HorizontalContainer
                height={"40px"}
                width="100%"
            >
                <H1Title text="WeatherApp"/>
            </HorizontalContainer>

            <SmallText markdown={true} text="**MAIN MENU**"/>
            {options.map((opt) => {
                return (
                    <SidebarOption
                        label={opt.label}
                        icon={opt.icon}
                        onClick={() => setCurrentTab(opt)}
                        isActive={opt.id === currentTab.id}
                    />
                )
            }
            )}
        </VerticalContainer>
    )
}


export interface LeftMenuOptionProps {
    label: string
    icon: ComponentProps<typeof SystemIcon>["type"]
    isActive?: boolean
    onClick?: () => void
    className?: string
}

export const SidebarOption: React.FC<LeftMenuOptionProps> = ({
    label,
    icon,
    isActive = false,
    onClick,
    className
}) => { 
    const containerClassName = [
        styles.option,
        isActive ? styles.active : "",
        onClick ? styles.clickable : "",
        "DSLeftMenuOption",
        className
    ].filter(Boolean).join(" ")
    const iconColor = isActive ? designSystemStyles.colorMainAction : designSystemStyles.colorText
    const labelColor = isActive ? designSystemStyles.colorMainAction : designSystemStyles.colorText
    const labelClassName = [styles.label].filter(Boolean).join(" ")

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (!onClick) return
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            onClick()
        }
    }

    return (
        <div
            className={containerClassName}
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={handleKeyDown}
        >
            <HorizontalContainer
                gap={designSystemStyles.gapMd}
                alignment="center"
                height={designSystemStyles.sizeButtonHeight}
                paddingLeft={designSystemStyles.paddingLg}
                paddingRight={designSystemStyles.paddingLg}
                paddingTop={designSystemStyles.paddingMd}
                paddingBottom={designSystemStyles.paddingMd}
            >
                <SystemIcon type={icon} color={iconColor} className="DSLeftMenuOptionIcon" />
                <Text text={label} color={labelColor} className={labelClassName} />
            </HorizontalContainer>
        </div>
    )
}
