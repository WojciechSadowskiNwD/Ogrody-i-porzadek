import { useEffect, useState } from "react";
import styles from "./AccordionMenu.module.scss";
type AccordionMenuProps = {
	isOpen: boolean;
};

export default function AccordionMenu({ isOpen }: AccordionMenuProps) {
	const [scrollDown, setScrollDown] = useState(false);
	const [lastY, setLastY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentY = window.scrollY;
			setScrollDown(currentY > lastY);
			setLastY(currentY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastY]);

	return (
		<div
			className={`${styles.accordionMenu} ${
				isOpen && !scrollDown ? styles.active : ""
			}`}
		>
			<ul className={styles.list}>
				<li>oferta</li>
				<li>realizacje</li>
				<li>o nas</li>
				<li>kontakt</li>
			</ul>
		</div>
	);
}
