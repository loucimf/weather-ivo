import ClickableWrapper from "@src/components/ClickableWrapper"
import { CardContainer, HorizontalContainer, VerticalContainer } from "@src/components/containers"
import { SystemIcon } from "@src/design-system/SystemIcon"
import { SmallText, Text } from "@src/design-system/Texts"
import { H1Title, H2Title } from "@src/design-system/Titles"
import { designSystemStyles } from "@src/styles/designSystemStyles"
import { useState, type ComponentProps } from "react"

interface AirQualityProps {
    uvIndex: string
}

type UvLevel = "low" | "moderate" | "high"

const UV_MAX = 11

const getUvLevel = (uvValue: number): UvLevel => {
    if (uvValue <= 2) return "low"
    if (uvValue <= 5) return "moderate"
    return "high"
}

const getUvStyles = (uvValue: number) => {
    const level = getUvLevel(uvValue)
    const color =
        level === "low"
            ? "rgba(30, 255, 0, 0.6)"
            : level === "moderate"
                ? "rgba(255, 153, 0, 0.6)"
                : "rgba(255, 0, 0, 0.6)"

    const label =
        level === "low" ? "Low" : level === "moderate" ? "Moderate" : "High"

    const advice =
        level === "low"
            ? "No protection needed."
            : level === "moderate"
                ? "Use sun protection."
                : "Protection recommended."

    return { level, color, label, advice }
}

const QualityComp: React.FC<AirQualityProps> = ({
    uvIndex = "67"
}) => {
    const uvValue = Number(uvIndex)
    const uvPercent = (uvValue / UV_MAX) * 100
    const uvStyle = getUvStyles(uvValue)
    const gradientScale = uvPercent !== 0 ? `${10000 / uvPercent}% 100%` : "100% 100%"

    return (
        <CardContainer
            padding={designSystemStyles.paddingLg}
            height="50%"
        >
            <HorizontalContainer>
                <IconText icon="leaf" text="UV Index" bold={true}/>
            </HorizontalContainer>
            <HorizontalContainer>
                <H1Title text={uvIndex}/>
                <CardContainer
                    width="6w"
                    height="auto"
                    padding={"5px"}
                    backgroundColor={uvStyle.color}
                    border={`solid 1px ${designSystemStyles.colorBackgroundWhite}`}
                >
                    <HorizontalContainer
                        width="100%"
                        justifyContent="center"
                        alignment="center"
                    >
                        <SmallText color={designSystemStyles.colorBackgroundWhite} markdown={true} text={`**${uvStyle.label}**`}/>
                    </HorizontalContainer>
                </CardContainer>
            </HorizontalContainer>
            <div style={{ height: "1vh", width: "100%", backgroundColor: designSystemStyles.colorBackgroundGray3, borderRadius: designSystemStyles.radiusItem, marginBottom: "10px"}}>
                <div style={{ height: "100%", width: `${uvPercent}%`, position: "relative", left: "0", top: "0", background: `linear-gradient(90deg, ${designSystemStyles.colorGreen} 0%, ${designSystemStyles.colorPresenteeismYellow} 50%, ${designSystemStyles.colorRed} 100%)`, backgroundSize: gradientScale, backgroundPosition: "left center", backgroundRepeat: "no-repeat", borderRadius: designSystemStyles.radiusItem}}/>
            </div>
            <SmallText markdown={true} text={`**${uvStyle.advice}**`}/>
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
    const iconColor = designSystemStyles.colorText
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
                    <IconText icon="sun" text="Sun and Moon" bold={true} />
                </HorizontalContainer>
                <HorizontalContainer
                    width="100%"
                    alignment="center"
                    justifyContent="space-between"
                >
                    <TimeComp
                        icon="arrow-up"
                        hour={sunrise}
                        text="Sunrise"
                    />
                    <SystemIcon type="cycle" color={iconColor}/>
                    <TimeComp
                        icon="arrow-down"
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
    icon: ComponentProps<typeof SystemIcon>["type"]
}> = ({
    text,
    hour,
    icon
}) => {
    const iconColor = designSystemStyles.colorText
    return (
        <VerticalContainer
            width="fit-content"
            alignment="center"
            gap="0"
            padding="0"
        >
            <SystemIcon type={icon} color={iconColor}/>
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
            backgroundColor={designSystemStyles.colorBackgroundWhite}
            accentColor="rgba(255, 154, 0, 0.18)"
            accentPosition="top-right"
            accentFade="45%"
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
                            <SystemIcon type="calendar" color={designSystemStyles.colorText} />
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
                                <div style={{ height: "100%", width: "1px", backgroundColor: designSystemStyles.colorTextSecondary }} />
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
                        <SystemIcon
                            type="sun-cloud"
                            color={designSystemStyles.colorOrange}
                            size="extra-extra-large"
                            glow={true}
                            glowColor="rgba(255, 154, 0, 0.35)"
                        />
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
                            accentColor="rgba(101, 163, 255, 0.12)"
                            accentPosition="bottom-right"
                            accentFade="55%"
                        >
                            <VerticalContainer
                                gap={designSystemStyles.gapSm}
                            >
                                <HorizontalContainer>
                                    <DataPoint icon="wind" text="Wind" value={wind}/>
                                    <DataPoint icon="water" text="Humidity" value={humidity}/>      
                                </HorizontalContainer>
                                <HorizontalContainer>
                                    <DataPoint text="Visibility" value={visibility} icon="eye"/>
                                    <DataPoint icon="temperature" text="Pressure" value={pressure}/>      
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
    const iconColor = designSystemStyles.colorText
    return (
        <HorizontalContainer>
            <SystemIcon type={icon} color={iconColor}/>
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
    const iconColor = designSystemStyles.colorText
    return (
        <VerticalContainer
            gap="0"
        >
            <HorizontalContainer
                gap={designSystemStyles.gapSm}
                margin={0}
            >
                <SystemIcon type={icon} color={iconColor} />
                <SmallText text={text} />
            </HorizontalContainer>
            <Text markdown={true} text={`**${value}**`} />
        </VerticalContainer>
    )
}


function convertToFahrenheit(temp:number) {
    const converted = (temp * (9/5)) + 32
    return Math.round(converted)
} 


export interface DashboardProps extends AirQualityProps, SunAndMoonProps, OverviewCompProps {
    minTemp: number | null
    maxTemp: number | null
}
export { Header, OverviewComp, QualityComp, SunAndMoonComp }
