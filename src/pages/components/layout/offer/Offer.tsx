import projectImg from "../../../components/photos/garden-design-small.jpg";
import createImg from "../../../components/photos/seedling.jpg";
import cuttingImg from "../../../components/photos/garden-cutting.jpg";
import cleaningImg from "../../../components/photos/window-cleaning.jpg";
import Product, { type ProductProps } from "./Product";
import OpenSection from "../../ui/OpenSection";
import styles from "./Offer.module.scss";
import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

const productsData: ProductProps[] = [
	{
		bgColor: "yellowBgc",
		img: projectImg,
		alt: "zdjęcie siedzącego przy stole projektanta, rysującego projekt ogrodu.",
		title: "Projektowanie ogrodów",
		services: [
			"Projekty ogrodów przydomowych",
			"Projekty ogrodów na dużych powierzchniach",
			"Kompleksowe projekty zagospodarowania terenów zielonych",
			"Projekty terenów rekreacyjnych",
			"Projekty systemów nawadniania i oświetlenia",
		],
	},
	{
		bgColor: "brownBgc",
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
		bgColor: "greenBgc",
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
		bgColor: "blueBgc",
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
	const [delayValue, setDelayValue] = useState<number>(0);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1200) {
				setDelayValue(0.5);
			} else {
				setDelayValue(0);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const itemVariants: Variants = {
		hidden: { opacity: 0, x: 60 },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				stiffness: 120,
				damping: 18,
				delay: delayValue,
			},
		},
	};

	return (
		<section>
			<OpenSection
				title="Oferta"
				id="product"
				beforeSpan="Tworzymy ogrody, które zachwycają o każdej porze roku. Od kompleksowych aranżacji po bieżącą "
				spanTxt="pielęgnację terenów zielonych"
				afterSpan="– dbamy o każdy detal. Oferujemy także usługi porządkowe dla osiedli mieszkaniowych. Sprawdź nas!"
			/>

			<div className={styles.layoutProducts}>
				{productsData.map((product) => (
					<motion.div
						key={product.title}
						variants={itemVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.3 }}
					>
						<Product
							bgColor={product.bgColor}
							img={product.img}
							extraImgStyle={product.extraImgStyle}
							alt={product.alt}
							title={product.title}
							services={product.services}
						/>
					</motion.div>
				))}
			</div>
		</section>
	);
}
