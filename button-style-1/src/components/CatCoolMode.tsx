import { useCallback, useEffect, useRef, useState } from "react";
import catGif from "@/assets/yippee-cat.gif";

const LAYERS = [
  { delay: "0s", duration: "25s" },
  { delay: "0.15s", duration: "15.9s" },
  { delay: "0.53s", duration: "26.4s" },
  { delay: "0.45s", duration: "17.8s" },
  { delay: "1.6s", duration: "19.2s" },
  { delay: "1.6s", duration: "29.2s" },
  { delay: "1.6s", duration: "20.2s" },
];

const STAY_MS = 5000;

type CatCoolModeProps = {
  label?: string;
  /** Rendered size of the jumping cat in px */
  catSize?: number;
  className?: string;
};

export function CatCoolMode({ label = "Start", catSize = 150, className }: CatCoolModeProps) {
  const [burstKey, setBurstKey] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    },
    [],
  );

  const handleClick = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setBurstKey(Date.now());
    timeoutRef.current = setTimeout(() => setBurstKey(null), STAY_MS);
  }, []);

  return (
    <div className={`relative inline-flex flex-col items-center ${className ?? ""}`}>
      <div className="btn-wrapper" onClick={handleClick}>
        <div className="light" />
        {LAYERS.map((l, i) => (
          <div
            key={i}
            className="gradient-layer"
            style={{ animationDelay: l.delay, animationDuration: l.duration }}
          />
        ))}
        <button className="gradient-btn" type="button">
          {label}
        </button>
        <div className="text-overlay">{label}</div>
      </div>

      {burstKey !== null && (
        <div className="cat-pop-slot" aria-hidden="true">
          <img
            key={burstKey}
            src={catGif}
            alt=""
            draggable={false}
            className="cat-pop"
            style={{ width: catSize, ["--cat-stay" as string]: `${STAY_MS}ms` }}
          />
        </div>
      )}
    </div>
  );
}

export default CatCoolMode;
