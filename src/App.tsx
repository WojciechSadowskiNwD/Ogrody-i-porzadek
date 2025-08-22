import "./App.scss";
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
			</main>
		</>
	);
}

export default App;
