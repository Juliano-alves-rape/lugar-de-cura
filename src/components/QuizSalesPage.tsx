import ebookCover from "@/assets/ebook-cover.png";

const CHECKOUT_URL =
  "https://pay.hotmart.com/M103584940S?checkoutMode=10&_gl=1*ftfxb0*_gcl_au*MTg3MDU2NzcyNi4xNzY3MDQ5MDcxLjk4ODU5Mjk2Ni4xNzY3MDU1MTgyLjE3NjcwNTUxODI.*FPAU*MTg3MDU2NzcyNi4xNzY3MDQ5MDcx*_ga*MjY5Mzk3MTg2LjE3NTU0NjI4MDI.*_ga_GQH2V1F11Q*czE3NjcwOTQyNzAkbzQkZzEkdDE3NjcwOTQ2OTUkajQ5JGwwJGgw&bid=1767094706241";

const testimonials = [
  {
    name: "Camila R.",
    text: "Esse ebook me fez chorar de cura. Cada capítulo parecia que Deus estava falando diretamente comigo. Recomendo de olhos fechados.",
    location: "São Paulo, SP",
  },
  {
    name: "Ana Paula M.",
    text: "Eu estava num momento de crise com minha identidade e esse livro me trouxe de volta para os braços de Deus. Leitura obrigatória para toda mulher cristã.",
    location: "Belo Horizonte, MG",
  },
  {
    name: "Juliana S.",
    text: "Li em uma tarde e já quero reler. As reflexões são profundas, práticas e cheias do Espírito Santo. Me senti abraçada por Deus.",
    location: "Curitiba, PR",
  },
  {
    name: "Raquel F.",
    text: "Indiquei para todas as minhas amigas do grupo de oração. É um livro que transforma de verdade.",
    location: "Recife, PE",
  },
];

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
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-body text-xs font-bold text-primary">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {t.location}
                  </p>
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
        className="opacity-0 animate-fade-up w-full max-w-sm block text-center px-10 py-5 bg-primary text-primary-foreground font-body font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110"
        style={{ animationDelay: "650ms" }}
      >
        Quero sentar à mesa com Deus
      </a>

      <p
        className="font-body text-xs text-muted-foreground/60 mt-4 mb-8 text-center opacity-0 animate-fade-up"
        style={{ animationDelay: "700ms" }}
      >
        Acesso imediato após a confirmação do pagamento
      </p>
    </div>
  );
};

export default QuizSalesPage;
