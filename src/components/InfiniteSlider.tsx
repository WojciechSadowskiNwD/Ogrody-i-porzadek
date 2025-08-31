import {
	useEffect,
	useMemo,
	useRef,
	useState,
	type CSSProperties,
	type ReactNode,
	type TransitionEventHandler,
} from "react";
import styles from "./InfiniteSlider.module.scss";

type InfiniteSliderProps = {
	items: Slide[];
	durationMs: number;
};
type Slide = ReactNode;

function InfiniteSlider({ items, durationMs }: InfiniteSliderProps) {
	const [index, setIndex] = useState(0);
	const [animate, setAnimate] = useState(true);
	const extended = useMemo(() => [...items, ...items], [items]);
	
	const indexRef = useRef(index);
	indexRef.current = index;
	const timerRef = useRef<number | null>(null);

	const startAuto = () => {
		if(timerRef.current) clearInterval(timerRef.current);
		timerRef.current = setInterval(()=> setIndex( i=> i+1 ), durationMs);
	}
	const stopAuto = () => {
		if(timerRef.current) clearInterval(timerRef.current);
		timerRef.current = null;
	}
	const handleMouseEnter = () => {
		stopAuto();
	}
	const handleMouseLeave = () => {
		startAuto();
	}
	const handleNext = () => {
		stopAuto();
		setAnimate(true);
		setIndex( i => i+1 );
		startAuto();
	}
	const handlePrev = () => {
		stopAuto();
		setAnimate(true);
		setIndex( i => i-1 );
		startAuto();
	}

	useEffect(()=>{
		if(!extended.length) return;
		startAuto();
		return () => stopAuto();
	}, [extended.length]);
	

	const handleTransitionEnd: TransitionEventHandler<HTMLDivElement> = (e) => {
		if(e.propertyName !== "transform") return;

		// if index == 4 set 0!
		if (indexRef.current == items.length) {
			setAnimate(false);
			requestAnimationFrame(() => {
				setIndex(0);
				requestAnimationFrame(() => setAnimate(true));
			});
		}
	};

	const trackStyle: CSSProperties = {
		transform: `translateX(-${index * 100}%)`,
		transition: animate ? `transform 600ms ease` : "none",
	};


	return (
		<div className={styles.sliderContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<div className={styles.viewport}>
				<div
					className={styles.track}
					style={trackStyle}
					onTransitionEnd={handleTransitionEnd}
				>
					{extended.map((item, i) => (
						<div className={styles.slide} key={i}>
							{item}
						</div>
					))}
				</div>
			</div>

			<button className={`${styles.btn} ${styles.btnNext}`} onClick={handleNext}>
				<i className="fa-solid fa-caret-right"></i>
			</button>
			<button className={`${styles.btn} ${styles.btnPrev}`} onClick={handlePrev}>
				<i className="fa-solid fa-caret-left"></i>
			</button>
		</div>
	);
}

export default InfiniteSlider;