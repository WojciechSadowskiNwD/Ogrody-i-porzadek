import { TopBar } from "./components/TopBar";
import Header from "./components/Header";
import Offer from "./components/Offer";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import SectionButton from "./components/SectionButton";
import "./App.scss";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<TopBar />
			<Header />
			<main>
				<Offer />
				<AboutUs />
				<SectionButton />
				<Projects />
				<Reviews />
			</main>
			<Footer />
		</>
	);
}

export default App;
