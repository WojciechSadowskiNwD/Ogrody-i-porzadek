import { TopBar } from "./components/TopBar";
import Header from "./components/Header";
import Offer from "./components/Offer";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import "./App.scss";
import Reviews from "./components/Reviews";

function App() {
	return (
		<>
			<TopBar />
			<Header />
			<main>
				<Offer />
				<AboutUs />
				<Projects />
				<Reviews />
			</main>
		</>
	);
}

export default App;
