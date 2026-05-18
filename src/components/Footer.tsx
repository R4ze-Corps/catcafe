import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-pink/30 bg-rose-light/60">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-ink font-bold text-lg tracking-wider mb-3">
            CAT CAFÉ
          </h3>
          <p className="text-muted text-sm leading-relaxed">
            O café mais gato da cidade. Venha tomar um café e fazer novos
            amigos felinos.
          </p>
        </div>

        <div>
          <h4 className="text-ink font-semibold text-sm uppercase tracking-widest mb-3">
            Horários
          </h4>
          <div className="text-muted text-sm space-y-1">
            <p>Seg a Sex: 09h - 20h</p>
            <p>Sáb: 10h - 22h</p>
            <p>Dom: 10h - 18h</p>
          </div>
        </div>

        <div>
          <h4 className="text-ink font-semibold text-sm uppercase tracking-widest mb-3">
            Contato
          </h4>
          <div className="text-muted text-sm space-y-1">
            <p>https://discord.gg/9MUsus2cWU</p>
          </div>
        </div>
      </div>

      <div className="border-t border-pink/20 py-6 text-center text-muted text-xs">
        <p>
          &copy; {new Date().getFullYear()} Cat Café. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
