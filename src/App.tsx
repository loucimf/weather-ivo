import { useState } from 'react'
import './App.css'
import { HorizontalContainer } from './components/containers'
import { Sidebar } from './components/Sidebar'
import type { ISidebarOption } from './models/SidebarOption'
import { Dashboard } from './components/tabs/Dashboard'

function App() {
	
	const options: ISidebarOption[] = [
		{
			id: "dashboard",
			icon: "dashboard",
			label: "Dashboard",
			content: <Dashboard/>
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
