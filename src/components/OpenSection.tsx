import type { ReactNode } from "react";
import styles from "./OpenSection.module.scss";

type OpenSectionProps = {
	title: string;
	beforeSpan: string;
	spanTxt?: string;
	afterSpan?: string;
	children?: ReactNode;
};

export default function OpenSection({
	title,
	beforeSpan,
	spanTxt,
	afterSpan,
	children,
}: OpenSectionProps) {
	console.log(children);

	return (
		<div>
			<div className={styles.titleContainer}>
				<h2 className={styles.sectionTitle}>{title}</h2>
			</div>
			{children ? <h2 className={styles.companyName}>{children}</h2> : ""}

			<em className={styles.introText}>
				{beforeSpan}
				<span className={styles.spanA}>{spanTxt}</span> {afterSpan}
			</em>
		</div>
	);
}
