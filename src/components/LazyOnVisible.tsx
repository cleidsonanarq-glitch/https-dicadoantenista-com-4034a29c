import { ReactNode, Suspense, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  /** Reserve min-height to avoid CLS while content is offscreen. */
  minHeight?: number;
  rootMargin?: string;
}

/**
 * Mounts children only when the placeholder enters the viewport.
 * Reserves vertical space to keep CLS at 0.
 */
const LazyOnVisible = ({ children, minHeight = 400, rootMargin = "300px" }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible || !ref.current) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [visible, rootMargin]);

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible && <Suspense fallback={null}>{children}</Suspense>}
    </div>
  );
};

export default LazyOnVisible;
