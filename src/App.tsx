import { TopBar } from "./components/TopBar";
import Header from "./components/Header";
import Offer from "./components/Offer";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import SectionButton from "./components/SectionButton";
import Footer from "./components/Footer";
import "./App.scss";

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
