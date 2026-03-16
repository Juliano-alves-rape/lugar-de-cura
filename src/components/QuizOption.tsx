interface QuizOptionProps {
  text: string;
  selected: boolean;
  onClick: () => void;
  index: number;
}

const QuizOption = ({ text, selected, onClick, index }: QuizOptionProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-5 rounded-lg border-2 transition-all duration-300 font-body text-sm md:text-base leading-relaxed opacity-0 animate-fade-up ${
        selected
          ? "border-primary bg-primary/10 shadow-md"
          : "border-border bg-card hover:border-primary/40 hover:bg-secondary/50"
      }`}
      style={{ animationDelay: `${index * 100 + 200}ms` }}
    >
      {text}
    </button>
  );
};

export default QuizOption;
