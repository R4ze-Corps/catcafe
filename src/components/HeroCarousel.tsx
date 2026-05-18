"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    title: "COMBO AURORA",
    items: "Café Premium + Croissant",
    price: "R$ 24,90",
    emoji: "☕",
    desc: "Comece o dia com um café especial e um croissant fresquinho.",
  },
  {
    title: "COMBO MIAU",
    items: "Capuccino + Cookie",
    price: "R$ 29,90",
    emoji: "🐱",
    desc: "Um capuccino cremoso com um cookie artesanal.",
  },
  {
    title: "COMBO RONRON",
    items: "Latte + Bolo de Cenoura",
    price: "R$ 34,90",
    emoji: "🍰",
    desc: "Nosso latte perfeito acompanhado do clássico bolo de cenoura.",
  },
  {
    title: "COMBO BIGODE",
    items: "Mocha + Petit Gâteau",
    price: "R$ 39,90",
    emoji: "🧁",
    desc: "Mocha intenso com um petit gâteau derretido.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const s = slides[current];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex items-center gap-12">
        <div className="flex-1">
          <p className="text-sm uppercase tracking-widest text-pink font-semibold mb-2">
            Combos Especiais
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-wider text-pink mb-4">
            {s.title}
          </h2>
          <p className="text-lg text-muted mb-2">{s.items}</p>
          <p className="text-muted leading-relaxed mb-6">{s.desc}</p>
          <p className="text-3xl font-bold text-pink-dark mb-8">{s.price}</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-pink text-white font-semibold rounded-full hover:bg-pink-light transition-colors tracking-wider uppercase text-sm"
          >
            Faça Parte do Time
          </Link>

          <div className="flex gap-2 mt-12">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-8 bg-pink" : "w-2 bg-pink/30"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:flex shrink-0 items-center justify-center w-96 h-96 rounded-3xl border border-pink/20 bg-rose-light">
          <span className="text-[10rem]">{s.emoji}</span>
        </div>
      </div>
    </section>
  );
}
