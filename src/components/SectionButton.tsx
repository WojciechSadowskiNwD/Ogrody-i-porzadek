import BtnValuation from "./BtnValuation";
import styles from "./SectionButton.module.scss";

export default function SectionButton() {
	return (
		<section className={styles.sectionButton}>
			<div className={styles.whiteBlock}>
				<h2 className={styles.title}>Planujesz metamorfozę Twojego ogrodu?</h2>
				<p className={styles.text}>
					Napisz nam czego potrzebujesz, może interesuje Cię usługa również sprzątająca - wszystko ustalimy.
				</p>
				<BtnValuation />
			</div>
		</section>
	);
}
