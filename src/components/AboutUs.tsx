import styles from "./AboutUs.module.scss";
import Content from "./Content";
import OpenSection from "./OpenSection";
import WhiteSection from "./WhiteSection";

export type ContentDataType = {
	title: string;
	textBlock: TextBlockType[];
};
type TextBlockType = {
	topic: string;
	text: string;
};

const contentData: ContentDataType[] = [
	{
		title: "Co nas wyróżnia",
		textBlock: [
			{
				topic: "Zindywidualizowane podejście",
				text: "Słuchamy Twoich oczekiwań i dostosowujemy projekt do stylu życia oraz możliwości przestrzeni.",
			},
			{
				topic: "Kompletna obsługa",
				text: "Obejmujemy cały proces: od zakładania trawników, przez koszenie i cięcia, po nawadnianie i stałą pielęgnację.",
			},
			{
				topic: "Zaangażowanie i precyzja",
				text: "Klienci podkreślają naszą komunikację, rzetelność i dopinanie detali z dużym zaangażowaniem.",
			},
			{
				topic: "Ekspercka wiedza",
				text: "Wieloletnie doświadczenie zespołu przekładamy na skuteczne i trwałe realizacje.",
			},
		],
	},
	{
		title: "Dlaczego warto z nami współpracować?",
		textBlock: [
			{
				topic: "Lokalnie i nie tylko",
				text: "Działamy również w zakresie całego województwa.",
			},
			{
				topic: "Pełna transparentność i elastyczność",
				text: "Informujemy na każdym etapie, jesteśmy otwarci na sugestie i pytania.",
			},
			{
				topic: "Piękno w praktyce",
				text: "nasi klienci doceniają naszą rzetelność i pasję, dzięki czemu chętnie polecają nasze usługi dalej.",
			},
			{
				topic: "Przystępne ceny",
				text: "Zawsze staramy się być konkurencyjni, jednocześnie świadcząc suługi na najwyższym poziomie.",
			},
		],
	},
];

export default function AboutUs() {
	return (
		<section className={styles.layout}>
			<OpenSection
				title="O nas"
				id="aboutUs"
				beforeSpan="- to lokalna, Toruńska firma wyspecjalizowana w tworzeniu oraz pielęgnacji zielonych przestrzeni — "
				spanTxt="ogrodów estetycznych"
				afterSpan="funkcjonalnych i dopasowanych do Państwa stylu życia. Nasza praca jest pasją, dla tego dokładamy wszelkich starań aby sprostać wymaganiom nawet najbardziej wymagających klientów."
			>
				Ogrody i Porządek Paweł Szymeczko
			</OpenSection>
			<Content data={contentData[0]} />
			<Content data={contentData[1]} />
			<WhiteSection />
		</section>
	);
}
