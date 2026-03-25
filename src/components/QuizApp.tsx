declare const fbq: any;
import { useState, useCallback, useEffect } from "react";
import QuizProgress from "./QuizProgress";
import QuizOption from "./QuizOption";
import QuizResult from "./QuizResult";
import QuizSalesPage from "./QuizSalesPage";
import QuizPatternBreak from "./QuizPatternBreak";
import QuizAnalysis from "./QuizAnalysis";

const questions = [
  {
    question: "Hoje, como você se sente na sua vida espiritual?",
    options: [
      "Sinto que algo dentro de mim precisa ser curado",
      "Me sinto perdida e sem direção",
      "Tenho fé, mas estou cansada emocionalmente",
      "Sinto que Deus tem algo pra mim, mas não consigo viver isso",
    ],
  },
  {
    question: "Qual dessas situações mais se aproxima da sua realidade hoje?",
    options: [
      "Me sinto distante de Deus",
      "Oro, mas parece que nada muda",
      "Não sei mais quem sou espiritualmente",
      "Sinto um vazio constante",
    ],
  },
  {
    question: "O que mais descreve você hoje?",
    options: [
      "Vivo no automático, sem conexão com Deus",
      "Tenho medo de não cumprir meu propósito",
      "Carrego dores que não consigo soltar",
      "Preciso recomeçar, mas não sei como",
    ],
  },
  {
    question: "O que mais te impede hoje de viver o que Deus tem pra você?",
    options: [
      "Culpa e vergonha",
      "Insegurança",
      "Falta de conexão com Deus",
      "Ansiedade constante",
    ],
  },
  {
    question:
      "Se existisse um caminho guiado pra restaurar isso, você faria?",
    options: [
      "Sim, preciso disso",
      "Sim, totalmente",
      "Talvez, quero entender melhor",
      "Acho que sim",
    ],
  },
  {
    question:
      "Esse peso que você sente hoje está afetando outras áreas da sua vida?",
    options: [
      "Sim, afeta meus relacionamentos e minha paz",
      "Sim, me impede de viver o que acredito",
      "Às vezes, mas tento ignorar",
      "Ainda não parei para pensar nisso",
    ],
  },
  {
    question:
      "O que acontece quando você tenta resolver isso sozinha?",
    options: [
      "Melhora um pouco, mas volta",
      "Não consigo nem começar",
      "Fico em círculos sem sair do lugar",
      "Nunca tentei resolver, não sei como",
    ],
  },
  {
    question:
      "Se daqui a 6 meses nada mudar, como você se sentirá?",
    options: [
      "Muito mais cansada e pesada",
      "Com medo de perder minha fé",
      "Distante de quem Deus quer que eu seja",
      "Sem direção, vivendo no automático",
    ],
  },
];

type Screen = "intro" | "quiz" | "patternBreak" | "analysis" | "result" | "sales";

const QuizApp = () => {
  const [screen, setScreen] = useState<Screen>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (screen === "sales") {
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "ViewContent");
      }
    }
  }, [screen]);

  const handleStart = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setScreen("quiz");
      setTransitioning(false);
    }, 400);
  }, []);

  const handleSelect = useCallback(
    (optionIndex: number) => {
      setSelectedOption(optionIndex);
      setTimeout(() => {
        setTransitioning(true);
        setTimeout(() => {
          const newAnswers = [...answers, optionIndex];
          setAnswers(newAnswers);

          // After question 2 (index 1), show pattern break
          if (currentQuestion === 1) {
            setScreen("patternBreak");
            setCurrentQuestion((q) => q + 1);
            setSelectedOption(null);
          } else if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((q) => q + 1);
            setSelectedOption(null);
          } else {
            // Last question answered → show analysis transition
            setScreen("analysis");
          }
          setTransitioning(false);
        }, 400);
      }, 300);
    },
    [answers, currentQuestion]
  );

  const handlePatternBreakContinue = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setScreen("quiz");
      setTransitioning(false);
    }, 400);
  }, []);

  const handleAnalysisDone = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setScreen("result");
      setTransitioning(false);
    }, 400);
  }, []);

  const handleGoToSales = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }
      setScreen("sales");
      setTransitioning(false);
    }, 400);
  }, []);

  return (
    <div className="min-h-screen bg-background linen-texture">
      <div className="pt-6 pb-12 px-4">
        <div className="max-w-lg mx-auto">
          {/* INTRO SCREEN */}
          {screen === "intro" && (
            <div
              className={`flex flex-col items-center text-center min-h-[80vh] justify-center transition-opacity duration-400 ${
                transitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="mb-8 opacity-0 animate-fade-up">
                <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
                <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-5">
                  Descubra em 2 minutos o que está travando sua vida espiritual
                </h1>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  Responda 8 perguntas rápidas e veja o que Deus quer restaurar e veja o que Deus quer restaurar
                  em você hoje
                </p>
                <p className="font-body text-sm text-muted-foreground/80">
                  ✨ Mais de 1.193 mulheres já fizeram esse teste
                </p>
              </div>

              <button
                onClick={handleStart}
                className="opacity-0 animate-fade-up mt-4 px-10 py-4 bg-primary text-primary-foreground font-body font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
                style={{ animationDelay: "300ms" }}
              >
                👉 Começar teste agora
              </button>
            </div>
          )}

          {/* QUIZ SCREEN */}
          {screen === "quiz" && (
            <div
              className={`min-h-[80vh] flex flex-col justify-center transition-opacity duration-400 ${
                transitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="mb-8 opacity-0 animate-fade-up">
                <QuizProgress
                  current={currentQuestion + 1}
                  total={questions.length}
                />
              </div>

              <h2
                className="font-display text-xl md:text-2xl font-semibold text-foreground leading-snug mb-8 opacity-0 animate-fade-up"
                style={{ animationDelay: "100ms" }}
              >
                {questions[currentQuestion].question}
              </h2>

              <div className="flex flex-col gap-3">
                {questions[currentQuestion].options.map((option, i) => (
                  <QuizOption
                    key={`${currentQuestion}-${i}`}
                    text={option}
                    selected={selectedOption === i}
                    onClick={() =>
                      selectedOption === null ? handleSelect(i) : undefined
                    }
                    index={i}
                  />
                ))}
              </div>
            </div>
          )}

          {/* PATTERN BREAK */}
          {screen === "patternBreak" && (
            <QuizPatternBreak
              transitioning={transitioning}
              onContinue={handlePatternBreakContinue}
            />
          )}

          {/* ANALYSIS TRANSITION */}
          {screen === "analysis" && (
            <QuizAnalysis
              transitioning={transitioning}
              onDone={handleAnalysisDone}
            />
          )}

          {/* RESULT SCREEN */}
          {screen === "result" && (
            <QuizResult
              transitioning={transitioning}
              answers={answers}
              onContinue={handleGoToSales}
            />
          )}

          {/* SALES SCREEN */}
          {screen === "sales" && (
            <QuizSalesPage transitioning={transitioning} answers={answers} />
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
