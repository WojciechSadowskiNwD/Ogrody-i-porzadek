import { ReviewCard } from "./reviewCard";
import styles from "./ReviewMobile.module.scss";

export const ReviewMobile: React.FC = () => {
	return (
		<div className={styles.reviewsBox}>
			<ReviewCard
				text="Prawdziwy profesjonalizm firmy. Właściciel bardzo komunikacyjny i doświadczony, pomocny w podejmowaniu dobrych decyzji. Nie ma dla niego rzeczy niemożliwych- potrafi funkcjonalnie i estetycznie zaaranżować ogród, jego pracownicy rzetelnie i dokładnie wszystko wykonuja. Polecam bardzo"
				name="Adam Kowalski"
			/>
			<ReviewCard
				text="Jestem bardzo zadowolona z usług firmy Ogrody i Porządek – wykonali kompleksowe porządki na naszym osiedlu, łącznie z pielęgnacją zieleni, koszeniem trawy, grabieniem liści i myciem okien w klatkach schodowych. Wszystko sprawnie, w terminie i z dbałością o detale. Świetny kontakt i indywidualne podejście do klienta!"
				name="Małgorzata Wiśniewska"
			/>
			<ReviewCard
				text="Firma Pana Pawła to prawdziwi profesjonaliści — od założenia trawnika i nawadniania, przez przycinanie krzewów i drzew, po przygotowanie ogrodu do zimy. Gdy przyszła zima, bez problemu zajęli się też odśnieżaniem. Bardzo polecam za solidność, dokładność i miłą obsługę."
				name="Robert Opolski"
			/>
		</div>
	);
};
