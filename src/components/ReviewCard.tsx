import styles from "./ReviewCard.module.scss";

type Props = {
	text: string;
	name: string;
};

export const ReviewCard: React.FC<Props> = ({ text, name }) => {
	return (
		<div className={styles.reviewCard}>
			<div className={styles.quoteBar}>
				<div className={styles.quote}>
					<i className="fa-solid fa-quote-right"></i>
				</div>
			</div>
			<p className={styles.text}>{text}</p>
			<p className={styles.customerName}>{name}</p>
		</div>
	);
};
