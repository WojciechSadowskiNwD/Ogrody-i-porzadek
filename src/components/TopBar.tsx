import { useAutoHideTopbar } from "../hooks/useAutoHideTopbar";
import useDesktopNav from "../hooks/useDesktopNav";
import MobileNav from "./MobileNav";
import DestopNav from "./DesktopNav";
import logo from "../assets/logo_v2.1.png";
import styles from "./TopBar.module.scss";

export const TopBar: React.FC = () => {
	const isDesktop = useDesktopNav(768);
	const { hidden, scrolled } = useAutoHideTopbar({
		threshold: 100,
		minMotion: 4,
	});

	
	
	return (
		<div
			className={`${styles.topbar} ${hidden ? styles.hidden : ""} ${
				scrolled ? styles.scrolled : ""
			}`}
		>
			<div className={styles.inner}>
				<img className={styles.brand} src={logo} alt="logo company" />

				{isDesktop ? <DestopNav /> : <MobileNav />}
			</div>
		</div>
	);
};