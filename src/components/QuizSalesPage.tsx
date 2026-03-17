import ebookCover from "@/assets/ebook-cover.png";
import jessicaPhoto from "@/assets/testimonials/jessica.jpeg";
import annePhoto from "@/assets/testimonials/anne.jpeg";
import julietePhoto from "@/assets/testimonials/juliete.jpeg";
import fabiPhoto from "@/assets/testimonials/fabi.jpeg";

const testimonials = [
  {
    name: "Jéssica Dias",
    text: "O Livro À Mesa pra mim me lembrou a importância da Mesa, mais me fez enxergar coisas que com o tempo vamos deixando de lado. Que muitas mulheres pode ser impactada e encontra uma luz para coisas que busca, a leitura me fez enxergar o quanto precisamos entender o tempo de todas as coisas!! Obrigada a pastora Sara pelo senhor usar você para escrever o livro e mostrar a importância que é necessário está na mesa com as pessoas certas.",
    location: "",
    photo: jessicaPhoto,
  },
  {
    name: "Anne Gabrielle",
    text: "O livro realmente nos conduz à mesa: a sentar, refletir, observar com mais atenção e viver de uma nova forma. Ele nos leva a analisar identidade, propósito e posição, com profundidade e verdade. Mais do que isso, nos conduz a um relacionamento mais profundo com Cristo e com as Escrituras, despertando fome pela Palavra e intimidade com Deus. Ler seu testemunho, ver como uma história de vida gerou a mulher e pastora que a senhora é hoje, traz direção, esperança e reflexões tão necessárias para os nossos dias. A Mesa não é apenas um livro, é um convite ao lugar certo.",
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
    text: "O livro À Mesa tem feito grandes mudanças em nós aqui em casa, digo nós pois comecei uma leitura individual mas senti que deveria incluir meu esposo. Cada capítulo foi um aprendizado para nós com muita reflexão e crescimento. Já terminamos a leitura uma vez, porém eu senti que deveria iniciar 2026 lendo novamente e reescrevendo aquilo que já mudou... E o que mais o Senhor tem para mudar em mim? Ansiosa para descobrir 💖",
    location: "",
    photo: fabiPhoto,
  },
];

const CHECKOUT_URL =
  "https://pay.hotmart.com/M103584940S?checkoutMode=10&_gl=1*ftfxb0*_gcl_au*MTg3MDU2NzcyNi4xNzY3MDQ5MDcxLjk4ODU5Mjk2Ni4xNzY3MDU1MTgyLjE3NjcwNTUxODI.*FPAU*MTg3MDU2NzcyNi4xNzY3MDQ5MDcx*_ga*MjY5Mzk3MTg2LjE3NTU0NjI4MDI.*_ga_GQH2V1F11Q*czE3NjcwOTQyNzAkbzQkZzEkdDE3NjcwOTQ2OTUkajQ5JGwwJGgw&bid=1767094706241";

interface QuizSalesPageProps {
  transitioning: boolean;
}

const QuizSalesPage = ({ transitioning }: QuizSalesPageProps) => {
  return (
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
          <span className="font-semibold text-foreground">restauração</span>.
        </p>
        <p className="font-body text-base text-muted-foreground leading-relaxed">
          Um lugar onde identidades são reconstruídas, feridas são tratadas e o
          coração encontra descanso.
        </p>
        <p className="font-body text-base text-foreground leading-relaxed font-medium">
          O ebook{" "}
          <span className="font-display italic">&ldquo;À Mesa&rdquo;</span> foi
          escrito exatamente para conduzir você nesse processo.
        </p>
      </div>

      {/* Ebook cover */}
      <div
        className="w-full max-w-xs mb-8 opacity-0 animate-fade-up"
        style={{ animationDelay: "300ms" }}
      >
        <img
          src={ebookCover}
          alt="Ebook À Mesa — Coração curado, identidade restaurada e propósito destravado"
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

      {/* Testimonials */}
      <div
        className="w-full mb-8 opacity-0 animate-fade-up"
        style={{ animationDelay: "500ms" }}
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

      {/* Social proof count */}
      <p
        className="font-body text-sm text-muted-foreground italic text-center mb-2 opacity-0 animate-fade-up"
        style={{ animationDelay: "550ms" }}
      >
        &ldquo;Centenas de mulheres já iniciaram esse processo de
        restauração.&rdquo;
      </p>

      {/* Urgency */}
      <p
        className="font-body text-xs text-primary font-semibold tracking-wide uppercase text-center mb-6 animate-gold-pulse opacity-0 animate-fade-up"
        style={{ animationDelay: "600ms" }}
      >
        Oferta especial disponível hoje — R$ 27,00
      </p>

      {/* CTA */}
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => fbq('track', 'InitiateCheckout')}
        className="opacity-0 animate-fade-up w-full max-w-sm block text-center px-10 py-5 bg-primary text-primary-foreground font-body font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110"
        style={{ animationDelay: "650ms" }}
      >
        Quero sentar à mesa com Deus
      </a>

      <p
        className="font-body text-xs text-muted-foreground/60 mt-4 text-center opacity-0 animate-fade-up"
        style={{ animationDelay: "700ms" }}
      >
        Acesso imediato após a confirmação do pagamento
      </p>

      {/* Garantia */}
      <div
        className="flex flex-col items-center mt-8 mb-8 opacity-0 animate-fade-up"
        style={{ animationDelay: "750ms" }}
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
