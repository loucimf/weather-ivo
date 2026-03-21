import type React from "react"
import { HorizontalContainer, VerticalContainer } from "../containers"
import { AirQualityComp, Header, OverviewComp, SunAndMoonComp } from "./components/DashComps"

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
                height={"40%"}
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
