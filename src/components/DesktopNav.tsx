import styles from "./DesktopNav.module.scss";

export default function DestopNav() {
	return (
		<>
			<nav className={styles.nav}>
				<ul className={styles.list}>
					<li>
						<a className={styles.navLink} href="#">
							oferta
						</a>
					</li>
					<li>
						<a className={styles.navLink} href="#">
							realizacje
						</a>
					</li>
					<li>
						<a className={styles.navLink} href="#">
							o nas
						</a>
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
