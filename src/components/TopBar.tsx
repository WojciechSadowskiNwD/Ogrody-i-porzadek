import { useAutoHideTopbar } from "../hooks/useAutoHideTopbar";
import useDesktopNav from "../hooks/useDesktopNav";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import logo from "../assets/logo_v2.1.png";
import styles from "./TopBar.module.scss";
import { Link } from "react-router-dom";

export const TopBar: React.FC = () => {
	const isDesktop = useDesktopNav(768);
	const { hidden, scrolled } = useAutoHideTopbar({
		threshold: 100,
		minMotion: 4,
	});

	return (
		<>
			<div className={styles.backgroundBar}></div>
			<div
				className={`${styles.topbar} ${hidden ? styles.hidden : ""} ${
					scrolled ? styles.scrolled : ""
				}`}
			>
				<div className={styles.inner}>
					<Link to="/">
						<img className={styles.brand} src={logo} alt="logo company" />
					</Link>

					{isDesktop ? <DesktopNav /> : <MobileNav />}
				</div>
			</div>
		</>
	);
};
