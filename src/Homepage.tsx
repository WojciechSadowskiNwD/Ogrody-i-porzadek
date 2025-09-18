import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useScrollTo } from "./hooks/useScrollTo";
import { TopBar } from "./components/TopBar";
import Header from "./components/Header";
import Offer from "./components/Offer";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import SectionButton from "./components/SectionButton";
import Footer from "./components/Footer";
import "./App.scss";

function Homepage() {
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

export default Homepage;