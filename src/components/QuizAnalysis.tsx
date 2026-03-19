import { useEffect, useState } from "react";

interface QuizAnalysisProps {
  transitioning: boolean;
  onDone: () => void;
}

const steps = [
  "Identificando padrões",
  "Cruzando com princípios espirituais",
  "Preparando seu diagnóstico",
];

const QuizAnalysis = ({ transitioning, onDone }: QuizAnalysisProps) => {
  const [completedSteps, setCompletedSteps] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    steps.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setCompletedSteps(i + 1);
        }, (i + 1) * 1200)
      );
    });
    // After all steps, proceed
    timers.push(
      setTimeout(() => {
        onDone();
      }, (steps.length + 1) * 1200)
    );
    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <div
      className={`min-h-[80vh] flex flex-col items-center justify-center text-center transition-opacity duration-400 ${
        transitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="opacity-0 animate-fade-up">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground leading-tight mb-8">
          Analisando suas respostas...
        </h2>

        <div className="space-y-4 mb-8 text-left max-w-xs mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 font-body text-base transition-all duration-500 ${
                completedSteps > i
                  ? "text-foreground"
                  : "text-muted-foreground/50"
              }`}
            >
              <span
                className={`text-lg transition-all duration-500 ${
                  completedSteps > i ? "text-primary" : "text-muted-foreground/30"
                }`}
              >
                {completedSteps > i ? "✔" : "○"}
              </span>
              {step}
            </div>
          ))}
        </div>

        <p className="font-body text-sm text-muted-foreground italic">
          Isso leva alguns segundos...
        </p>
      </div>
    </div>
  );
};

export default QuizAnalysis;
