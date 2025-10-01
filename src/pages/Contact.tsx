import { TopBar } from "./components/layout/topBar/TopBar";
import ContactHeader from "./components/contact/ContactHeader";
import OpenSection from "./components/ui/OpenSection";
import Form from "./components/contact/form/Form";
import CustomInput from "./components/contact/form/CustomInput";
import Footer from "./components/layout/footer/Footer";
import styles from "./components/contact/Contact.module.scss";
import "../styles/App.scss";

function Contact() {
	return (
		<div style={{ position: "relative" }}>
			<TopBar />
			<ContactHeader />
			<section className="contactSection">
				<OpenSection
					title="Kontakt"
					beforeSpan="Wypełnij formularz, a my przygotujemy "
					spanTxt="indywidualną wycenę"
					afterSpan=" dla Twojego ogrodu."
				/>

				<div className="formContainer">
					<Form>
						<div className={styles.inputBox}>
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
						</div>
						<div className={styles.customInputBox}>
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
						</div>
						<div className={styles.txtAreaBox}>
							<h2 className={styles.h2}>Masz inne prośby?</h2>
							<textarea
								className={styles.ContactTxtArea}
								placeholder="Twoja wiadomość"
								name="txtArea"
								id="txtArea"
								cols={30}
								rows={10}
							></textarea>
						</div>
					</Form>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default Contact;
