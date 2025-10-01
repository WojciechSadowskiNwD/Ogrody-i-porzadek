import { useState } from "react";
import { createPortal } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useScrollTo } from "../../../../hooks/useScrollTo";
import Hamburger from "hamburger-react";
import AccordionMenu from "./AccordionMenu";
import styles from "./MobileNav.module.scss";

export default function MobileNav() {
	const [isOpen, setIsOpen] = useState(false);
	const scrollTo = useScrollTo();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	function closeAfterClick(id: string) {
		checkPath(id);
		setIsOpen(false);
	}

	function checkPath(id: string) {
		if (pathname === "/") {
			scrollTo(id);
		} else {
			navigate("/", { state: { scrollToId: id } });
		}
	}

	return (
		<>
			<div className={styles.MobileNav}>
				<Hamburger toggled={isOpen} toggle={setIsOpen} size={34} />
			</div>
			{createPortal(
				<AccordionMenu isOpen={isOpen} onClick={closeAfterClick} />,
				document.body
			)}
		</>
	);
}