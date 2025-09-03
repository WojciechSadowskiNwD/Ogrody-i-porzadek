import OpenSection from "./OpenSection";
import ReviewBox from "./ReviewBox";

export default function Reviews() {
	return (
		<section>
			<OpenSection
				title="Opinie"
				beforeSpan="Przekonaj się co mówią o nas klienci."
			/>
            <ReviewBox />
		</section>
	);
}