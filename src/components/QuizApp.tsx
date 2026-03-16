import { useState, useCallback } from "react";
import QuizTimer from "./QuizTimer";
import QuizProgress from "./QuizProgress";
import QuizOption from "./QuizOption";
import ebookMockup from "@/assets/ebook-mockup.jpg";

const CHECKOUT_URL =
  "https://pay.hotmart.com/M103584940S?checkoutMode=10&_gl=1*ftfxb0*_gcl_au*MTg3MDU2NzcyNi4xNzY3MDQ5MDcxLjk4ODU5Mjk2Ni4xNzY3MDU1MTgyLjE3NjcwNTUxODI.*FPAU*MTg3MDU2NzcyNi4xNzY3MDQ5MDcx*_ga*MjY5Mzk3MTg2LjE3NTU0NjI4MDI.*_ga_GQH2V1F11Q*czE3NjcwOTQyNzAkbzQkZzEkdDE3NjcwOTQ2OTUkajQ5JGwwJGgw&bid=1767094706241";

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
      "Você estaria aberta a iniciar um processo de restauração espiritual guiado pela Palavra de Deus?",
    options: [
      "Sim, totalmente",
      "Sim, preciso disso",
      "Talvez, quero entender melhor",
      "Acho que sim",
    ],
  },
];

type Screen = "intro" | "quiz" | "result";

const QuizApp = () => {
  const [screen, setScreen] = useState<Screen>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

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
            <div
              className={`min-h-[80vh] flex flex-col items-center pt-8 transition-opacity duration-400 ${
                transitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-16 h-0.5 bg-primary mx-auto mb-8 opacity-0 animate-fade-up" />

              <h2
                className="font-display text-2xl md:text-3xl font-semibold text-foreground text-center leading-tight mb-6 opacity-0 animate-fade-up"
                style={{ animationDelay: "100ms" }}
              >
                Talvez Deus esteja te chamando para a mesa dEle.
              </h2>

              <div
                className="space-y-4 text-center mb-8 opacity-0 animate-fade-up"
                style={{ animationDelay: "200ms" }}
              >
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  A mesa de Deus é um lugar de{" "}
                  <span className="font-semibold text-foreground">
                    restauração
                  </span>
                  .
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Um lugar onde identidades são reconstruídas, feridas são
                  tratadas e o coração encontra descanso.
                </p>
                <p className="font-body text-base text-foreground leading-relaxed font-medium">
                  O ebook{" "}
                  <span className="font-display italic">&ldquo;À Mesa&rdquo;</span>{" "}
                  foi escrito exatamente para conduzir você nesse processo.
                </p>
              </div>

              {/* Ebook mockup */}
              <div
                className="w-full max-w-sm mb-8 opacity-0 animate-fade-up"
                style={{ animationDelay: "300ms" }}
              >
                <img
                  src={ebookMockup}
                  alt="Ebook À Mesa - mockup em uma mesa com café e Bíblia"
                  className="w-full rounded-lg shadow-2xl"
                  loading="lazy"
                />
              </div>

              {/* Benefits */}
              <div
                className="w-full bg-card rounded-lg p-6 mb-8 border border-border opacity-0 animate-fade-up"
                style={{ animationDelay: "400ms" }}
              >
                <p className="font-display text-lg font-semibold text-foreground mb-4 text-center">
                  Dentro do ebook você encontrará:
                </p>
                <ul className="space-y-3">
                  {[
                    "Reflexões bíblicas profundas",
                    "Direcionamentos práticos para sua vida espiritual",
                    "Caminhos de cura interior",
                    "Um reencontro com sua identidade em Cristo",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-body text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-0.5">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social proof */}
              <p
                className="font-body text-sm text-muted-foreground italic text-center mb-2 opacity-0 animate-fade-up"
                style={{ animationDelay: "500ms" }}
              >
                &ldquo;Centenas de mulheres já iniciaram esse processo de
                restauração.&rdquo;
              </p>

              {/* Urgency */}
              <p
                className="font-body text-xs text-primary font-semibold tracking-wide uppercase text-center mb-6 animate-gold-pulse opacity-0 animate-fade-up"
                style={{ animationDelay: "550ms" }}
              >
                Oferta especial disponível hoje — R$ 27,00
              </p>

              {/* CTA */}
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 animate-fade-up w-full max-w-sm block text-center px-10 py-5 bg-primary text-primary-foreground font-body font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110"
                style={{ animationDelay: "600ms" }}
              >
                Quero sentar à mesa com Deus
              </a>

              <p
                className="font-body text-xs text-muted-foreground/60 mt-4 text-center opacity-0 animate-fade-up"
                style={{ animationDelay: "700ms" }}
              >
                Acesso imediato após a confirmação do pagamento
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
