import { useEffect, useState } from "react";
import { ReviewDesktop } from "./ReviewDesktop";
import { ReviewMobile } from "./ReviewMobile";

export default function ReviewBox() {
	const [isDesktop, setIsDesktop] = useState<boolean>(false);

	useEffect(() => {
		if (window.innerWidth >= 992) {
			setIsDesktop(true);
		}
	}, [isDesktop]);

	return <div>{isDesktop ? <ReviewDesktop /> : <ReviewMobile />}</div>;
}