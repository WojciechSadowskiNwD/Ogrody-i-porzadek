import { useScrollTo } from "../hooks/useScrollTo";
import styles from "./DesktopNav.module.scss";

export default function DestopNav() {
	const scrollTo = useScrollTo();

	return (
		<>
			<nav className={styles.nav}>
				<ul className={styles.list}>
					<li className={styles.navLink} onClick={() => scrollTo("product")}>
						oferta
					</li>
					<li className={styles.navLink} onClick={() => scrollTo("projects")}>
						realizacje
					</li>
					<li className={styles.navLink} onClick={() => scrollTo("aboutUs")}>
						o nas
					</li>
					<li>
						<a className={styles.navLink} href="#">
							kontakt
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}
