import type React from "react"
import { CardContainer, HorizontalContainer, VerticalContainer } from "../containers"
import { H1Title, H2Title } from "@src/design-system/Titles"
import { SmallText, Text } from "@src/design-system/Texts"
import { SystemIcon } from "@src/design-system/SystemIcon"
import { designSystemStyles } from "@src/styles/designSystemStyles"
import ClickableWrapper from "../ClickableWrapper"
import type { ComponentProps } from "react"


export const Dashboard: React.FC = ({

}) => {
    return (
        <VerticalContainer
            width="100%"
            padding="0"
            alignment="center"
        >
            <Header height="5%" width="95%" />
            <div style={{ height: "1px", width: "100%", backgroundColor: "black" }} />
            <VerticalContainer
                height={"50%"}
                width="95%"
            >
                <HorizontalContainer
                    width="100%"
                    height={"100%"}
                    justifyContent="start"
                >
                    <OverviewComp />
                    <VerticalContainer
                        width="35%"
                        height="100%"
                        justifyContent="start"
                        alignment="start"
                        margin=""
                        padding=""
                    >
                        <AirQualityComp/>
                        <SunAndMoonComp/>
                    </VerticalContainer>
                </HorizontalContainer>
            </VerticalContainer>
        </VerticalContainer>
    )
}

const AirQualityComp: React.FC = () => {
    return (
        <CardContainer
            padding={designSystemStyles.paddingLg}
        >
            <HorizontalContainer>
                <IconText text="Air Quality Index" bold={true}/>
            </HorizontalContainer>
            <HorizontalContainer>
                <H1Title text="41"/>
                <CardContainer
                    width="50px"
                    height="auto"
                    padding={"5px"}
                    backgroundColor={designSystemStyles.colorTintedAction}
                >
                    <HorizontalContainer
                        width="100%"
                        justifyContent="center"
                        alignment="center"
                    >
                        <SmallText color={designSystemStyles.colorMainAction} markdown={true} text="**Good**"/>
                    </HorizontalContainer>
                </CardContainer>
            </HorizontalContainer>
            <div style={{ height: "1vh", width: "100%", backgroundColor: designSystemStyles.colorBackgroundGray3, borderRadius: designSystemStyles.radiusItem, marginBottom: "10px"}}>
                <div style={{ height: "100%", width: "20%", position: "relative", left: "0", top: "0", backgroundColor: designSystemStyles.colorGreen , borderRadius: designSystemStyles.radiusItem}}/>
            </div>
            <SmallText markdown={true} text="**Air quality is considered satisfactory, and air pollution poses little to no risk**"/>
        </CardContainer>
    )
}

const SunAndMoonComp: React.FC = () => {
    return (
        <CardContainer>
            <HorizontalContainer>
                <p></p>
            </HorizontalContainer>
        </CardContainer>
    )
}

const OverviewComp: React.FC = () => {
    return (
        <CardContainer
            width="65%"
            padding={designSystemStyles.paddingLg}
        >
            <VerticalContainer
                height={"100%"}
                width="100%"
                gap={"250px"}
            >
                <HorizontalContainer
                    justifyContent="space-between"
                    alignment="center"
                    height={"20%"}
                >
                    <VerticalContainer
                        gap="0"
                        margin={"0"}
                    >
                        <HorizontalContainer
                            gap={designSystemStyles.gapSm}
                            margin={0}
                        >
                            <SystemIcon type="calendar" color="black" />
                            <Text markdown={true} text="**New york**" />
                        </HorizontalContainer>
                        <SmallText text="Today, Oct 17   •   9:41 AM" />
                    </VerticalContainer>


                    <ClickableWrapper onClick={() => { }}>
                        <CardContainer>
                            <HorizontalContainer
                                height={"10px"}
                            >
                                <Text markdown={true} text="**°C**" />
                                <div style={{ height: "100%", width: "1px", backgroundColor: "black" }} />
                                <Text text="°F" />
                            </HorizontalContainer>
                        </CardContainer>
                    </ClickableWrapper>
                </HorizontalContainer>
                <HorizontalContainer
                    width="100%"
                    height={"80%"}
                    justifyContent="space-between"
                >
                    <HorizontalContainer
                        width="60%"
                        height={"30%"}
                    >
                        <div style={{ height: "100px ", width: "100px", borderRadius: "50%", backgroundColor: "grey" }} />
                        <VerticalContainer
                            gap="0"
                            margin={0}
                            width="25%"
                        >
                            <h1 style={{ margin: "0" }}>24°</h1>
                            <Text text="Partly Cloudy" />
                        </VerticalContainer>
                    </HorizontalContainer>
                    <HorizontalContainer
                        width="40%"
                        height={"70%"}
                    >
                        <CardContainer
                            backgroundColor={designSystemStyles.colorBackgroundGray2}
                        >
                            <VerticalContainer
                                gap={designSystemStyles.gapSm}
                            >
                                <HorizontalContainer>
                                    <DataPoint text="Wind" value="12km/h"/>
                                    <DataPoint text="Humidity" value="45%"/>      
                                </HorizontalContainer>
                                <HorizontalContainer>
                                    <DataPoint text="Visibility" value="10km" icon="eye"/>
                                    <DataPoint text="Pressure" value="1024hPa"/>      
                                </HorizontalContainer>
                            </VerticalContainer>

                        </CardContainer>
                    </HorizontalContainer>
                </HorizontalContainer>
            </VerticalContainer>
        </CardContainer>
    )
}

const Header: React.FC<{
    height: string
    width: string
}> = ({
    height,
    width
}) => {
        return (
            <VerticalContainer
                height={height}
                width={width}
                gap="0"
                margin={"0"}
            >
                <H2Title text="Good morning, Ivo" />
                <Text text="Here is your weather overview for today" />
            </VerticalContainer>
        )
    }


const IconText: React.FC<{
    text: string,
    bold?: boolean,
    icon?: ComponentProps<typeof SystemIcon>["type"]
}> = ({
    text,
    bold = false,
    icon = "edit"
}) => {
    return (
        <HorizontalContainer>
            <SystemIcon type={icon} color="black"/>
            <Text markdown={bold ? true : false} text={bold ? `**${text}**` : text}/>
        </HorizontalContainer>
    )
}


const DataPoint: React.FC<{
    text: string,
    value: string,
    icon?: ComponentProps<typeof SystemIcon>["type"]
}> = ({ 
    text = "data",
    value = "n/a",
    icon = "edit"
}) => {
    return (
        <VerticalContainer
            gap="0"
        >
            <HorizontalContainer
                gap={designSystemStyles.gapSm}
                margin={0}
            >
                <SystemIcon type={icon} color="black" />
                <SmallText text={text} />
            </HorizontalContainer>
            <Text markdown={true} text={`**${value}**`} />
        </VerticalContainer>
    )
}