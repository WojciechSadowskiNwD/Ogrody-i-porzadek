import { motion, type Variants } from "framer-motion";
import type { ContentDataType } from "./AboutUs";
import styles from "./Content.module.scss";

const VIEWPORT_TITLE = {
  once: true,
  amount: "all" as const,       
  margin: "-15% 0px -15% 0px",
};

const VIEWPORT_ITEM = {
  once: true,
  amount: 0.75,                 
  margin: "0px 0px 15% 0px",
} as const;

const itemContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.55,   
			staggerChildren: 0.55,
    },
  },
};

const titleIn: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: .8, ease: [0.22, 1, 0.36, 1] },
  },
};

const textIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

type ContentProps = { data: ContentDataType };

export default function Content({ data }: ContentProps) {
  const { title, textBlock } = data;

  return (
    <>
      <motion.h3
        className={styles.contentTitle}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_TITLE}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h3>

      <div className={styles.contentBox}>
        {textBlock.map((item, i) => (
          <motion.div
            key={`${item.topic}-${i}`}
            variants={itemContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ITEM}
          >
            <motion.div className={styles.titleBox} variants={titleIn}>
              <h4 className={styles.subtitle}>
                <i className="fa-solid fa-circle-check"></i> {item.topic}
              </h4>
            </motion.div>
            <motion.p className={styles.content} variants={textIn}>
              {item.text}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
