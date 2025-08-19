import "./App.scss";
import Header from "./components/Header";
import { TopBar } from "./components/TopBar";

function App() {
	return (
		<>
			
			<TopBar />
			<Header />
			<main>
				<h3>Centralna część</h3>
			</main>
		</>
	);
}

export default App;
