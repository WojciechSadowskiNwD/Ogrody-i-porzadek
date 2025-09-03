import { useEffect, useState } from "react";
import { ReviewDesktop } from "./ReviewDesktop";
import { ReviewMobile } from "./ReviewMobile";

export default function ReviewBox() {
	const [isDesktop, setIsDesktop] = useState<boolean>(false);

	useEffect(() => {
		if (window.innerWidth >= 768) {
			setIsDesktop(true);
		}
	}, [isDesktop]);

	return <div>{isDesktop ? <ReviewDesktop /> : <ReviewMobile />}</div>;
}

// 3 opinie klientów - mobile same, desktop z fotosami
// 3 mniejsze zdjęcia na rozdzielczosc desktopową

// Firma bardzo profesjonalna, właściciel Pan Paweł bardzo komunikacyjny i doświadczony , pomocny w podejmowaniu dobrych decyzji . Nie ma dla niego rzeczy niemożliwych- potrafi funkcjonalnie i estetycznie zaaranżować ogród , jego pracownicy rzetelnie i dokładnie wszystko wykonuja. Polecam bardzo

// Jestem bardzo zadowolony z usług firmy Ogrody i Porządek – wykonali kompleksowe porządki na naszym osiedlu, łącznie z pielęgnacją zieleni, koszeniem trawy, grabieniem liści i myciem okien w klatkach schodowych. Wszystko sprawnie, w terminie i z dbałością o detale. Świetny kontakt i indywidualne podejście do klienta!

// Firma Pana Pawła to prawdziwi profesjonaliści — od założenia trawnika i nawadniania, przez przycinanie krzewów i drzew, po przygotowanie ogrodu do zimy. Gdy przyszła zima, bez problemu zajęli się też odśnieżaniem. Bardzo polecam za solidność, dokładność i miłą obsługę.
