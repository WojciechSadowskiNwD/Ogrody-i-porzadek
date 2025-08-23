import projectImg from "../assets/photos/projektowanie-ogrodów-small.jpg";
import createImg from "../assets/photos/zakladanie-ogrodu.jpg";
import cuttingImg from "../assets/photos/garden-cutting.png";
import cleaningImg from "../assets/photos/window-cleaning.png";
import type { ProductProps } from "./Product";
import Product from "./Product";
import styles from "./Offer.module.scss";

const productsData: ProductProps[] = [
	{
		bgColor: "firstBgc",
		img: projectImg,
		alt: "zdjęcie siedzącego przy stole projektanta, rysującego projekt ogrodu.",
		title: "Projektowanie ogrodów",
		services: [
			"Projekty ogrodów przydomowych",
			"Projekty ogrodów na dużych powierzchniach",
			"Kompleksowe projekty zagospodarowania terenów zielonych",
			"Projekty terenów rekreacyjnych, parków miejskich",
			"Projekty systemów nawadniania i oświetlenia",
		],
	},
	{
		bgColor: "secondBgc",
		img: createImg,
		extraImgStyle: "img2",
		alt: "Ogrodnik próbuje zasadzić młodą roślinę w ziemii.",
		title: "Zakładanie ogrodów",
		services: [
			"Kompleksowe zakładanie ogrodów",
			"Prace ziemne",
			"Zakładanie trawników",
			"Nasadzenia roślinne",
			"Altany, pergole, oczka wodne",
		],
	},
	{
		bgColor: "firstBgc",
		img: cuttingImg,
		extraImgStyle: "img4",
		alt: "Ogrodnik przycinający żyopłot, w tle sosna a za nią szerokie schody przypominające te znane z szkół publicznych.",
		title: "Pielęgnacja ogrodów",
		services: [
			"Cięcia roślin",
			"Wertykulacja i areacja",
			"Nawożenie roślin",
			"Zabezpieczanie przed insektami, chorobami, opryski",
			"Koszenie oraz sprzątanie",
		],
	},
	{
		bgColor: "fourthBgc",
		img: cleaningImg,
		extraImgStyle: "img2",
		alt: "Okno pokryte płynem czyszczącym, myte za pomocą niebieskiej ściągaczki.",
		title: "Usługi sprzątające",
		services: [
			"Dbanie o czystość obejścia",
			"Sprzątanie klatek schodowych",
			"Mycie okien - osiedla",
			"Grabienie liści",
			"Odśnieżanie zimą",
		],
	},
];

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

			{productsData.map((product) => (
				<Product
					key={product.title}
					bgColor={product.bgColor}
					img={product.img}
					extraImgStyle={product.extraImgStyle}
					alt={product.alt}
					title={product.title}
					services={product.services}
				/>
			))}
		</section>
	);
}
