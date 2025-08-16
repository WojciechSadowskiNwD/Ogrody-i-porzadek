import { useEffect, useRef, useState } from "react";

type Options = {
  threshold?: number;
  minMotion?: number;
};

export function useAutoHideTopbar(
  { threshold = 100, minMotion = 5 }: Options = {}
) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastYRef = useRef<number>(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    // set start position
    lastYRef.current = window.scrollY;

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const lastY = lastYRef.current;
        const diffrent = Math.abs(currentY - lastY);

        setScrolled(currentY > 0);

        if (diffrent >= minMotion) {
          if (currentY <= threshold) {
            setHidden(false);
          } else {
            setHidden(currentY > lastY);
          }
          lastYRef.current = currentY;
        }

        tickingRef.current = false;
      });
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold, minMotion]);

  return { hidden, scrolled };
}