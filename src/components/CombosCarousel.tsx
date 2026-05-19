"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const combos = [
  {
    title: "Combo P",
    items: "Café Premium + Croissant",
    price: "R$ 24,90",
    image: "/combo-p.png",
    desc: "Comece o dia com um café especial e um croissant fresquinho.",
  },
  {
    title: "Combo M",
    items: "Capuccino + Cookie",
    price: "R$ 29,90",
    image: "/combo-m.png",
    desc: "Um capuccino cremoso com um cookie artesanal.",
  },
  {
    title: "Combo G",
    items: "Latte + Bolo de Cenoura",
    price: "R$ 34,90",
    image: "/combo-g.png",
    desc: "Nosso latte perfeito acompanhado do clássico bolo de cenoura.",
  },
];

export default function CombosCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % combos.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const s = combos[current];

  return (
    <section className="py-20 px-4 border-t border-pink/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-pink text-center mb-12">
          Nossos Combos
        </h2>
        <div className="flex items-center gap-12">
          <div className="flex-1">
            <p className="text-sm uppercase tracking-widest text-pink font-semibold mb-2">
              Combos Especiais
            </p>
            <h3 className="text-3xl md:text-5xl font-bold tracking-wider text-pink mb-4">
              {s.title}
            </h3>
            <p className="text-lg text-muted mb-2">{s.items}</p>
            <p className="text-muted leading-relaxed mb-6">{s.desc}</p>
            <p className="text-3xl font-bold text-pink-dark mb-8">{s.price}</p>

            <div className="flex gap-2">
              {combos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-pink" : "w-2 bg-pink/30"
                  }`}
                  aria-label={`Combo ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="hidden md:flex shrink-0 items-center justify-center w-80 h-80 rounded-3xl overflow-hidden">
            <Image
              src={s.image}
              alt={s.title}
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
