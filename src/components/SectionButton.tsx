import { Link } from "react-router-dom";
import BtnValuation from "./BtnValuation";
import styles from "./SectionButton.module.scss";

export default function SectionButton() {
	return (
		<section className={styles.sectionButton}>
			<div className={styles.whiteBlock}>
				<h2 className={styles.title}>Planujesz metamorfozę Twojego ogrodu?</h2>
				<p className={styles.text}>
					Napisz nam czego potrzebujesz, może interesuje Cię usługa również
					sprzątająca - wszystko ustalimy.
				</p>
				<Link to="/contact">
					<BtnValuation />
				</Link>
			</div>
		</section>
	);
}
