export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-red mb-4">
            Contato
          </h1>
          <p className="text-zinc-400 max-w-lg mx-auto">
            Faça sua reserva, tire dúvidas ou faça sugestões. Estamos prontos
            para receber você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 w-12 h-12 rounded-full bg-red/20 flex items-center justify-center text-red shrink-0">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-zinc-400 text-xs uppercase tracking-widest mb-1">
                  Discord
                </p>
                <a
                  href="https://discord.gg/9MUsus2cWU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red hover:text-red-light transition-colors"
                >
                  https://discord.gg/9MUsus2cWU
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-0.5 w-12 h-12 rounded-full bg-red/20 flex items-center justify-center text-red shrink-0">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-zinc-400 text-xs uppercase tracking-widest mb-1">
                  Telefone
                </p>
                <div className="space-y-1">
                  <p className="text-zinc-200">xxx-xxx — Ravena Hazzard</p>
                  <p className="text-zinc-200">
                    xxx-xxx — Preguiça de escrever
                  </p>
                  <p className="text-zinc-200">
                    xxx-xxx — Preguiça de Escrever dnv
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-0.5 w-12 h-12 rounded-full bg-red/20 flex items-center justify-center text-red shrink-0">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <p className="text-zinc-400 text-xs uppercase tracking-widest mb-1">
                  Funcionamento
                </p>
                <p className="text-zinc-200">Seg-Dom: 08:00 | 03:00</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-red/40 bg-red-deep/30 p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-red/20 flex items-center justify-center text-red mb-5">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-red mb-2">
              Estamos Contratando
            </h2>
            <p className="text-zinc-400 mb-6">
              Faça parte da equipe Vanilla Unicorn. Vagas abertas para:
            </p>
            <div className="space-y-3 w-full">
              <div className="py-3 px-4 rounded-xl border border-red/20 bg-night/50 text-zinc-200 font-medium">
                Dançarino(a)
              </div>
              <div className="py-3 px-4 rounded-xl border border-red/20 bg-night/50 text-zinc-200 font-medium">
                Bartender
              </div>
            </div>
            <p className="text-zinc-500 text-sm mt-6">
              Candidate-se pelo Discord com sua apresentação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
