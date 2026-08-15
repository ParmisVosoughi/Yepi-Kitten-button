import { useCallback, useEffect, useRef, useState } from "react";
import catGif from "@/assets/yippee-cat.gif";

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

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const handleClick = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setBurstKey(Date.now());
    timeoutRef.current = setTimeout(() => setBurstKey(null), STAY_MS);
  }, []);

  return (
    <div className={`relative inline-flex flex-col items-center ${className ?? ""}`}>
      <button className="spsnake-btn" type="button" onClick={handleClick}>
        <div className="spsnake-outer">
          <div className="spsnake-inner">
            <span>{label}</span>
          </div>
        </div>
      </button>

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
