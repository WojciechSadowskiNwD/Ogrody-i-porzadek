import { TopBar } from "./components/TopBar";
import OpenSection from "./components/OpenSection";
import Form from "./ContactForm/Form";
import CustomInput from "./ContactForm/CustomInput";
import Footer from "./components/Footer";
import styles from "./ContactForm/Contact.module.scss";
import "./App.scss";

function Contact() {
	return (
		<div style={{position: "relative"}}>
			<TopBar />
			<section>
				<OpenSection
					title="Kontakt"
					beforeSpan="Wypełnij formularz, a my przygotujemy "
					spanTxt="indywidualną wycenę"
					afterSpan=" dla Twojego ogrodu."
				/>

				<div className="formContainer">
					<Form>
						<CustomInput
							label="Imię i nazwisko/ nazwa firmy"
							placeholder="Twoje dane lub firmy"
							id="userName"
							name="userName"
							type="text"
						/>
						<CustomInput
							label="E-mail"
							placeholder="twojAdres@gmail.com"
							id="userEmail"
							name="userEmail"
							type="email"
						/>
						<CustomInput
							label="Telefon"
							placeholder="+48 123 321 123"
							id="userPhone"
							name="userPhone"
							type="number"
						/>

						<h2 className={`${styles.h2} ${styles.extraMargin}`}>
							Które z usług Cię interesują:
						</h2>
						<CustomInput
							customStyle={true}
							label="Zakładanie ogrodu"
							id="creatingGarden"
							name="creatingGarden"
							type="checkbox"
						/>
						<CustomInput
							customStyle={true}
							label="Pielęgnacja zieleni"
							id="landscaping"
							name="landscaping"
							type="checkbox"
						/>
						<CustomInput
							customStyle={true}
							label="Usługi sprzątające"
							id="cleaning"
							name="cleaning"
							type="checkbox"
						/>
						<CustomInput
							customStyle={true}
							label="Roboty koszące"
							id="cutting"
							name="cutting"
							type="checkbox"
						/>
						<h2 className={styles.h2}>Masz inne prośby?</h2>
						<textarea
							className={styles.ContactTxtArea}
							placeholder="Twoja wiadomość"
							name="txtArea"
							id="txtArea"
							cols={30}
							rows={10}
						></textarea>

						<button>Wyślij</button>
					</Form>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default Contact;
