export default function Shipments(){
  const items = [
    { id: 'K-1021', name: 'Bloodwork Kit', status: 'Preparing', eta: '3-5 days' },
    { id: 'RX-7780', name: 'Prescription Refill', status: 'In transit', eta: '2 days' },
  ]
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900">Shipments</h1>
          <p className="text-sm text-slate-600">Operational. On schedule.</p>
        </header>
        <div className="grid gap-4">
          {items.map((s)=> (
            <div key={s.id} className="rounded-2xl border border-slate-200 bg-white p-6 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-slate-900">{s.name}</div>
                <div className="text-xs text-slate-500">ID {s.id}</div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="px-3 py-1 rounded-full bg-indigo-600 text-white">{s.status}</span>
                <span className="text-slate-600">ETA {s.eta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
