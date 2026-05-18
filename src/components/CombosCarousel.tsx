"use client";

import { useState, useEffect, useCallback } from "react";

const combos = [
  {
    name: "Combo Aurora",
    items: "Café Premium + Croissant",
    price: "R$ 24,90",
    icon: "☕",
  },
  {
    name: "Combo Miau",
    items: "Capuccino + Cookie",
    price: "R$ 29,90",
    icon: "🐱",
  },
  {
    name: "Combo Ronron",
    items: "Latte + Bolo de Cenoura",
    price: "R$ 34,90",
    icon: "🍰",
  },
  {
    name: "Combo Bigode",
    items: "Mocha + Petit Gâteau",
    price: "R$ 39,90",
    icon: "🧁",
  },
];

export default function CombosCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % combos.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + combos.length) % combos.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const c = combos[current];

  return (
    <div className="shrink-0 w-72">
      <div className="relative rounded-2xl border border-pink/20 bg-rose-light p-6 text-center">
        <div className="text-5xl mb-3">{c.icon}</div>
        <h3 className="text-pink font-bold text-lg mb-1">{c.name}</h3>
        <p className="text-muted text-sm mb-2">{c.items}</p>
        <p className="text-pink-dark font-bold text-xl">{c.price}</p>

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-muted hover:text-pink transition-colors text-xl"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-muted hover:text-pink transition-colors text-xl"
          aria-label="Próximo"
        >
          ›
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-3">
        {combos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-pink w-4" : "bg-pink/30"
            }`}
            aria-label={`Combo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
