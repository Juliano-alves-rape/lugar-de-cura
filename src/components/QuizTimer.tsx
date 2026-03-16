import { useEffect, useState } from "react";

const TIMER_DURATION = 15 * 60; // 15 minutes

const QuizTimer = () => {
  const [seconds, setSeconds] = useState(() => {
    const saved = sessionStorage.getItem("quiz-timer-end");
    if (saved) {
      const remaining = Math.max(0, Math.floor((parseInt(saved) - Date.now()) / 1000));
      return remaining;
    }
    const end = Date.now() + TIMER_DURATION * 1000;
    sessionStorage.setItem("quiz-timer-end", end.toString());
    return TIMER_DURATION;
  });

  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => {
      setSeconds((s) => Math.max(0, s - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-2 py-2 px-4">
        <span className="font-body text-xs tracking-widest uppercase text-primary-foreground/70">
          Oferta especial expira em
        </span>
        <span className="font-display text-lg font-semibold text-gold tabular-nums">
          {String(minutes).padStart(2, "0")}:{String(secs).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default QuizTimer;
