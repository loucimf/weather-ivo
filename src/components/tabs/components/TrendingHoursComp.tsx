import React, { useEffect, useMemo, useState } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

type OpenMeteoResponse = {
    hourly: {
        time: string[];
        temperature_2m: number[];
    };
};

type ChartPoint = {
    hour: string;
    temp: number;
};

export type TemperatureChartProps = {
    latitude: number;
    longitude: number
    fill?: string
    stroke?: string
};

export const TemperatureTrendChart: React.FC<TemperatureChartProps> = ({ latitude, longitude, fill = "url(#tempFill)", stroke = "currentColor" }) => {
    const [data, setData] = useState<ChartPoint[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const today = useMemo(() => {
        const now = new Date();
        return now.toISOString().split("T")[0];
    }, []);

    useEffect(() => {
        let cancelled = false;

        async function loadWeather() {
            try {
                setLoading(true);
                setError(null);

                const url =
                    `https://api.open-meteo.com/v1/forecast` +
                    `?latitude=${latitude}` +
                    `&longitude=${longitude}` +
                    `&hourly=temperature_2m` +
                    `&forecast_days=1` +
                    `&timezone=auto`;

                const res = await fetch(url); // repeteti

                if (!res.ok) {
                    throw new Error("Failed to fetch weather data");
                }

                const json: OpenMeteoResponse = await res.json();

                const points: ChartPoint[] = json.hourly.time.map((time, i) => {
                    const date = new Date(time);

                    return {
                        hour: date.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        }),
                        temp: json.hourly.temperature_2m[i],
                    };
                });

                if (!cancelled) {
                    setData(points);
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err instanceof Error ? err.message : "Unknown error");
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        loadWeather();

        return () => {
            cancelled = true;
        };
    }, [latitude, longitude, today]);

    if (loading) return <p>Loading temperature chart...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={{ width: "100%", height: 320 }}>
            <ResponsiveContainer>
                <AreaChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 10 }}>
                    <defs>
                        <linearGradient id="tempFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="currentColor" stopOpacity={0.35} />
                            <stop offset="95%" stopColor="currentColor" stopOpacity={0.05} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="1 10" />
                    <XAxis dataKey="hour" />
                    <YAxis unit="°C" />
                    <Tooltip formatter={(value) => [`${value} °C`, "Temperature"]} />

                    <Area
                        type="monotone"
                        dataKey="temp"
                        stroke={stroke}
                        fill={fill}
                        strokeWidth={2}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}