import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useScrollTo } from "../hooks/useScrollTo";
import { TopBar } from "./components/layout/topBar/TopBar";
import Header from "./components/layout/header/Header";
import Offer from "./components/layout/offer/Offer";
import AboutUs from "./components/layout/aboutUs/AboutUs";
import Projects from "./components/layout/projects/Projects";
import Reviews from "./components/layout/reviews/Reviews";
import SectionButton from "./components/layout/sectionButton/SectionButton";
import Footer from "./components/layout/footer/Footer";
import "../styles/App.scss";

export default function Homepage() {
	const location = useLocation();
	const navigate = useNavigate();
	const scrollTo = useScrollTo();

	useEffect(() => {
		const id = (location.state as { scrollToId?: string } | null)?.scrollToId;
		if (!id) return;

		requestAnimationFrame(() => {
			scrollTo(id);
			navigate(location.pathname, { replace: true, state: {} });
		});
	}, [location, navigate, scrollTo]);

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