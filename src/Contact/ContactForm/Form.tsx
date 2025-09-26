import {
	useEffect,
	useState,
	type ComponentPropsWithoutRef,
	type FormEvent,
} from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setField, resetForm } from "./contactSlice";
import { sendContact } from "../../store/formThunks";
import WindowError from "./WindowError";
import styles from "./Form.module.scss";
import BtnValuation from "../../components/BtnValuation";
import ConfirmSent from "./ConfirmSent";
import { AnimatePresence } from "framer-motion";

type FormProps = ComponentPropsWithoutRef<"form">;

export default function Form({ children }: FormProps) {
	const [windowError, setWindowError] = useState<boolean>(false);
	const [windowSuccess, setWindowSuccess] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const status = useAppSelector((s) => s.contact.status);
	const error = useAppSelector((s) => s.contact.error);

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;

		const formData = new FormData(form);
		const data = Object.fromEntries(formData) as Record<string, string>;

		const name = (data.userName ?? "").toString().trim();
		const email = (data.userEmail ?? "").toString().trim();
		const phone = (data.userPhone ?? "").toString();
		const txtArea = (data.txtArea ?? "").toString();

		// if checkbox not clicked -> false
		const changeToBool = (key: string) => Boolean(data[key]);

		const isNameValid = /^[\p{L}\p{M}0-9 .,'’\-&()]{3,30}$/u.test(name);
		const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
		const phoneDigits = phone.replace(/\D/g, "");
		const isPhoneValid = /^\d{9}$/.test(phoneDigits);

		const hasSelectedServiceOrMessage =
			changeToBool("creatingGarden") ||
			changeToBool("landscaping") ||
			changeToBool("cleaning") ||
			changeToBool("cutting") ||
			txtArea.trim().length >= 4;

		if (
			!isNameValid ||
			!isEmailValid ||
			!isPhoneValid ||
			!hasSelectedServiceOrMessage
		) {
			setWindowError(true);

			if (!isNameValid)
				(form.elements.namedItem("userName") as HTMLInputElement)?.focus();
			else if (!isEmailValid)
				(form.elements.namedItem("userEmail") as HTMLInputElement)?.focus();
			else if (!isPhoneValid)
				(form.elements.namedItem("userPhone") as HTMLInputElement)?.focus();
			else (form.elements.namedItem("txtArea") as HTMLInputElement)?.focus();

			return;
		}

		setWindowError(false);

		dispatch(setField({ field: "userName", value: name }));
		dispatch(setField({ field: "userEmail", value: email }));
		dispatch(setField({ field: "userPhone", value: phoneDigits }));
		dispatch(setField({ field: "txtArea", value: txtArea }));
		dispatch(
			setField({
				field: "creatingGarden",
				value: changeToBool("creatingGarden"),
			})
		);
		dispatch(
			setField({ field: "landscaping", value: changeToBool("landscaping") })
		);
		dispatch(setField({ field: "cleaning", value: changeToBool("cleaning") }));
		dispatch(setField({ field: "cutting", value: changeToBool("cutting") }));

		// send to backend
		const result = await dispatch(sendContact());

		if (sendContact.fulfilled.match(result)) {
			dispatch(resetForm());
			form.reset();
			setWindowSuccess(true);
		}
	}

	const handleClose = () => setWindowError(false);

	useEffect(() => {
		if (windowSuccess === true) {
			const timerId = setTimeout(() => {
				setWindowSuccess(false);
			}, 2000);

			return () => clearTimeout(timerId);
		}
	}, [windowSuccess]);

	return (
		<>
			<form onSubmit={handleSubmit} className={styles.contactForm}>
				{children}
				<BtnValuation formStyle="true">
					{status === "pending" ? "Wysyłam..." : "Wyślij"}
				</BtnValuation>
			</form>
			{windowError && <WindowError closeWin={handleClose} />}
			{status === "error" && <p style={{ color: "crimson" }}>Ups: {error}</p>}
			<AnimatePresence>{windowSuccess ? <ConfirmSent /> : ""}</AnimatePresence>
		</>
	);
}
