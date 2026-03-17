import { useState } from "react"
import { CardContainer, HorizontalContainer, VerticalContainer } from "./containers"
import { designSystemStyles } from "../styles/designSystemStyles"
import type { ISidebarOption } from "@src/models/SidebarOption"
import ClickableWrapper from "./ClickableWrapper"
import { SystemIcon } from "@src/design-system/SystemIcon"
import { H1Title } from "@src/design-system/Titles"


export const Sidebar: React.FC = ({ }) => {

    const options: ISidebarOption[] = [
        {
            id: "dashboard",
            icon: {
                type: "dashboard",
                color: "black",
            },
            label: "Dashboard",
            content: <p> dashboard </p>
        },
        {
            id: "forecast",
            icon: {
                type: "chart2",
                color: "black",
            },
            label: "Forecast",
            content: <p> forecast </p>
        },
        {
            id: "alerts",
            icon: {
                type: "bell",
                color: "black",
            },
            label: "Alerts",
            content: <p> alerts </p>
        }
    ]

    const [currentTab, setCurrentTab] = useState<ISidebarOption>(options[0])

    return (
        <VerticalContainer
            height={"100%"}
            width="20%"
            backgroundColor={designSystemStyles.colorBackgroundGray2}
            alignment="center"
            padding={designSystemStyles.paddingMd}
        >
            <HorizontalContainer
                height={"40px"}
                width="100%"
            >
                <H1Title text="WeatherApp"/>
            </HorizontalContainer>

            {options.map((opt) => {
                return (
                    <SidebarOption
                        option={opt}
                        currentTab={currentTab}
                        setCurrentTab={setCurrentTab}
                    />
                )
            }
            )}
        </VerticalContainer>
    )
}

const SidebarOption: React.FC<{
    option: ISidebarOption,
    currentTab: ISidebarOption,
    setCurrentTab: (opt: ISidebarOption) => void
}> = ({
    option,
    currentTab,
    setCurrentTab
}) => {
        return (
            <ClickableWrapper
                onClick={() => { setCurrentTab(option) }}
            >
                <CardContainer
                    padding={designSystemStyles.paddingMd}
                    backgroundColor={designSystemStyles.colorBackgroundGray3}
                >
                    <HorizontalContainer
                        height={"100%"}
                        width="15vw"
                    >
                        <SystemIcon type={option.icon.type} color={option.icon.color}/>
                        <div
                            key={option.id}
                            className={`${"flap"} ${currentTab.id === option.id ? "" : ''} ${option.selected ? "selected" : ''}`}
                        >
                            {option.label}
                        </div>

                    </HorizontalContainer>
                </CardContainer>
            </ClickableWrapper>
        )
    }