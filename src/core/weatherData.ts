import { fetchWeatherApi } from "openmeteo";

const newYorkparams = {
	latitude: 52.52,
	longitude: 13.41,
	daily: ["sunrise", "sunset", "uv_index_max", "temperature_2m_max", "temperature_2m_min"],
	hourly: ["temperature_2m", "apparent_temperature", "precipitation_probability", "wind_speed_10m", "visibility", "surface_pressure", "cloud_cover", "uv_index", "sunshine_duration"],
	current: ["temperature_2m", "cloud_cover", "wind_speed_10m", "surface_pressure", "precipitation", "showers", "rain", "apparent_temperature", "relative_humidity_2m"],
	timezone: "America/New_York",
}; //Europe/London

const autoParams = {
	latitude: -34.5204617692487,
	longitude: -58.475328194492775,
	daily: ["sunrise", "sunset", "uv_index_max", "temperature_2m_max", "temperature_2m_min"],
	hourly: ["temperature_2m", "apparent_temperature", "precipitation_probability", "wind_speed_10m", "visibility", "surface_pressure", "cloud_cover", "uv_index", "sunshine_duration"],
	current: ["temperature_2m", "cloud_cover", "wind_speed_10m", "surface_pressure", "precipitation", "showers", "rain", "apparent_temperature", "relative_humidity_2m"],
	timezone: "auto",
};

const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, newYorkparams);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const latitude = response.latitude();
const longitude = response.longitude();
const elevation = response.elevation();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const utcOffsetSeconds = response.utcOffsetSeconds();

console.log(
	`\nCoordinates: ${latitude}°N ${longitude}°E`,
	`\nElevation: ${elevation}m asl`,
	`\nTimezone: ${timezone} ${timezoneAbbreviation}`,
	`\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
);

const current = response.current()!;
const hourly = response.hourly()!;
const daily = response.daily()!;

// Define Int64 variables so they can be processed accordingly
const sunrise = daily.variables(0)!;
const sunset = daily.variables(1)!;

// Note: The order of weather variables in the URL query and the indices below need to match!
export const weatherData = {
	current: {
		time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
		temperature_2m: current.variables(0)!.value(),
		cloud_cover: current.variables(1)!.value(),
		wind_speed_10m: current.variables(2)!.value(),
		surface_pressure: current.variables(3)!.value(),
		precipitation: current.variables(4)!.value(),
		showers: current.variables(5)!.value(),
		rain: current.variables(6)!.value(),
		apparent_temperature: current.variables(7)!.value(),
		relative_humidity_2m: current.variables(8)!.value(),
	},
	hourly: {
		time: Array.from(
			{ length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() }, 
			(_ , i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
		),
		temperature_2m: hourly.variables(0)!.valuesArray(),
		apparent_temperature: hourly.variables(1)!.valuesArray(),
		precipitation_probability: hourly.variables(2)!.valuesArray(),
		wind_speed_10m: hourly.variables(3)!.valuesArray(),
		visibility: hourly.variables(4)!.valuesArray(),
		surface_pressure: hourly.variables(5)!.valuesArray(),
		cloud_cover: hourly.variables(6)!.valuesArray(),
		uv_index: hourly.variables(7)!.valuesArray(),
		sunshine_duration: hourly.variables(8)!.valuesArray(),
	},
	daily: {
		time: Array.from(
			{ length: (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval() }, 
			(_ , i) => new Date((Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000)
		),
		// Map Int64 values to according structure
		sunrise: [...Array(sunrise.valuesInt64Length())].map(
			(_ , i) => new Date((Number(sunrise.valuesInt64(i)) + utcOffsetSeconds) * 1000)
		),
		// Map Int64 values to according structure
		sunset: [...Array(sunset.valuesInt64Length())].map(
			(_ , i) => new Date((Number(sunset.valuesInt64(i)) + utcOffsetSeconds) * 1000)
		),
		uv_index_max: daily.variables(2)!.valuesArray(),
		temperature_2m_max: daily.variables(3)!.valuesArray(),
		temperature_2m_min: daily.variables(4)!.valuesArray(),
	},
};

// The 'weatherData' object now contains a simple structure, with arrays of datetimes and weather information
console.log(
	`\nCurrent time: ${weatherData.current.time}\n`,
	`\nCurrent temperature_2m: ${weatherData.current.temperature_2m}`,
	`\nCurrent cloud_cover: ${weatherData.current.cloud_cover}`,
	`\nCurrent wind_speed_10m: ${weatherData.current.wind_speed_10m}`,
	`\nCurrent surface_pressure: ${weatherData.current.surface_pressure}`,
	`\nCurrent precipitation: ${weatherData.current.precipitation}`,
	`\nCurrent showers: ${weatherData.current.showers}`,
	`\nCurrent rain: ${weatherData.current.rain}`,
	`\nCurrent apparent_temperature: ${weatherData.current.apparent_temperature}`,
	`\nCurrent relative_humidity_2m: ${weatherData.current.relative_humidity_2m}`,
);
console.log("\nHourly data:\n", weatherData.hourly)
console.log("\nDaily data:\n", weatherData.daily)

