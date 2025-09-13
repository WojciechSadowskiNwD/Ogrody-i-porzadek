import { type ComponentPropsWithoutRef } from "react";
import styles from "./CustomInput.module.scss";

type CustomInputProps = {
	label: string;
	placeholder?: string;
	id: string;
	customStyle?: boolean;
} & ComponentPropsWithoutRef<"input">;

function CustomInput({
	customStyle,
	label,
	placeholder,
	id,
	name,
	...props
}: CustomInputProps) {
	return (
		<p
			className={`${styles.customInputBox} ${
				customStyle ? styles.customStyle : ""
			}`}
		>
			<label className={styles.customInputLabel} htmlFor={id}>
				{label}
			</label>
			<input
				className={styles.customInput}
				id={id}
				name={name ?? id}
				placeholder={placeholder}
				{...props}
			/>
		</p>
	);
}

export default CustomInput;