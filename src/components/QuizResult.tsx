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
      "Você carrega dores emocionais que ainda não foram tratadas — e elas estão pesando mais do que você percebe. Não é fraqueza. É uma ferida que ainda não recebeu cuidado. Deus viu cada coisa que te machucou. E Ele não quer que você continue carregando isso sozinha.",
    cta: "Quero começar minha cura",
    verse:
      '"Ele sara os quebrantados de coração e lhes pensa as feridas." — Salmos 147:3',
    boxText:
      "O livro À Mesa foi escrito exatamente para mulheres com esse resultado. Sara Rapé te guia por um processo de cura interior profundo — reconhecendo as feridas, entendendo o que Deus diz sobre elas, e encontrando liberdade real pela Palavra. Não é teoria. É um caminho prático, guiado pela Escritura, para você sair do peso emocional e voltar a viver com leveza.",
  },
  {
    title: "Restauração da Identidade",
    icon: "👑",
    description:
      "Você sente que se perdeu pelo caminho. Que a mulher que Deus te chamou a ser parece distante — ou talvez você nem saiba mais quem ela é. Isso não é acidente. Há um processo que te tirou de si mesma. E há um processo que pode te trazer de volta.",
    cta: "Quero restaurar minha identidade",
    verse:
      '"Mas vós sois geração eleita, sacerdócio real, nação santa." — 1 Pedro 2:9',
    boxText:
      "O livro À Mesa tem um capítulo inteiro dedicado à identidade — quem você é em Deus, o que o inimigo tentou roubar e como você reconstrói quem você é a partir da Palavra. Sara Rapé escreve como alguém que também precisou redescobrir sua identidade. Ela não fala de fora — ela te acompanha de dentro.",
  },
  {
    title: "Reconexão Espiritual",
    icon: "🕊️",
    description:
      "Você ora, mas parece que as palavras não chegam. Você sente que algo criou distância entre você e Deus — e não sabe exatamente quando isso aconteceu. A boa notícia é que Ele não se afastou. Ele está esperando você à mesa.",
    cta: "Quero me reconectar com Deus",
    verse:
      '"Chegai-vos a Deus, e ele se chegará a vós." — Tiago 4:8',
    boxText:
      "O livro À Mesa nasceu dessa imagem: Deus te convidando para sentar com Ele. Sem pressa, sem performance, sem distância. Sara Rapé te mostra como voltar a esse lugar de intimidade — como ouvir a voz dEle novamente, como construir uma vida de presença real e não apenas de rituais.",
  },
  {
    title: "Direção e Propósito",
    icon: "🔥",
    description:
      "Você sabe que foi chamada para algo maior. Mas parece que esse propósito está trancado atrás de uma porta que você não consegue abrir. Você anda em círculos, esperando uma clareza que não chega. Deus tem planos claros pra você. E Ele quer te mostrar.",
    cta: "Quero descobrir meu propósito",
    verse:
      '"Eu é que sei os planos que tenho para vocês... planos de dar-lhes esperança e um futuro." — Jeremias 29:11',
    boxText:
      "O livro À Mesa te ajuda a sentar diante de Deus e ouvir o que Ele tem a dizer sobre o seu chamado. Sara Rapé te guia pelo processo de curar o que está travando, descobrir quem você é, e começar a caminhar na direção certa — com paz e sem pressa.",
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
          {profile.boxText}
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
