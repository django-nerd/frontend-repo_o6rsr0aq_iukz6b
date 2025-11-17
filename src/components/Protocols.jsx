export default function Protocols(){
  const perf = ['Energy','Lean','Hormones','Libido']
  const rec = ['Focus','Menopause','Relieve','Skin']
  const Pill = ({ children }) => (
    <span className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 text-sm text-slate-900">{children}</span>
  )
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900">Protocols</h1>
          <p className="text-sm text-slate-600">Two tracks. Pick what you need. Adjust as you go.</p>
        </header>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <h3 className="font-medium text-slate-900">Performance</h3>
            <div className="mt-3 flex flex-wrap gap-2">{perf.map(p=> <Pill key={p}>{p}</Pill>)}</div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <h3 className="font-medium text-slate-900">Recovery</h3>
            <div className="mt-3 flex flex-wrap gap-2">{rec.map(p=> <Pill key={p}>{p}</Pill>)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
