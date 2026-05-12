import Link from "next/link";
import Image from "next/image";
import { events } from "@/data/events";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-deep/80 via-red-deep/40 to-night" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#dc2626_0%,_transparent_70%)] opacity-30" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <Image
            src="/logo.png"
            alt="ECCO"
            width={200}
            height={50}
            className="mx-auto mb-8 h-auto w-auto"
            priority
          />
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-red mb-6">
            VANILLA UNICORN
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-4">
            A noite mais exclusiva da cidade
          </p>
          <p className="text-zinc-400 mb-10 max-w-lg mx-auto leading-relaxed">
            Luxo, música eletrizante e momentos que ficam na memória. Seja bem-vindo à experiência definitiva.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/events"
              className="px-8 py-3 bg-red text-night font-semibold rounded-full hover:bg-red-light transition-colors tracking-wider uppercase text-sm"
            >
              Próximos Eventos
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-red text-red-light rounded-full hover:bg-red/20 transition-colors tracking-wider uppercase text-sm"
            >
              Faça sua Reserva
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              ),
              title: "Música ao Vivo",
              desc: "Os melhores DJs e bandas da cena noturna, com sons que fazem a noite valer a pena.",
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ),
              title: "Ambiente VIP",
              desc: "Salas exclusivas, bares premium e um espaço pensado para proporcionar noites inesquecíveis.",
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              ),
              title: "Experiência Premium",
              desc: "Drinks autorais, iluminação cênica e um atendimento que faz você se sentir especial.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-red/20 bg-red-deep/30 hover:bg-red-deep/60 hover:border-red/40 transition-all text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red/20 text-red mb-5 group-hover:bg-red/30 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-zinc-100 text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 border-t border-red/20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red mb-10">Próximo Evento</h2>
          <div className="rounded-2xl border border-red/20 bg-red-deep/30 p-8 hover:bg-red-deep/60 hover:border-red/40 transition-all">
            <p className="text-red font-bold text-sm tracking-widest mb-4">{events[0].date}</p>
            <h3 className="text-zinc-100 font-semibold text-xl mb-3">{events[0].title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{events[0].desc}</p>
          </div>
          <Link
            href="/events"
            className="mt-8 inline-block px-8 py-3 bg-red text-night font-semibold rounded-full hover:bg-red-light transition-colors uppercase text-sm tracking-wider"
          >
            Ver Programação Completa
          </Link>
        </div>
      </section>
    </>
  );
}
