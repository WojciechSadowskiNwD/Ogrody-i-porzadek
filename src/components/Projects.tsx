import InfiniteSlider from "./InfiniteSlider";
import OpenSection from "./OpenSection";
import styles from "./InfiniteSlider.module.scss";

export default function Projects() {
	return (
		<section>
			<OpenSection
				title="Realizacje"
				beforeSpan="Ogrody, które zostały przez nas stworzone z najwyższą starannością oraz precyzją."
				spanTxt=" Poniżej przykładowe realizacje"
			/>

      <InfiniteSlider
        items={[
          <div className={styles.demo1}>1</div>,
          <div className={styles.demo2}>2</div>,
          <div className={styles.demo3}>3</div>,
          <div className={styles.demo4}>4</div>,
        ]}
      />

		</section>
	);
}