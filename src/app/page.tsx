import Link from "next/link";
import { events } from "@/data/events";
import CombosCarousel from "@/components/CombosCarousel";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex items-center justify-between gap-12">
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wider leading-none mb-2">
              <span className="text-pink text-6xl md:text-8xl">UWU</span>
              <br />
              <span className="text-rose-light">CAT CAFÉ</span>
            </h1>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-pink text-white font-semibold rounded-full hover:bg-pink-light transition-colors tracking-wider uppercase text-sm"
            >
              Faça Parte do Time
            </Link>
          </div>
          <CombosCarousel />
        </div>
      </section>

      <section className="py-20 px-4">
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
              className="group p-8 rounded-2xl border border-pink/20 bg-rose-light hover:bg-rose-light hover:border-pink/40 transition-all text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink/20 text-pink mb-5 group-hover:bg-pink/30 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-pink text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 border-t border-pink/20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pink mb-10">Próximo Evento</h2>
          <div className="rounded-2xl border border-pink/20 bg-rose-light p-8 hover:bg-rose-light hover:border-pink/40 transition-all">
            <p className="text-pink font-bold text-sm tracking-widest mb-4">{events[0].date}</p>
            <h3 className="text-pink font-semibold text-xl mb-3">{events[0].title}</h3>
            <p className="text-muted text-sm leading-relaxed">{events[0].desc}</p>
          </div>
          <Link
            href="/events"
            className="mt-8 inline-block px-8 py-3 bg-pink text-white font-semibold rounded-full hover:bg-pink-light transition-colors uppercase text-sm tracking-wider"
          >
            Ver Programação Completa
          </Link>
        </div>
      </section>
    </>
  );
}
