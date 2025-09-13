import type { ComponentPropsWithoutRef, FormEvent } from "react";
import styles from "./Form.module.scss";

type FormProps = ComponentPropsWithoutRef<"form">;

export default function Form({ children }: FormProps) {
	

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		// Here we get the data from all inputs
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData);
		const { userName, userEmail, userPhone } = data;
        
        console.log(data);
		
        // Validation:
		const isNameCorr =
			typeof userName === "string" &&
			/^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]{3,9}$/.test(userName);
		const isEmailCorr =
			typeof userEmail === "string" &&
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail);
		const isPhoneCorr = typeof userPhone === "string" && /^[0-9]{9}$/.test(userPhone);
	}

	return (
		<form onSubmit={handleSubmit} className={styles.contactForm}>
			{children}
		</form>
	);
}