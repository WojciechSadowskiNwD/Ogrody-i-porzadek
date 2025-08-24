import "./App.scss";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Offer from "./components/Offer";
import { TopBar } from "./components/TopBar";

function App() {
	return (
		<>
			
			<TopBar />
			<Header />
			<main>
				<Offer />
				<AboutUs />
			</main>
		</>
	);
}

export default App;
