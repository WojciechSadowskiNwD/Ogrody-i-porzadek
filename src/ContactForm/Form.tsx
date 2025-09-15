import { useState, type ComponentPropsWithoutRef, type FormEvent } from "react";
import { useAppDispatch } from "../hooks/redux";
import { addSubmission } from "./contactSlice";
import styles from "./Form.module.scss";
import WindowError from "./WindowError";

type FormProps = ComponentPropsWithoutRef<"form">;

export default function Form({ children }: FormProps) {
	const [checkFlag, setCheckFlag] = useState(true);
	const [windowError, setWindowError] = useState(false);
	const dispatch = useAppDispatch();

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;

		const formData = new FormData(form);
		const data = Object.fromEntries(formData) as Record<string, string>;

		const { userName, userEmail, userPhone, txtArea = "" } = data;

		//if checkbox not clicked => false
		const turnToBoolean = (key: string) => Boolean(data[key]);

		// Validation:
		const isNameCorr =
			typeof userName === "string" &&
			/^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]{3,15}$/.test(userName.trim());
		const isEmailCorr =
			typeof userEmail === "string" &&
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail.trim());
		const isPhoneCorr =
			typeof userPhone === "string" && /^[0-9]{9}$/.test(userPhone);

		if (
			data.creatingGarden ||
			data.landscaping ||
			data.cleaning ||
			data.cutting ||
			txtArea.length >= 5
		) {
			setCheckFlag(false);
			console.log("conajmniej jedno zaznaczono - OK");
		} else {
			setCheckFlag(true);
			console.log("dodatkowa flaga błędów aktywna! - BŁĄD");
		}

		if (!isNameCorr || !isEmailCorr || !isPhoneCorr || checkFlag) {
			// if validation here false, set on this input focus
			setWindowError(true);

			if (!isNameCorr)
				(form.elements.namedItem("userName") as HTMLInputElement).focus();
			else if (!isEmailCorr)
				(form.elements.namedItem("userEmail") as HTMLInputElement).focus();
			else if (!isPhoneCorr)
				(form.elements.namedItem("userPhone") as HTMLInputElement).focus();
			else (form.elements.namedItem("txtArea") as HTMLInputElement).focus();

			// return;
		}
		if (
			isNameCorr &&
			isEmailCorr &&
			isPhoneCorr &&
			(txtArea.length > 5 ||
				data.creatingGarden ||
				data.landscaping ||
				data.cleaning ||
				data.cutting)
		) {
			setWindowError(false);
			console.log("warunki spełnione: ");

			dispatch(
				addSubmission({
					userName,
					userEmail,
					userPhone,
					txtArea,
					creatingGarden: turnToBoolean("creatingGarden"),
					landscaping: turnToBoolean("landscaping"),
					cleaning: turnToBoolean("cleaning"),
					cutting: turnToBoolean("cutting"),
				})
			);

			form.reset();
		}
	}

	// Function to close error window!
	const handleClose = () => {
		setWindowError(false);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className={styles.contactForm}>
				{children}
			</form>
			{windowError && <WindowError closeWin={handleClose} />}
		</>
	);
}




// The Form component has been expanded – form validation. // The WindowError component has been created – displaying a window with information about incorrectly filled input fields. // The redux toolkit library has been installed and a set of required files has been created: store.ts, hooks.ts – facilitating the writing of useSelector and useDispatch thanks to the built-in appropriate types. // Created contactSlice - redux logic, inside 2 functions adding and removing data from initialState (this is where data from the form goes). Wrapped App in Provider.