import ClickableWrapper from "@src/components/ClickableWrapper"
import { CardContainer, HorizontalContainer, VerticalContainer } from "@src/components/containers"
import { SystemIcon } from "@src/design-system/SystemIcon"
import { SmallText, Text } from "@src/design-system/Texts"
import { H1Title, H2Title } from "@src/design-system/Titles"
import { designSystemStyles } from "@src/styles/designSystemStyles"
import { useState, type ComponentProps } from "react"

interface AirQualityProps {
    airIndex: string
}

const AirQualityComp: React.FC<AirQualityProps> = ({
    airIndex = "67"
}) => {
    return (
        <CardContainer
            padding={designSystemStyles.paddingLg}
            height="50%"
        >
            <HorizontalContainer>
                <IconText text="Air Quality Index" bold={true}/>
            </HorizontalContainer>
            <HorizontalContainer>
                <H1Title text={airIndex}/>
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

interface SunAndMoonProps {
    sunrise: string
    sunset: string
}

const SunAndMoonComp: React.FC<SunAndMoonProps> = ({
    sunrise = "00:00",
    sunset = "00:00"
}) => {
    return (
        <CardContainer
            height="50%"
            padding={designSystemStyles.paddingLg}
        >
            <VerticalContainer
                width="100%"
                height="100%"
                justifyContent="space-between"
            >
                <HorizontalContainer>
                    <IconText text="Sun and Moon" bold={true} />
                </HorizontalContainer>
                <HorizontalContainer
                    width="100%"
                    alignment="center"
                    justifyContent="space-between"
                >
                    <TimeComp
                        hour={sunrise}
                        text="Sunrise"
                    />
                    <SystemIcon type="edit" color="black"/>
                    <TimeComp
                        hour={sunset}
                        text="Sunset"
                    />
                </HorizontalContainer>
            </VerticalContainer>
        </CardContainer>
    )
}

const TimeComp: React.FC<{
    hour: string
    text: string
}> = ({
    text,
    hour
}) => {
    return (
        <VerticalContainer
            width="fit-content"
            alignment="center"
            gap="0"
            padding="0"
        >
            <SystemIcon type="edit" color="black"/>
            <Text markdown={true} text={`**${hour}**`}/>
            <SmallText text={text}/>
        </VerticalContainer>
    )
}

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
                justifyContent="space-between"
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
                    alignment="end"
                >
                    <HorizontalContainer
                        width="60%"
                        height={"50%"}
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
                        height={"50%"}
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


export interface DashboardProps extends AirQualityProps, SunAndMoonProps, OverviewCompProps {
    minTemp: number | null
    maxTemp: number | null
}
export { Header, OverviewComp, AirQualityComp, SunAndMoonComp }