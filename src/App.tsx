import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Contact from "./Contact";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="contact" element={<Contact />}/>
            </Routes>
		</BrowserRouter>
	);
}
