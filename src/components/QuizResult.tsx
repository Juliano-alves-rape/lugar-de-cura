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
      "Seu coração carrega feridas que precisam ser tratadas na presença de Deus. Ele quer te conduzir a um processo profundo de cura — onde cada dor será tocada pelo Seu amor.",
    verse: "\"Ele sara os quebrantados de coração e lhes pensa as feridas.\" — Salmos 147:3",
  },
  {
    title: "Restauração da Identidade",
    icon: "👑",
    description:
      "Você tem buscado saber quem realmente é em Deus. É hora de redescobrir sua identidade como filha amada, escolhida e com propósito — sentada à mesa dEle.",
    verse: "\"Mas vós sois geração eleita, sacerdócio real, nação santa.\" — 1 Pedro 2:9",
  },
  {
    title: "Direção e Propósito",
    icon: "🕊️",
    description:
      "Deus tem um caminho preparado para você, e Ele quer te dar clareza e direção. É tempo de destravar o propósito que Ele plantou no seu coração.",
    verse: "\"Eu é que sei os planos que tenho para vocês... planos de dar-lhes esperança e um futuro.\" — Jeremias 29:11",
  },
  {
    title: "Paz e Descanso Espiritual",
    icon: "☕",
    description:
      "Seu coração precisa de descanso. Deus está te chamando para se assentar à mesa dEle, largar o peso da ansiedade e encontrar a paz que só Ele pode dar.",
    verse: "\"Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei.\" — Mateus 11:28",
  },
];

const QuizResult = ({ transitioning, answers, onContinue }: QuizResultProps) => {
  const profile = useMemo(() => {
    // Simple scoring: count which category appears most
    // Options map: 0=cura, 1=identidade, 2=propósito, 3=paz
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
          Deus preparou uma mesa para você — e o ebook{" "}
          <span className="font-display italic font-semibold text-foreground">
            "À Mesa"
          </span>{" "}
          foi escrito para te guiar nesse processo.
        </p>
      </div>

      <button
        onClick={onContinue}
        className="opacity-0 animate-fade-up w-full max-w-sm px-10 py-5 bg-primary text-primary-foreground font-body font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110"
        style={{ animationDelay: "550ms" }}
      >
        Quero conhecer o ebook
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
