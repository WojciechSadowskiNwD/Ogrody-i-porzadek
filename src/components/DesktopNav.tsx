import { Link, useLocation, useNavigate } from "react-router-dom";
import { useScrollTo } from "../hooks/useScrollTo";
import styles from "./DesktopNav.module.scss";

export default function DestopNav() {
	const scrollTo = useScrollTo();
	const { pathname } = useLocation();	
	const navigate = useNavigate();

	function checkPath(id: string) {
		if (pathname === "/") {
			scrollTo(id);
		} else {
			navigate("/", { state: { scrollToId: id } });
		}
	}

	return (
		<>
			<nav className={styles.nav}>
				<ul className={styles.list}>
					<li className={styles.navLink} onClick={() => checkPath("product")}>
						oferta
					</li>
					<li className={styles.navLink} onClick={() => checkPath("projects")}>
						realizacje
					</li>
					<li className={styles.navLink} onClick={() => checkPath("aboutUs")}>
						o nas
					</li>
					<li className={styles.navLink}>
						<Link to="/contact">Kontakt</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
