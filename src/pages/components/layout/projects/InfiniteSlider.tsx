import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode, TransitionEventHandler, CSSProperties } from "react";
import { motion } from "framer-motion";
import styles from "./InfiniteSlider.module.scss";

type InfiniteSliderProps = {
	items: Slide[];
	durationMs: number;
};
type Slide = ReactNode;

// framer-motion: variants for buttons
const btnVariants = {
	initial: {
		scale: 1,
		y: 0,
		boxShadow: "inset 0px 0px 15px rgba(255,255,255,0.15)",
	},
	hover: { scale: 1.05, y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.25) " },
	tap: { scale: 0.9, y: 0 },
};

function InfiniteSlider({ items, durationMs }: InfiniteSliderProps) {
	const [index, setIndex] = useState(0);
	const [animate, setAnimate] = useState(true);
	const extended = useMemo(() => [...items, ...items], [items]);

	const indexRef = useRef(index);
	indexRef.current = index;

	const timerRef = useRef<number | null>(null);
	const observeRef = useRef<HTMLDivElement | null>(null);

	const startAuto = useCallback(() => {
		if (timerRef.current != null) return;
		timerRef.current = window.setInterval(
			() => setIndex((i) => i + 1),
			durationMs
		);
	}, [durationMs]);

	const stopAuto = useCallback(() => {
		if (timerRef.current != null) {
			window.clearInterval(timerRef.current);
			timerRef.current = null;
		}
	}, []);

	const handleMouseEnter = () => stopAuto();
	const handleMouseLeave = () => startAuto();

	const handleNext = () => {
		stopAuto();
		setAnimate(true);
		setIndex((i) => i + 1);
		startAuto();
	};

	const handlePrev = () => {
		stopAuto();
		setAnimate(true);
		setIndex((i) => i - 1);
		startAuto();
	};

	useEffect(() => {
		const el = observeRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				const halfVisible =
					entry.isIntersecting && entry.intersectionRatio >= 0.6;
				if (halfVisible) startAuto();
				else stopAuto();
			},
			{ threshold: [0, 0.7, 1] }
		);

		observer.observe(el);
		return () => {
			stopAuto();
			observer.disconnect();
		};
	}, [startAuto, stopAuto]);

	// Pause when card is not active
	useEffect(() => {
		const onVisible = () => (document.hidden ? stopAuto() : startAuto());
		document.addEventListener("visibilitychange", onVisible);
		return () => document.removeEventListener("visibilitychange", onVisible);
	}, [startAuto, stopAuto]);

	const handleTransitionEnd: TransitionEventHandler<HTMLDivElement> = (e) => {
		if (e.propertyName !== "transform") return;

		const i = indexRef.current;

		//guard -- when index jump to more
		if (i >= items.length || i < 0) {
			setAnimate(false);
			const next = ((i % items.length) + items.length) % items.length;

			requestAnimationFrame(() => {
				setIndex(next);
				requestAnimationFrame(() => setAnimate(true));
			});
		}
	};

	const trackStyle: CSSProperties = {
		transform: `translateX(-${index * 100}%)`,
		transition: animate ? `transform 800ms ease` : "none",
	};

	return (
		<div
			className={styles.sliderContainer}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			ref={observeRef}
		>
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

			<motion.button
				className={`${styles.btn} ${styles.btnNext}`}
				onClick={handleNext}
				variants={btnVariants}
				initial="initial"
				whileHover="hover"
				whileTap="tap"
				transition={{ type: "spring", stiffness: 320, damping: 18, mass: 0.4 }}
			>
				<i className="fa-solid fa-caret-right" />
			</motion.button>
			<motion.button
				className={`${styles.btn} ${styles.btnPrev}`}
				onClick={handlePrev}
				variants={btnVariants}
				initial="initial"
				whileHover="hover"
				whileTap="tap"
				transition={{ type: "spring", stiffness: 320, damping: 18, mass: 0.4 }}
			>
				<i className="fa-solid fa-caret-left" />
			</motion.button>
		</div>
	);
}

export default InfiniteSlider;