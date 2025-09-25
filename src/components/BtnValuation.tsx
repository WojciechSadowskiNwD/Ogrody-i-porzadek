import type { ReactNode } from "react";
import styles from "./BtnValuation.module.scss";

type BtnValuationProps = {
	children?: ReactNode;
	formStyle?: string;
};

export default function BtnValuation({ children, formStyle }: BtnValuationProps) {
	return (
		<button className={`${styles.btn_valuation} ${formStyle ? styles.btnForm : ''}`}>
			{children ? children : "Umów wycenę"}
		</button>
	);
}
