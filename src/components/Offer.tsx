import projectImg from "../assets/photos/projektowanie-ogrodów-small.jpg";
import createImg from "../assets/photos/zakladanie-ogrodu.jpg";
import styles from "./Offer.module.scss";

export default function Offer() {
	return (
		<section>
			<h2 className={styles.sectionTitle}>Oferta</h2>
			<div className={styles.introText}>
				W pełni kompleksowa obsługa — zaprojektujemy wymarzony ogród,{" "}
				<span className={styles.spanA}>zadbamy o Państwa zieleń</span>,
				wykonujemy również usługi sprzątające dla osiedli mieszkaniowych.
				<p>Sprawdź nas!</p>
			</div>

			{/* First offer */}
			<div className={`${styles.categoryBlock} ${styles.firstBgc}`}>
				<div className={styles.imgFrame}>
					<img
						className={styles.img}
						src={projectImg}
						alt="zdjęcie siedzącego przy stole projektanta, rysującego projekt ogrodu."
					/>
				</div>

				<div className={styles.contentBox}>
					<h3 className={styles.contentTitle}>Projektowanie ogrodów</h3>
					<ul>
						<li>Projekty ogrodów przydomowych</li>
						<li>Projekty ogrodów na dużych powierzchniach</li>
						<li>Kompleksowe projekty zagospodarowania terenów zielonych</li>
						<li>Projekty terenów rekreacyjnych, parków miejskich</li>
						<li>Projekty systemów nawadniania i oświetlenia</li>
					</ul>
				</div>
			</div>

			<div className={styles.categoryBlock}>
				<div className={styles.imgFrame}>
					<img
					// do zmiany
						className={`${styles.img} ${styles.img2}`}
						src={createImg}
						alt="Ogrodnik próbuje zasadzić młodą roślinę w ziemii."
					/>
				</div>

				<div className={styles.contentBox}>
					<h3 className={styles.contentTitle}>Zakładanie ogrodów</h3>
					<ul>
						<li>Kompleksowe zakładanie ogrodów</li>
						<li>Prace ziemne</li>
						<li>Zakładanie trawników</li>
						<li>Nasadzenia roślinne</li>
						<li>Altany, pergole, oczka wodne, inne</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
