import { useMemo } from "react";

interface QuizResultProps {
  transitioning: boolean;
  answers: number[];
  onContinue: () => void;
}

const resultProfiles = [
  {
    title: "Cura Interior",
    icon: "💛",
    description:
      "Você carrega dores emocionais que ainda não foram tratadas. Deus quer te conduzir a um processo profundo de cura.",
    cta: "Quero começar minha cura",
    verse:
      '"Ele sara os quebrantados de coração e lhes pensa as feridas." — Salmos 147:3',
  },
  {
    title: "Restauração da Identidade",
    icon: "👑",
    description:
      "Você está vivendo um momento de desconexão com quem Deus te chamou pra ser. É hora de redescobrir sua identidade como filha amada.",
    cta: "Quero restaurar minha identidade",
    verse:
      '"Mas vós sois geração eleita, sacerdócio real, nação santa." — 1 Pedro 2:9',
  },
  {
    title: "Reconexão Espiritual",
    icon: "🕊️",
    description:
      "Você sente que perdeu sua conexão com Deus. Ele está te chamando de volta para perto dEle.",
    cta: "Quero me reconectar com Deus",
    verse:
      '"Chegai-vos a Deus, e ele se chegará a vós." — Tiago 4:8',
  },
  {
    title: "Direção e Propósito",
    icon: "🔥",
    description:
      "Você sabe que tem algo maior, mas não consegue viver isso. Deus quer te dar clareza e direção.",
    cta: "Quero descobrir meu propósito",
    verse:
      '"Eu é que sei os planos que tenho para vocês... planos de dar-lhes esperança e um futuro." — Jeremias 29:11',
  },
];

const QuizResult = ({ transitioning, answers, onContinue }: QuizResultProps) => {
  const profile = useMemo(() => {
    const scores = [0, 0, 0, 0];
    answers.forEach((answer) => {
      if (answer >= 0 && answer <= 3) {
        scores[answer]++;
      }
    });
    const maxIndex = scores.indexOf(Math.max(...scores));
    return resultProfiles[maxIndex];
  }, [answers]);

  return (
    <div
      className={`min-h-[80vh] flex flex-col items-center pt-8 transition-opacity duration-400 ${
        transitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-16 h-0.5 bg-primary mx-auto mb-8 opacity-0 animate-fade-up" />

      <p
        className="font-body text-xs tracking-widest uppercase text-primary mb-4 opacity-0 animate-fade-up"
        style={{ animationDelay: "50ms" }}
      >
        Seu resultado
      </p>

      <div
        className="text-5xl mb-4 opacity-0 animate-fade-up"
        style={{ animationDelay: "100ms" }}
      >
        {profile.icon}
      </div>

      <h2
        className="font-display text-2xl md:text-3xl font-semibold text-foreground text-center leading-tight mb-4 opacity-0 animate-fade-up"
        style={{ animationDelay: "150ms" }}
      >
        A área que Deus quer restaurar em você:{" "}
        <span className="text-primary italic">{profile.title}</span>
      </h2>

      <p
        className="font-body text-base text-muted-foreground leading-relaxed text-center mb-6 max-w-md opacity-0 animate-fade-up"
        style={{ animationDelay: "250ms" }}
      >
        {profile.description}
      </p>

      <blockquote
        className="font-display italic text-sm text-foreground/80 text-center border-l-2 border-primary pl-4 mb-10 max-w-sm opacity-0 animate-fade-up"
        style={{ animationDelay: "350ms" }}
      >
        {profile.verse}
      </blockquote>

      <div
        className="w-full bg-card rounded-lg p-6 border border-border mb-8 opacity-0 animate-fade-up"
        style={{ animationDelay: "450ms" }}
      >
        <p className="font-display text-lg font-semibold text-foreground text-center mb-2">
          Existe um caminho para essa restauração.
        </p>
        <p className="font-body text-sm text-muted-foreground text-center">
          Com base no seu resultado, esse é o próximo passo ideal pra você.
        </p>
      </div>

      <button
        onClick={onContinue}
        className="opacity-0 animate-fade-up w-full max-w-sm px-10 py-5 bg-primary text-primary-foreground font-body font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
        style={{ animationDelay: "550ms" }}
      >
        {profile.cta}
      </button>

      <p
        className="font-body text-xs text-muted-foreground/60 mt-3 text-center opacity-0 animate-fade-up"
        style={{ animationDelay: "600ms" }}
      >
        Veja como esse ebook pode te ajudar →
      </p>
    </div>
  );
};

export default QuizResult;
