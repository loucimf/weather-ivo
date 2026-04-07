import type React from "react"
import { HorizontalContainer, VerticalContainer } from "../../containers"
import { QualityComp, Header, OverviewComp, SunAndMoonComp, type DashboardProps, TempHourComp, TempSenseComp } from "../components/DashComps"
import { designSystemStyles } from "@src/styles/designSystemStyles"
export const Dashboard: React.FC<DashboardProps> = ({
    wind,
    pressure,
    visibility,
    humidity,
    temp,
    uvIndex: airIndex,
    sunrise,
    sunset,
    longitude,
    latitude
}) => {

    const now = new Date();
    const dayOfMonth = now.getDate(); // 1–31
    const hours = now.getHours();       // 0–23
    const minutes = now.getMinutes();    
    const monthName = now.toLocaleString('en-US', { month: 'short' });
    const suffix = hours > 12 ? "AM" : "PM"


    return (
        <VerticalContainer
            width="100%"
            height={"100%"}
            padding="0"
            alignment="center"
        >
            <Header height="10%" width="95%" />
            <div style={{ height: "1px", width: "100%", backgroundColor: designSystemStyles.colorTextSecondary }} />
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
                        date={`${monthName} ${dayOfMonth}   •   ${hours}:${minutes} ${suffix}`}
                    />
                    <VerticalContainer
                        width="35%"
                        height="100%"
                        justifyContent="flex-start"
                        alignment="flex-start"
                        margin="0"
                        padding="0"
                    >
                        <QualityComp uvIndex={airIndex}/>
                        <SunAndMoonComp sunrise={sunrise} sunset={sunset}/>
                    </VerticalContainer>
                </HorizontalContainer>
                <HorizontalContainer>
                    <TempHourComp longitude={longitude} latitude={latitude}/>
                    <TempSenseComp/>
                </HorizontalContainer>
            </VerticalContainer>
        </VerticalContainer>
    )
}
