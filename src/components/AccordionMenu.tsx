import { useEffect, useState } from "react";
import styles from "./AccordionMenu.module.scss";
type AccordionMenuProps = {
	isOpen: boolean;
	onClick: (id:string) => void;
};

export default function AccordionMenu({ isOpen, onClick }: AccordionMenuProps) {
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
				<li
						className={styles.navLink}
						onClick={() => onClick("product")}
					>
						oferta
					</li>
					<li
						className={styles.navLink}
						onClick={() => onClick("projects")}
					>
						realizacje
					</li>
					<li
						className={styles.navLink}
						onClick={() => onClick("aboutUs")}
					>
						o nas
					</li>
					<li>
						<a className={styles.navLink} href="#">
							kontakt
						</a>
					</li>
			</ul>
		</div>
	);
}
