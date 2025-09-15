import styles from "./WindowError.module.scss";

type WindowErrorProps = {
	closeWin: (value: boolean) => void;
};

export default function WindowError({ closeWin }: WindowErrorProps) {
	return (
		<div className={styles.error_window}>
			<h2 className={styles.h2}>Uzupełnij proszę brakujące pola!</h2>
			
			<ul>
				<li>Imię nazwisko/ nazwa firmy muszą zawierać od 5 do, maksymalnie 20 znków.</li>
				<li>Wiek może zawierać wyłącznie cyfry, maksymalna wartość to 99</li>
				<li>Numer telefonu powinien składać się z 9 cyfr.</li>
				<li>Zaznacz conajmniej jedną z usług, lub zostaw komentarz.</li>
			</ul>

			<button className={styles.btn_close_window} onClick={() => closeWin(false)}>
				<i className="fa-solid fa-x"></i>
			</button>
		</div>
	);
}