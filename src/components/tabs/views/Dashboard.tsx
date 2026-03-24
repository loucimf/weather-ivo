import type React from "react"
import { HorizontalContainer, VerticalContainer } from "../../containers"
import { AirQualityComp, Header, OverviewComp, SunAndMoonComp, type DashboardProps } from "../components/DashComps"
export const Dashboard: React.FC<DashboardProps> = ({
    wind,
    pressure,
    visibility,
    humidity,
    temp,
    airIndex,
    sunrise,
    sunset,
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
                height={"40%"}
                width="95%"
            >
                <HorizontalContainer
                    width="100%"
                    height={"100%"}
                    justifyContent="flex-start"
                >
                    <OverviewComp
                        wind={wind}
                        pressure={pressure}
                        visibility={visibility}
                        humidity={humidity}
                        temp={temp}
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
                        <AirQualityComp airIndex={airIndex}/>
                        <SunAndMoonComp sunrise={sunrise} sunset={sunset}/>
                    </VerticalContainer>
                </HorizontalContainer>
            </VerticalContainer>
        </VerticalContainer>
    )
}
