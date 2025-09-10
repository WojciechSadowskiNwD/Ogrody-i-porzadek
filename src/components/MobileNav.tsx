import { useState } from "react";
import { createPortal } from "react-dom";
import Hamburger from "hamburger-react";
import AccordionMenu from "./AccordionMenu";
import styles from "./MobileNav.module.scss";
import { useScrollTo } from "../hooks/useScrollTo";

export default function MobileNav() {
	const [isOpen, setIsOpen] = useState(false);
	const scrollTo = useScrollTo();

	function closeAfterClick(id:string){
		scrollTo(id);
		setIsOpen(false); 
	}


	return (
		<>
			<div className={styles.MobileNav}>
				<Hamburger
					toggled={isOpen}
					toggle={setIsOpen}
					size={34}
				/>
			</div>
            {createPortal(
                <AccordionMenu isOpen={isOpen} onClick={closeAfterClick}/>,
                document.body
            )}
		</>
	);
}
