import { TopBar } from "./components/TopBar";
import Header from "./components/Header";
import Offer from "./components/Offer";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import "./App.scss";

function App() {
	return (
		<>
			<TopBar />
			<Header />
			<main>
				<Offer />
				<AboutUs />
				<Projects />
			</main>
		</>
	);
}

export default App;
