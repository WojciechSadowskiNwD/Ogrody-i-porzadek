import styles from "./Product.module.scss";

export type ProductProps = {
	bgColor: "yellowBgc" | "brownBgc" | "greenBgc" | "blueBgc";
	img: string;
	extraImgStyle?: "img2" | "img4";
	alt: string;
	title: string;
	services: string[];
};

export default function Product({
	bgColor,
	img,
	alt,
	title, 
	services,
	extraImgStyle,
}: ProductProps) {
	return (
		<div className={`${styles.categoryBlock} ${styles[bgColor]}`}>
			<div className={styles.imgFrame}>
				<img
					className={`${styles.img} ${
						extraImgStyle ? styles[extraImgStyle] : ""
					}`}
					src={img}
					alt={alt}
				/>
			</div>
			<div className={styles.contentBox}>
				<h3 className={styles.contentTitle}>{title}</h3>
				<ul>
					{services.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</div>
		</div>
	); 
}