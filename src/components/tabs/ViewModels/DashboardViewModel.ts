import { weatherData } from "@src/core/weatherData";
import type { DashboardProps } from "@src/components/tabs/components/DashComps";

function formatTime(value?: Date): string {
    if (!value) return "00:00"
    return value.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
}

export function useDashboardViewModel(): DashboardProps {

    const current = weatherData.current;
    const daily = weatherData.daily;
    const hourly = weatherData.hourly;

    const currentUvIndex = hourly.uv_index?.[0] ?? 0
    const hourlyVisibility = hourly.visibility?.[0] ?? 0

    return {
        airIndex: `${currentUvIndex}`,
        sunrise: formatTime(daily.sunrise?.[0]),
        sunset: formatTime(daily.sunset?.[0]),

        temp: Math.round(current.temperature_2m),
        wind: `${Math.round(current.wind_speed_10m)} m/s`,
        humidity: `${current.relative_humidity_2m}%`,
        pressure: `${Math.round(current.surface_pressure)} hPa`,
        visibility: `${hourlyVisibility} m`,

        // OverviewCompProps expects these but Dashboard may override
        city: "New York",
        date: new Date().toLocaleDateString([], { month: "short", day: "numeric" }),
        weatherState: "Partly Cloudy",
        maxTemp: daily.temperature_2m_max?.[0] ?? null,
        minTemp: daily.temperature_2m_min?.[0] ?? null,
        // SunAndMoonProps and AirQualityProps are covered above
    }
}