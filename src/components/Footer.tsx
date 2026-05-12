import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-red/30 bg-night/60">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-red font-bold text-lg tracking-wider mb-3">
            VANILLA UNICORN
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            A noite mais exclusiva da cidade. Luxo, música e experiências
            inesquecíveis.
          </p>
        </div>

        <div>
          <h4 className="text-zinc-200 font-semibold text-sm uppercase tracking-widest mb-3">
            Horários
          </h4>
          <div className="text-zinc-400 text-sm space-y-1">
            <p>Seg: 08h - 00h</p>
            <p>Sáb: 09h - 03h</p>
            <p>Dom: 08h - 00h</p>
          </div>
        </div>

        <div>
          <h4 className="text-zinc-200 font-semibold text-sm uppercase tracking-widest mb-3">
            Contato
          </h4>
          <div className="text-zinc-400 text-sm space-y-1">
            <p>https://discord.gg/9MUsus2cWU</p>
          </div>
        </div>
      </div>

      <div className="border-t border-red/20 py-6 text-center text-zinc-500 text-xs">
        <p>
          &copy; {new Date().getFullYear()} Vanilla Unicorn. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
