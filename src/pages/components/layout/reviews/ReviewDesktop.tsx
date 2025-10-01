import img1 from "../../photos/reviews/mowing.png";
import img2 from "../../photos/reviews/trimming.png";
import img3 from "../../photos/reviews/shears.png";
import { ReviewCardMini } from "./ReviewCardMini";
import { useInView } from "../../../../hooks/useInView";
import styles from "./Reviews.module.scss";

export const ReviewDesktop: React.FC = () => {
	const { ref, isVisible } = useInView<HTMLDivElement>();

	return (
		<div className={styles.reviewDesktop}>
			<div
				ref={ref}
				className={`${styles.vertical}  ${isVisible ? styles.visible : ""}`}
			>
				<div className={styles.imgFrame}>
					<img className={styles.img} src={img1} />
				</div>
				<ReviewCardMini
					text="Prawdziwy profesjonalizm firmy. Właściciel bardzo komunikacyjny i doświadczony, pomocny w podejmowaniu dobrych decyzji. Nie ma dla niego rzeczy niemożliwych- potrafi funkcjonalnie i estetycznie zaaranżować ogród, jego pracownicy rzetelnie i dokładnie wszystko wykonuja. Polecam bardzo"
					name="Adam Kowalski"
				/>
			</div>
			<div
				ref={ref}
				className={`${styles.vertical}  ${isVisible ? styles.visible : ""}`}
			>
				<ReviewCardMini
					text="Jestem bardzo zadowolona z usług firmy Ogrody i Porządek – wykonali kompleksowe porządki na naszym osiedlu, łącznie z pielęgnacją zieleni, koszeniem trawy, grabieniem liści i myciem okien w klatkach schodowych. Wszystko sprawnie, w terminie i z dbałością o detale. Świetny kontakt i indywidualne podejście do klienta!"
					name="Małgorzata Wiśniewska"
				/>
				<div className={styles.imgFrame}>
					<img className={styles.img} src={img3} />
				</div>
			</div>
			<div
				ref={ref}
				className={`${styles.vertical}  ${isVisible ? styles.visible : ""}`}
			>
				<div className={styles.imgFrame}>
					<img className={styles.img} src={img2} />
				</div>
				<ReviewCardMini
					text="Firma Pana Pawła to prawdziwi profesjonaliści — od założenia trawnika i nawadniania, przez przycinanie krzewów i drzew, po przygotowanie ogrodu do zimy. Gdy przyszła zima, bez problemu zajęli się też odśnieżaniem. Bardzo polecam za solidność, dokładność i miłą obsługę."
					name="Robert Opolski"
				/>
			</div>
		</div>
	);
};
