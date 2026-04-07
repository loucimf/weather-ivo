import { useState } from 'react'
import './App.css'
import { HorizontalContainer } from './components/containers'
import { Sidebar } from './components/Sidebar'
import type { ISidebarOption } from './models/SidebarOption'
import { Dashboard } from './components/tabs/views/Dashboard'
import { useDashboardViewModel } from './components/tabs/ViewModels/DashboardViewModel'

function App() {
	
	const {
		wind,
		pressure,
		visibility,
		humidity,
		temp,
		minTemp,
		maxTemp,
		uvIndex: airIndex,
		sunrise,
		sunset,
		city,
		weatherState,
		date,
		latitude,
		longitude,
	} = useDashboardViewModel()
	
	const options: ISidebarOption[] = [
		{
			id: "dashboard",
			icon: "dashboard",
			label: "Dashboard",
			content: <Dashboard
				latitude={latitude}
				longitude={longitude}
				minTemp={minTemp}
				maxTemp={maxTemp}
				weatherState={weatherState}
				date={date}
				city={city}
				wind={wind}
				pressure={pressure}
				visibility={visibility}
				humidity={humidity}
				temp={temp}
				uvIndex={airIndex}
				sunrise={sunrise}
				sunset={sunset}
			/>
		},
		{
			id: "forecast",
			icon: "chart2",
			label: "Forecast",
			content: <p> forecast </p>
		},
		{
			id: "alerts",
			icon: "bell",
			label: "Alerts",
			content: <p> alerts </p>
		}
	]

	const [currentTab, setCurrentTab] = useState<ISidebarOption>(options[0])

	return (
		<HorizontalContainer
			height="100vh"
			width="100vw"
			justifyContent='start'
			alignment='start'
			margin="0"
			gap='0'
		>
				<Sidebar width='20%' options={options} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
				<HorizontalContainer
					width='80%'
					height="100%"
					alignment='start'
					justifyContent='start'
				>
					{currentTab.content}
				</HorizontalContainer>
		</HorizontalContainer>
	)
}

export default App
