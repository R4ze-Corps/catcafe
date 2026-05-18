import Link from "next/link";
import Image from "next/image";
import { events } from "@/data/events";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink/80 via-pink/40 to-blush" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#e07a5f_0%,_transparent_70%)] opacity-30" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <Image
            src="/logo.png"
            alt="Cat Café"
            width={200}
            height={50}
            className="mx-auto mb-8 h-auto w-auto"
            priority
          />
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-blush mb-6">
            CAT CAFÉ
          </h1>
          <p className="text-xl md:text-2xl text-blush-light mb-4">
            O café mais gato da cidade
          </p>
          <p className="text-blush/70 mb-10 max-w-lg mx-auto leading-relaxed">
            Café especial, gatos adoráveis e um ambiente aconchegante. O lugar perfeito para relaxar e se apaixonar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/events"
              className="px-8 py-3 bg-blush text-pink font-semibold rounded-full hover:bg-blush-light transition-colors tracking-wider uppercase text-sm"
            >
              Próximos Eventos
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-blush text-blush-light rounded-full hover:bg-blush/20 transition-colors tracking-wider uppercase text-sm"
            >
              Faça sua Reserva
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-blush">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C10.5 2 6 5 6 9c0 3 2.5 5.5 6 8 3.5-2.5 6-5 6-8 0-4-4.5-7-6-7z" />
                  <circle cx="9" cy="8" r="1" fill="currentColor" />
                  <circle cx="15" cy="8" r="1" fill="currentColor" />
                </svg>
              ),
              title: "Gatos Adoráveis",
              desc: "Nosso café é lar de gatinhos resgatados que aguardam por um novo lar. Todos vacinados e castrados.",
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 8h1a4 4 0 010 8h-1" />
                  <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
                  <line x1="6" y1="1" x2="6" y2="4" />
                  <line x1="10" y1="1" x2="10" y2="4" />
                  <line x1="14" y1="1" x2="14" y2="4" />
                </svg>
              ),
              title: "Café Especial",
              desc: "Grãos selecionados, métodos artesanais e uma variedade de bebidas quentes e geladas para todos os gostos.",
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="12" width="4" height="8" rx="1" />
                  <rect x="10" y="8" width="4" height="12" rx="1" />
                  <rect x="17" y="4" width="4" height="16" rx="1" />
                </svg>
              ),
              title: "Ambiente Aconchegante",
              desc: "Música suave, decoração temática e espaços pensados para você aproveitar cada momento com os felinos.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-pink/20 bg-blush-light hover:bg-pink-deep hover:border-pink/40 transition-all text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink/20 text-pink mb-5 group-hover:bg-pink/30 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-brown-dark text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-brown text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-blush border-t border-pink/20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pink mb-10">Próximo Evento</h2>
          <div className="rounded-2xl border border-pink/20 bg-blush-light p-8 hover:bg-pink-deep hover:border-pink/40 transition-all">
            <p className="text-pink font-bold text-sm tracking-widest mb-4">{events[0].date}</p>
            <h3 className="text-brown-dark font-semibold text-xl mb-3">{events[0].title}</h3>
            <p className="text-brown text-sm leading-relaxed">{events[0].desc}</p>
          </div>
          <Link
            href="/events"
            className="mt-8 inline-block px-8 py-3 bg-pink text-blush font-semibold rounded-full hover:bg-pink-light transition-colors uppercase text-sm tracking-wider"
          >
            Ver Programação Completa
          </Link>
        </div>
      </section>
    </>
  );
}
