import OpenSection from "../../ui/OpenSection";
import ReviewBox from "./ReviewBox";

export default function Reviews() {
	return (
		<section>
			<OpenSection 
				title="Opinie"
				beforeSpan="Przekonaj się co mówią o nas obsłużeni klienci."
			/>
			<ReviewBox />
		</section>
	);
}