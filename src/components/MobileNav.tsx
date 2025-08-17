import { useState } from "react";
import { createPortal } from "react-dom";
import Hamburger from "hamburger-react";
import AccordionMenu from "./AccordionMenu";
import styles from "./MobileNav.module.scss";

export default function MobileNav() {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<div className={styles.MobileNav}>
				<Hamburger
					toggled={isOpen}
					toggle={setOpen}
					size={34}
				/>
			</div>
            {createPortal(
                <AccordionMenu isOpen={isOpen}/>,
                document.body
            )}
		</>
	);
}
