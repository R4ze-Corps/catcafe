export default function AboutPage() {
  const cargos = [
    "Dono", "Recursos Humanos", "Gerente Geral", "Resp. Eventos",
    "Resp. Vendas", "Recrutador", "Chefe de Segurança",
    "Segurança", "Bartender", "Dançarino(a)",
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-red mb-4">Sobre Nós</h1>
          <p className="text-zinc-400 max-w-lg mx-auto">
            Mais que uma boate — uma experiência de status e sofisticação.
          </p>
        </div>

        <div className="space-y-16">
          {/* 1. Introdução e A Visão */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-red rounded-full" />
              Introdução e A Visão
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                O objetivo é transformar o <strong className="text-zinc-200">Vanilla</strong> na experiência de
                entretenimento mais exclusiva e sofisticada da cidade. O foco não é apenas vender bebidas,
                mas vender <strong className="text-zinc-200">status</strong> e <strong className="text-zinc-200">diversão</strong>.
                A casa opera dentro da mais estrita legalidade, oferecendo um ambiente seguro e de altíssimo
                nível para eventos corporativos, festas privadas e noites de gala.
              </p>
              <div className="rounded-2xl border border-red/20 bg-red-deep/30 p-6">
                <h3 className="text-red font-semibold mb-2">Identidade Visual</h3>
                <p>
                  Para transmitir essa exclusividade, a comunicação visual da boate, desde os cardápios até
                  os convites VIP, adota uma estética minimalista e elegante, priorizando fundos escuros com
                  textos e logotipos em vermelho. Menos poluição visual, mais sofisticação.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Estrutura Hierárquica */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-red rounded-full" />
              Estrutura Hierárquica Operacional
            </h2>
            <p className="text-zinc-400 mb-6">
              Para manter o padrão de excelência no atendimento, a equipe precisa ter responsabilidades
              bem definidas. A estrutura de cargos da casa segue este formato:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {cargos.map((cargo, i) => (
                <div
                  key={i}
                  className="px-4 py-3 rounded-xl border border-red/20 bg-red-deep/30 text-center text-sm text-zinc-300 hover:bg-red-deep/60 hover:border-red/40 transition-colors"
                >
                  {cargo}
                </div>
              ))}
            </div>
          </section>

          {/* 3. Gestão e Inovação */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-red rounded-full" />
              Gestão e Inovação
            </h2>
            <p className="text-zinc-400 mb-6">
              O público de elite exige um serviço impecável, sem margem para erros. O grande trunfo desta
              gestão é a organização impecável dos bastidores.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-red/20 bg-red-deep/30">
                <h3 className="text-red font-semibold mb-3">Sistema de Atendimento VIP</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Um canal de comunicação direto e profissional para reservas. A aquisição de camarotes,
                  agendamento de eventos fechados e compras de combos premium é feita através de um sistema
                  de tickets automatizado, com botões interativos para garantir que o cliente seja respondido
                  rapidamente pela equipe de vendas.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-red/20 bg-red-deep/30">
                <h3 className="text-red font-semibold mb-3">Controle e Sistema Disciplinar</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Para garantir que os funcionários mantenham a postura exigida por um estabelecimento de
                  luxo, será implementado um painel interno de gestão. Ele contará com um sistema de
                  advertências estruturado, onde motivos de quebra de conduta são registrados e os logs
                  são enviados automaticamente para um canal exclusivo da gerência.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Funcionamento e Eventos */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-red rounded-full" />
              Funcionamento e Eventos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Eventos Noturnos",
                  desc: "Traje esporte fino ou gala, voltados para o fechamento de negócios entre a elite da ECCO.",
                },
                {
                  title: "Festas Temáticas Premium",
                  desc: "Noite do Cassino, Baile de Máscaras, Noite das Meninas — experiências temáticas de alto padrão.",
                },
                {
                  title: "Parcerias Corporativas",
                  desc: "Aluguel do espaço para confraternizações da Prefeitura, Hospital, Mecânicas e outros parceiros.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-red/20 bg-red-deep/30 text-center hover:bg-red-deep/60 transition-colors"
                >
                  <h3 className="text-red font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Economia */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-red rounded-full" />
              Economia
            </h2>
            <div className="p-6 rounded-2xl border border-red/20 bg-red-deep/30">
              <p className="text-zinc-400 leading-relaxed">
                A entrada de festas e eventos tem um valor acessível para manter a casa cheia, mas o
                verdadeiro lucro vem da venda de <strong className="text-zinc-200">Camarotes VIP</strong>,
                cartões de fidelidade (<strong className="text-zinc-200">Black Card</strong>) e combos de
                bebidas exclusivas. Venda de status é o negócio.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
