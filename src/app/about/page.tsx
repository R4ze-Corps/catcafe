export default function AboutPage() {
  const hierarquia = [
    { nivel: 1, cargo: "Donos" },
    { nivel: 2, cargo: "Recursos Humanos" },
    { nivel: 3, cargo: "Gerência" },
    { nivel: 4, cargo: "Atendentes" },
    { nivel: 5, cargo: "Atendentes JR" },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-pink mb-4">Sobre Nós</h1>
          <p className="text-muted max-w-lg mx-auto">
            Mais que um café — uma experiência de afeto, aconchego e amor pelos gatos.
          </p>
        </div>

        <div className="space-y-16">
          {/* 1. Nossa História */}
          <section>
            <h2 className="text-2xl font-bold text-pink mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-pink rounded-full" />
              Nossa História
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                O <strong className="text-pink">Cat Café</strong> nasceu do amor pelos gatos e da vontade de
                criar um espaço onde as pessoas pudessem relaxar, tomar um café delicioso e se conectar com
                felinos adoráveis. Somos um café totalmente temático quando se trata de gatos.
              </p>
              <div className="rounded-2xl border border-pink/20 bg-rose-light p-6">
                <h3 className="text-pink font-semibold mb-2">Missão</h3>
                <p>
                  Proporcionar momentos de afeto e bem-estar através da combinação perfeita entre café de
                  qualidade e a companhia terapêutica dos gatos, promovendo a adoção responsável.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Hierarquia */}
          <section>
            <h2 className="text-2xl font-bold text-pink mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-pink rounded-full" />
              Nossa Equipe
            </h2>
            <div className="flex flex-col items-center gap-4">
              {hierarquia.map((h, i) => (
                <div key={i} className="flex items-center gap-4 w-full max-w-md">
                  <div className="flex-1 h-px bg-pink/30" />
                  <div className="px-6 py-3 rounded-xl border border-pink/20 bg-rose-light text-center text-pink font-semibold min-w-[200px]">
                    {h.cargo}
                  </div>
                  <div className="flex-1 h-px bg-pink/30" />
                </div>
              ))}
            </div>
          </section>

          {/* 4. Espaços */}
          <section>
            <h2 className="text-2xl font-bold text-pink mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-pink rounded-full" />
              Nossos Espaços
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Salão Principal",
                  desc: "Espaço aconchegante com mesas, poltronas e os gatos circulando livremente. Ideal para encontros e trabalho.",
                },
                {
                  title: "Espaço Zen",
                  desc: "Sala silenciosa com almofadas e iluminação suave para leitura, meditação e momentos de calma com os gatos.",
                },
                {
                  title: "Varanda Jardim",
                  desc: "Área externa coberta com plantas, fonte d'água e brinquedos para os gatos se divertirem ao ar livre.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-pink/20 bg-rose-light text-center hover:bg-rose-light transition-colors"
                >
                  <h3 className="text-pink font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Economia */}
          <section>
            <h2 className="text-2xl font-bold text-pink mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-pink rounded-full" />
              Modelo de Negócio
            </h2>
            <div className="p-6 rounded-2xl border border-pink/20 bg-rose-light">
              <p className="text-muted leading-relaxed">
                Funcionamos como um café tradicional com entrada acessível, onde o carro-chefe são nossas
                bebidas especiais e comidas artesanais. Também oferecemos <strong className="text-pink">planos de
                assinatura</strong> para clientes frequentes, <strong className="text-pink">eventos privados</strong> e
                uma loja com produtos licenciados. Parte da renda é revertida para ONGs de proteção animal.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
