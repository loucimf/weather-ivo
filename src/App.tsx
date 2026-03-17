import './App.css'
import { HorizontalContainer } from './components/containers'
import { Sidebar } from './components/Sidebar'

function App() {

	return (
		<HorizontalContainer
			height="100vh"
			width="100vw"
			justifyContent='start'
			alignment='start'
			margin="0"
		>
				<Sidebar/>
		</HorizontalContainer>
	)
}

export default App
