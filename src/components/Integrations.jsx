export default function Integrations(){
  const providers = [
    { name: 'Stripe', desc: 'Payments and subscriptions' },
    { name: 'Apple Health', desc: 'Health metrics ingestion' },
    { name: 'Google Fit', desc: 'Activity and sleep data' },
  ]
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900">Integrations</h1>
          <p className="text-sm text-slate-600">Connect the essentials. Nothing extra.</p>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          {providers.map((p)=> (
            <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-medium text-slate-900">{p.name}</div>
              <div className="text-xs text-slate-600 mt-2">{p.desc}</div>
              <div className="mt-4">
                <button className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-slate-900 text-white text-sm">Connect</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
