import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../hooks/useScrollToTop";
import Homepage from "../pages/Homepage";
import Contact from "../pages/Contact";

export default function App() {
	return (
		<BrowserRouter basename="/Ogrody-i-porzadek">
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}