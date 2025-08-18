import BtnValuation from "./BtnValuation";
import styles from "./Header.module.scss";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<h1 className={styles.title}>
					Zadbamy o Twój ogród. Projektowanie i pielęgnacja
				</h1>
				<BtnValuation />
			</div>
		</header>
	);
}