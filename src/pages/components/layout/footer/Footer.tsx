import styles from "./Footer.module.scss";

export default function Footer() {
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = currentDate.getMonth() + 1;

	return (
		<footer className={`${styles.footer}`}>
			<div className={styles.bgShadow}>
				<h2 className={styles.companyName}>
					Ogrody i porządek Paweł Szymeczko
				</h2>

				<div className={styles.contentBox}>
					<div className={styles.textInfo}>
						<h3>Informacje</h3>
						<p>email: <span>adresFirmy@wp.pl</span></p>
						<p>telefon: <span>+48 765 432 199</span></p>
						<p>adres: <span>00-123 Warszawa</span></p>
						<p className={styles.lastParagraph}><span>ul. Przykładowa 16/1</span></p>
					</div>

					<div className={styles.iconsMedia}>
						<h3>Jesteśmy też</h3>
						<a href="https://www.facebook.com/"><i className="fa-brands fa-square-facebook"></i></a>
						<a href="https://pl.pinterest.com/"><i className="fa-brands fa-pinterest"></i></a>
						<a href="https://pl.linkedin.com/"><i className="fa-brands fa-linkedin"></i></a>
					</div>
				</div>
			</div>

			<div className={styles.footerBottom}>
				<div className={styles.overline}></div>
				<p>Design & Development: <span><a href="https://www.facebook.com/wojciech.sadowski.119">SadowskyDev</a></span> - &copy; {`${month}.${year}`}</p>
			</div>
		</footer>
	);
}