declare const fbq: any;
import { useState, useCallback, useEffect } from "react";
import QuizTimer from "./QuizTimer";
import QuizProgress from "./QuizProgress";
import QuizOption from "./QuizOption";
import QuizResult from "./QuizResult";
import QuizSalesPage from "./QuizSalesPage";
   const questions = [
  {
   question: 
      "Você sente que sua vida espiritual hoje está mais próxima de qual dessas situações?",
    options: [
      "Amo a Deus, mas sinto que algo dentro de mim ainda precisa ser curado",
      "Sinto que perdi minha identidade e não sei mais quem sou em Deus",
      "Tenho fé, mas me sinto cansada emocionalmente",
      "Sinto que Deus tem algo para mim, mas não consigo viver isso",
    ],
  },
  {
    question:
      "Quando você pensa sobre sua caminhada com Deus, o que mais pesa no seu coração?",
    options: [
      "Feridas do passado",
      "Dúvidas sobre minha identidade",
      "Falta de direção espiritual",
      "Cansaço emocional",
    ],
  },
  {
    question:
      "Você já sentiu que carrega dores que ninguém ao seu redor percebe?",
    options: [
      "Sim, frequentemente",
      "Algumas vezes",
      "Raramente",
      "Não, mas sinto que algo ainda falta",
    ],
  },
  {
    question:
      "Qual dessas frases mais descreve o que você sente hoje?",
    options: [
      "Sinto que estou vivendo no automático, sem conexão real com Deus",
      "Tenho medo de nunca alcançar o propósito que Deus tem para mim",
      "Quero perdoar, mas não consigo soltar certas dores",
      "Sinto que preciso recomeçar, mas não sei por onde",
    ],
  },
  {
    question:
      "Se Deus te convidasse hoje para se assentar à mesa com Ele, o que você mais desejaria receber?",
    options: [
      "Cura interior",
      "Clareza sobre quem eu sou",
      "Direção para meu propósito",
      "Paz no coração",
    ],
  },
  {
    question:
      "O que mais te impede de viver plenamente aquilo que Deus preparou para você?",
    options: [
      "Culpa e vergonha do passado",
      "Insegurança sobre meu valor e identidade",
      "Falta de intimidade com Deus",
      "Ansiedade e preocupação constante",
    ],
  },
  {
    question:
      "Você estaria aberta a iniciar um processo de restauração espiritual guiado pela Palavra de Deus?",
    options: [
      "Sim, totalmente",
      "Sim, preciso disso",
      "Talvez, quero entender melhor",
      "Acho que sim",
    ],
  },
];

type Screen = "intro" | "quiz" | "result" | "sales";

const QuizApp = () => {
  const [screen, setScreen] = useState<Screen>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  useEffect(() => {
    if (screen === "sales") {
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq('track', 'ViewContent');
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
          if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((q) => q + 1);
            setSelectedOption(null);
          } else {
            setScreen("result");
          }
          setTransitioning(false);
        }, 400);
      }, 300);
    },
    [answers, currentQuestion]
  );

 const handleGoToSales = useCallback(() => {
  setTransitioning(true);

  setTimeout(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'Lead');
    }

    setScreen("sales");
    setTransitioning(false);
  }, 400);

}, []);

  return (
    <div className="min-h-screen bg-background linen-texture">
      <QuizTimer />

      <div className="pt-14 pb-12 px-4">
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
                <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
                  Existe uma mesa preparada por Deus para curar o seu coração.
                </h1>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  Responda algumas perguntas rápidas e descubra qual área da sua
                  vida Deus deseja restaurar neste momento.
                </p>
                <p className="font-body text-sm text-muted-foreground/70 italic">
                  Este teste espiritual leva menos de 1 minuto.
                </p>
              </div>

              <button
                onClick={handleStart}
                className="opacity-0 animate-fade-up mt-4 px-10 py-4 bg-primary text-primary-foreground font-body font-semibold text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110"
                style={{ animationDelay: "300ms" }}
              >
                Começar o Quiz
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
            <QuizSalesPage transitioning={transitioning} />
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
