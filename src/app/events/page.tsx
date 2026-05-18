import { events } from "@/data/events";

export default function EventsPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-ink">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-pink mb-4">Eventos</h1>
          <p className="text-rose max-w-lg mx-auto">
            Confira nossa programação e venha participar dos melhores momentos com a gente.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
          {events.map((event, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-pink/20 bg-ink-light p-8 hover:bg-ink-light hover:border-pink/40 transition-all flex flex-col items-center text-center"
            >
              <span className="text-pink font-bold text-sm tracking-widest mb-4">{event.date}</span>
              <h3 className="text-pink font-semibold text-xl mb-3">{event.title}</h3>
              <p className="text-rose text-sm leading-relaxed flex-1">{event.desc}</p>
              <a
                href="https://discord.gg/9MUsus2cWU"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full block text-center py-2.5 rounded-full border border-pink text-pink text-sm uppercase tracking-wider hover:bg-pink hover:text-pink transition-all"
              >
                Garantir Vaga
              </a>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
