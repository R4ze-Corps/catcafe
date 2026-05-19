export default function EventsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-pink mb-4">Eventos</h1>
          <p className="text-muted max-w-lg mx-auto">
            Em breve eventos serão feitos.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="rounded-2xl border border-pink/20 bg-rose-light p-12 text-center max-w-md w-full">
            <p className="text-muted text-lg">Nenhum evento disponível no momento.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
