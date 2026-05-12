import { events } from "@/data/events";

export default function EventsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-red mb-4">Eventos</h1>
          <p className="text-zinc-400 max-w-lg mx-auto">
            Confira a programação completa e garanta seu lugar nas melhores noites da cidade.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
          {events.map((event, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-red/20 bg-red-deep/30 p-8 hover:bg-red-deep/60 hover:border-red/40 transition-all flex flex-col items-center text-center"
            >
              <span className="text-red font-bold text-sm tracking-widest mb-4">{event.date}</span>
              <h3 className="text-zinc-100 font-semibold text-xl mb-3">{event.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed flex-1">{event.desc}</p>
              <a
                href="https://discord.gg/9MUsus2cWU"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full block text-center py-2.5 rounded-full border border-red text-red text-sm uppercase tracking-wider hover:bg-red hover:text-night transition-all"
              >
                Garantir Ingresso
              </a>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
