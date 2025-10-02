import { motion } from "framer-motion";
import styles from "./ConfirmSent.module.scss";

export default function ConfirmSent() {
	return (
			<motion.div
				className={styles.confirmSent}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h2 className={styles.h2}>
					Wiadomość wysłana{" "}
					<span>
						<i className="fa-regular fa-circle-check"></i>
					</span>
				</h2>
			</motion.div>
	);
}