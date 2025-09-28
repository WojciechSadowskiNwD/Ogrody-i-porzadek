import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Contact from "./Contact";
import ScrollToTop from './hooks/useScrollToTop';

export default function App() {
	return (
		<BrowserRouter>
		<ScrollToTop />
			<Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="contact" element={<Contact />}/>
            </Routes>
		</BrowserRouter>
	);
}