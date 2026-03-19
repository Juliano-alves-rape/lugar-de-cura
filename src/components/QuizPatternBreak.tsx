interface QuizPatternBreakProps {
  transitioning: boolean;
  onContinue: () => void;
}

const QuizPatternBreak = ({ transitioning, onContinue }: QuizPatternBreakProps) => {
  return (
    <div
      className={`min-h-[80vh] flex flex-col items-center justify-center text-center transition-opacity duration-400 ${
        transitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="opacity-0 animate-fade-up">
        <p className="text-4xl mb-6">⚠️</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground leading-tight mb-4">
          Estamos analisando suas respostas e identificando padrões...
        </h2>
        <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
          Falta pouco para o seu diagnóstico espiritual.
        </p>
      </div>

      <button
        onClick={onContinue}
        className="opacity-0 animate-fade-up px-10 py-4 bg-primary text-primary-foreground font-body font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
        style={{ animationDelay: "300ms" }}
      >
        Continuar
      </button>
    </div>
  );
};

export default QuizPatternBreak;
