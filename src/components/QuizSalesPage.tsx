import { useMemo } from "react";
import ebookCover from "../assets/ebook-mockup-3d.png";
import jessicaPhoto from "../assets/testimonials/jessica.jpeg";
import annePhoto from "../assets/testimonials/anne.jpeg";
import julietePhoto from "../assets/testimonials/juliete.jpeg";
import fabiPhoto from "../assets/testimonials/fabi.jpeg";

const salesProfiles = [
  {
    emphasis: "curar suas feridas emocionais",
    reward: "viver com leveza e liberdade interior",
  },
  {
    emphasis: "restaurar sua identidade em Deus",
    reward: "viver com direção e segurança",
  },
  {
    emphasis: "se reconectar profundamente com Deus",
    reward: "sentir Sua presença de forma real",
  },
  {
    emphasis: "descobrir seu propósito",
    reward: "caminhar com clareza e confiança",
  },
];

const getFbq = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    return (window as any).fbq;
  }
  return () => {};
};

const testimonials = [
  {
    name: "Jéssica Dias",
    text: "O Livro À Mesa pra mim me lembrou a importância da Mesa, mais me fez enxergar coisas que com o tempo vamos deixando de lado. Que muitas mulheres pode ser impactada e encontra uma luz para coisas que busca, a leitura me fez enxergar o quanto precisamos entender o tempo de todas as coisas!! Obrigada a pastora Sara pelo senhor usar você para escrever o livro e mostrar a importância que é necessário está na mesa com as pessoas certas.",
    location: "",
    photo: jessicaPhoto,
  },
  {
    name: "Anne Gabrielle",
    text: "O livro realmente nos conduz à mesa: a sentar, refletir, observar com mais atenção e viver de uma nova forma. Ele nos leva a analisar identidade, propósito e posição, com profundidade e verdade. Mais do que isso, nos conduz a um relacionamento mais profundo com Cristo e com as Escrituras, despertando fome pela Palavra e intimidade com Deus.",
    location: "",
    photo: annePhoto,
  },
  {
    name: "Juliete Pimenta",
    text: "Ler À Mesa foi profundamente transformador para mim. Através do livro, o Senhor me levou a reconhecer e curar feridas que eu nem sabia que existiam. Pude compreender processos, restaurar minha identidade em Deus e tomar posse de quem eu sou Nele. À Mesa foi instrumento de cura, edificação e restauração na minha vida. ❤️✨",
    location: "",
    photo: julietePhoto,
  },
  {
    name: "Fabiana Deni",
    text: "O livro À Mesa tem feito grandes mudanças em nós aqui em casa, digo nós pois comecei uma leitura individual mas senti que deveria incluir meu esposo. Cada capítulo foi um aprendizado para nós com muita reflexão e crescimento.",
    location: "",
    photo: fabiPhoto,
  },
];

const CHECKOUT_URL =
  "https://pay.hotmart.com/M103584940S?checkoutMode=10&_gl=1*ftfxb0*_gcl_au*MTg3MDU2NzcyNi4xNzY3MDQ5MDcxLjk4ODU5Mjk2Ni4xNzY3MDU1MTgyLjE3NjcwNTUxODI.*FPAU*MTg3MDU2NzcyNi4xNzY3MDQ5MDcx*_ga*MjY5Mzk3MTg2LjE3NTU0NjI4MDI.*_ga_GQH2V1F11Q*czE3NjcwOTQyNzAkbzQkZzEkdDE3NjcwOTQ2OTUkajQ5JGwwJGgw&bid=1767094706241";

interface QuizSalesPageProps {
  transitioning: boolean;
  answers: number[];
}

const CtaButton = ({ text, delay }: { text: string; delay?: string }) => (
  <a
    href={CHECKOUT_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => {
      const fbq = getFbq();
      fbq("track", "InitiateCheckout");
    }}
    className="opacity-0 animate-fade-up w-full max-w-sm block text-center px-10 py-5 bg-primary text-primary-foreground font-body font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
    style={delay ? { animationDelay: delay } : undefined}
  >
    {text}
  </a>
);

const QuizSalesPage = ({ transitioning, answers }: QuizSalesPageProps) => {
  const profile = useMemo(() => {
    const scores = [0, 0, 0, 0];
    answers.forEach((a) => {
      if (a >= 0 && a <= 3) scores[a]++;
    });
    return salesProfiles[scores.indexOf(Math.max(...scores))];
  }, [answers]);

  return (
    <div
      className={`min-h-[80vh] flex flex-col items-center pt-8 transition-opacity duration-400 ${
        transitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-16 h-0.5 bg-primary mx-auto mb-8 opacity-0 animate-fade-up" />

      {/* HEADLINE */}
      <h2
        className="font-display text-2xl md:text-3xl font-semibold text-foreground text-center leading-tight mb-4 opacity-0 animate-fade-up"
        style={{ animationDelay: "100ms" }}
      >
        Com base no seu resultado, identificamos o que está travando sua vida hoje
      </h2>

      {/* SUBHEADLINE + URGÊNCIA + CONEXÃO */}
      <div
        className="space-y-4 text-center mb-8 opacity-0 animate-fade-up"
        style={{ animationDelay: "200ms" }}
      >
        <p className="font-body text-base text-muted-foreground leading-relaxed">
          Hoje você está vivendo um bloqueio que está afetando sua paz, sua clareza e sua direção.
        </p>
        <p className="font-body text-sm text-destructive/80 leading-relaxed font-medium">
          E se isso não for tratado, essa sensação tende a continuar.
        </p>
        <p className="font-body text-base text-foreground leading-relaxed font-semibold">
          Mas existe um caminho claro para{" "}
          <span className="text-primary">{profile.emphasis}</span> e {profile.reward}.
        </p>
      </div>

      {/* Ebook 3D Mockup */}
      <div
        className="w-full max-w-sm mb-4 opacity-0 animate-fade-up relative"
        style={{ animationDelay: "300ms" }}
      >
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-110 -z-10" />
        <img
          src={ebookCover}
          alt="Livro À Mesa — Coração curado, identidade restaurada e propósito destravado"
          className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:drop-shadow-[0_25px_50px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      {/* CTA abaixo do mockup */}
      <div className="w-full flex justify-center mb-10">
        <CtaButton text="👉 Quero resolver isso agora" delay="350ms" />
      </div>

      {/* Descrição do produto */}
      <div
        className="w-full bg-card rounded-lg p-6 mb-8 border border-border opacity-0 animate-fade-up"
        style={{ animationDelay: "400ms" }}
      >
        <p className="font-body text-base text-muted-foreground leading-relaxed mb-4 text-center">
          O Livro <span className="font-semibold text-foreground">"À Mesa"</span> foi criado para te{" "}
          <span className="font-bold text-foreground uppercase">guiar passo a passo</span> nesse processo de restauração espiritual.
        </p>
        <ul className="space-y-3">
          {[
            "Entenda quem você é em Deus",
            "Rompa bloqueios emocionais",
            "Encontre direção e paz",
            "Caminhos de cura interior guiados pela Palavra",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 font-body text-sm text-muted-foreground"
            >
              <span className="text-primary mt-0.5">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Bônus */}
      <div
        className="w-full bg-primary/5 rounded-lg p-6 mb-8 border border-primary/20 opacity-0 animate-fade-up"
        style={{ animationDelay: "450ms" }}
      >
        <p className="font-display text-lg font-semibold text-foreground mb-2 text-center">
          🎁 Bônus exclusivo
        </p>
        <p className="font-body text-sm text-foreground text-center font-medium">
          Guia prático: como se aproximar de Deus em 7 dias
        </p>
        <p className="font-body text-xs text-primary font-semibold text-center mt-1">
          Incluído gratuitamente hoje
        </p>
      </div>

      {/* Prova social */}
      <p
        className="font-body text-sm text-muted-foreground italic text-center mb-4 opacity-0 animate-fade-up"
        style={{ animationDelay: "500ms" }}
      >
        Mais de 1.193 mulheres já iniciaram esse processo
      </p>

      {/* Testimonials */}
      <div
        className="w-full mb-8 opacity-0 animate-fade-up"
        style={{ animationDelay: "550ms" }}
      >
        <p className="font-display text-lg font-semibold text-foreground mb-5 text-center">
          O que dizem as leitoras:
        </p>
        <div className="space-y-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-5 border border-border"
            >
              <p className="font-body text-sm text-muted-foreground leading-relaxed italic mb-3">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                {t.photo ? (
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-body text-xs font-bold text-primary">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  {t.location && (
                    <p className="font-body text-xs text-muted-foreground">
                      {t.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bloco pré-checkout (urgência) */}
      <div
        className="w-full bg-destructive/5 rounded-lg p-6 mb-8 border border-destructive/20 opacity-0 animate-fade-up"
        style={{ animationDelay: "600ms" }}
      >
        <p className="font-display text-base font-semibold text-foreground mb-3 text-center">
          ⚠️ Atenção:
        </p>
        <p className="font-body text-sm text-muted-foreground leading-relaxed text-center mb-3">
          Com base nas suas respostas, ignorar isso agora pode fazer você continuar se sentindo exatamente da mesma forma.
        </p>
        <p className="font-body text-sm text-foreground font-medium text-center mb-1">
          Você já identificou o que está te travando.
        </p>
        <p className="font-body text-sm text-foreground font-semibold text-center">
          Agora só falta dar o próximo passo.
        </p>
      </div>

      {/* CTA pré-checkout */}
      <div className="w-full flex justify-center mb-8">
        <CtaButton text="👉 Quero começar minha transformação agora" delay="650ms" />
      </div>

      {/* Oferta / Preço */}
      <div
        className="text-center mb-6 opacity-0 animate-fade-up"
        style={{ animationDelay: "700ms" }}
      >
        <p className="font-body text-sm text-muted-foreground line-through mb-1">
          De R$ 47,00
        </p>
        <p className="font-display text-2xl font-bold text-foreground">
          Hoje apenas: <span className="text-primary">R$ 27,00</span>
        </p>
        <p className="font-body text-xs text-muted-foreground mt-1">
          Depois pode voltar ao valor normal
        </p>
      </div>

      {/* CTA principal */}
      <div className="w-full flex justify-center">
        <CtaButton text="👉 Quero sair disso agora" delay="750ms" />
      </div>

      <p
        className="font-body text-xs text-muted-foreground/60 mt-4 text-center opacity-0 animate-fade-up"
        style={{ animationDelay: "800ms" }}
      >
        Acesso imediato após a confirmação do pagamento
      </p>

      {/* Garantia */}
      <div
        className="flex flex-col items-center mt-8 mb-8 opacity-0 animate-fade-up"
        style={{ animationDelay: "850ms" }}
      >
        <div className="w-16 h-16 rounded-full border-2 border-primary/40 flex items-center justify-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 text-primary"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <p className="font-display text-base font-semibold text-foreground">
          7 dias de Garantia
        </p>
        <p className="font-body text-xs text-muted-foreground text-center mt-1 max-w-xs">
          Se não fizer sentido para você, devolvemos 100% do seu investimento.
        </p>
      </div>
    </div>
  );
};

export default QuizSalesPage;
