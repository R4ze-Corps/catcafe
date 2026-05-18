export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-rose">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-pink mb-4">
            Contato
          </h1>
          <p className="text-muted max-w-lg mx-auto">
            Faça sua reserva, tire dúvidas ou agende uma visita. Estamos prontos
            para receber você e seu novo amigo felino.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 w-12 h-12 rounded-full bg-pink/20 flex items-center justify-center text-pink shrink-0">
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
                <p className="text-muted text-xs uppercase tracking-widest mb-1">
                  Discord
                </p>
                <a
                  href="https://discord.gg/9MUsus2cWU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink hover:text-pink-light transition-colors"
                >
                  https://discord.gg/9MUsus2cWU
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-0.5 w-12 h-12 rounded-full bg-pink/20 flex items-center justify-center text-pink shrink-0">
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
                <p className="text-muted text-xs uppercase tracking-widest mb-1">
                  Telefone
                </p>
                <div className="space-y-1">
                  <p className="text-ink">(xx) xxxx-xxxx — Atendimento</p>
                  <p className="text-ink">
                    (xx) xxxx-xxxx — Reservas
                  </p>
                  <p className="text-ink">
                    (xx) xxxx-xxxx — Adoções
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-0.5 w-12 h-12 rounded-full bg-pink/20 flex items-center justify-center text-pink shrink-0">
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
                <p className="text-muted text-xs uppercase tracking-widest mb-1">
                  Funcionamento
                </p>
                <p className="text-ink">Seg-Dom: 09:00 | 22:00</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-pink/40 bg-rose-light p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-pink/20 flex items-center justify-center text-pink mb-5">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2C10.5 2 6 5 6 9c0 3 2.5 5.5 6 8 3.5-2.5 6-5 6-8 0-4-4.5-7-6-7z" />
                <circle cx="9" cy="8" r="1" fill="currentColor" />
                <circle cx="15" cy="8" r="1" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-pink mb-2">
              Estamos Contratando
            </h2>
            <p className="text-muted mb-6">
              Faça parte da equipe Cat Café. Vagas abertas para:
            </p>
            <div className="space-y-3 w-full">
              <div className="py-3 px-4 rounded-xl border border-pink/20 bg-rose text-ink font-medium">
                Barista
              </div>
              <div className="py-3 px-4 rounded-xl border border-pink/20 bg-rose text-ink font-medium">
                Cuidador de Gatos
              </div>
            </div>
            <p className="text-muted text-sm mt-6">
              Candidate-se pelo Discord com sua apresentação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
