import styles from "./SlideCard.module.scss";

type SliceCardProps = {
	image: string;
	serviceTitle: string;
	textContent: string;
};

export default function SlideCard({
	image,
	serviceTitle,
	textContent,
}: SliceCardProps) {
	return (
		<div className={styles.slideCard}>
			<div className={styles.imgFrame}>
				<img
					className={styles.img}
					src={image}
					alt="Fotografie przedstawiają poszczególne realizacje prac w ogrodach klientów."
				/>
			</div>
			<div className={styles.text}>
				<div className={styles.serviceName}>
					<h2>{serviceTitle}</h2>
				</div>
				<div className={styles.serviceContent}>
					<p>{textContent}</p>
				</div>
			</div>
		</div>
	);
}
