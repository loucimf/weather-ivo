import type React from "react"
import { CardContainer, HorizontalContainer, VerticalContainer } from "../containers"
import { H1Title, H2Title } from "@src/design-system/Titles"
import { SmallText, Text } from "@src/design-system/Texts"
import { SystemIcon } from "@src/design-system/SystemIcon"
import { designSystemStyles } from "@src/styles/designSystemStyles"
import ClickableWrapper from "../ClickableWrapper"
import { useState, type ComponentProps } from "react"

interface OverviewCompProps {
    temp: number,
    city: string,
    date: string,
    wind: string,
    humidity: string,
    visibility: string,
    pressure: string,
    weatherState: string,
}

export const Dashboard: React.FC = ({

}) => {
    return (
        <VerticalContainer
            width="100%"
            height={"100%"}
            padding="0"
            alignment="center"
        >
            <Header height="10%" width="95%" />
            <div style={{ height: "1px", width: "100%", backgroundColor: "black" }} />
            <VerticalContainer
                height={"50%"}
                width="95%"
            >
                <HorizontalContainer
                    width="100%"
                    height={"100%"}
                    justifyContent="flex-start"
                >
                    <OverviewComp
                        wind="12km/h"
                        pressure="1012pHa"
                        visibility="10km"
                        humidity="25%"
                        temp={24}
                        city="New York"
                        weatherState="Partly Cloudy"
                        date="Oct 17   •   9:41 AM"
                    />
                    <VerticalContainer
                        width="35%"
                        height="100%"
                        justifyContent="flex-start"
                        alignment="flex-start"
                        margin="0"
                        padding="0"
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
            height="50%"
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
        <CardContainer
            height="50%"
        >
            <HorizontalContainer>
                <p></p>
            </HorizontalContainer>
        </CardContainer>
    )
}

const OverviewComp: React.FC<OverviewCompProps> = ({
    city,
    pressure,
    wind,
    humidity,
    date,
    visibility,
    weatherState,
    temp
}) => {
    const [useCelsius, setUseCelsius] = useState<boolean>(true)

    return (
        <CardContainer
            width="65%"
            height="100%"
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
                            <Text markdown={true} text={`**${city}**`} />
                        </HorizontalContainer>
                        <SmallText text={`Today, ${date}`} />
                    </VerticalContainer>


                    <ClickableWrapper onClick={() => { 
                        setUseCelsius(!useCelsius)
                    }}>
                        <CardContainer>
                            <HorizontalContainer
                                height={"10px"}
                            >
                                <Text markdown={true} text={useCelsius ? "**°C**" : "°C"} />
                                <div style={{ height: "100%", width: "1px", backgroundColor: "black" }} />
                                <Text markdown={true} text={!useCelsius ? "**°F**" : "°F"} />
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
                            <h1 style={{ margin: "0" }}>{ useCelsius ? `${temp}°` : `${convertToFahrenheit(temp)}°`}</h1>
                            <Text text={weatherState} />
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
                                    <DataPoint text="Wind" value={wind}/>
                                    <DataPoint text="Humidity" value={humidity}/>      
                                </HorizontalContainer>
                                <HorizontalContainer>
                                    <DataPoint text="Visibility" value={visibility} icon="eye"/>
                                    <DataPoint text="Pressure" value={pressure}/>      
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


function convertToFahrenheit(temp:number) {
    const converted = (temp / (9/5)) + 32
    return Math.round(converted)
} 