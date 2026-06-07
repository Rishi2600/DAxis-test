import { useEffect, useState } from "react";

export function useCountUp(target: number, duration = 1800, active = false) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;

    const step = (ts: number) => {
      if (!start) start = ts;
      const prog = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(prog * target));
      if (prog < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [active, target, duration]);

  return val;
}