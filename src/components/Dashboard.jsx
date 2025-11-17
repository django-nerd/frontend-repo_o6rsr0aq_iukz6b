import { useState } from 'react'

export default function Dashboard() {
  const [insights, setInsights] = useState<string[]>([] as unknown as string[])

  const sampleInsights = [
    'Hold: Capacity 72. Keep cadence. Hydrate early.',
    'Adjust: Sleep pressure is high. Pull evening screen time 60 minutes earlier.',
    'Add: Electrolytes on training days. 1 packet. Mid-session.',
  ]

  const getInsights = () => {
    setInsights(sampleInsights)
  }

  const protocols = {
    performance: ['Energy', 'Lean', 'Hormones', 'Libido'],
    recovery: ['Focus', 'Menopause', 'Relieve', 'Skin'],
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-slate-200 p-6 bg-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">Performance Console</h3>
                <button onClick={getInsights} className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900 text-white text-sm">
                  AI Insights
                </button>
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <Tile title="Data" desc="Biomarkers" />
                <Tile title="Performance" desc="Capacity, Power, Speed, Pressure, Efficiency" />
                <Tile title="Recovery" desc="Inflammation, Fatigue, Electrolytes, Lymphatic, Glycogen" />
                <Tile title="Shipments" desc="Kits and prescriptions" />
              </div>
              {insights.length > 0 && (
                <ul className="mt-6 space-y-2 text-sm text-slate-800 list-disc pl-6">
                  {insights.map((i, idx) => (<li key={idx}>{i}</li>))}
                </ul>
              )}
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 bg-white">
              <h3 className="text-lg font-semibold text-slate-900">Protocols</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-slate-900">Performance</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {protocols.performance.map(p => <Pill key={p} label={p}/> )}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Recovery</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {protocols.recovery.map(p => <Pill key={p} label={p}/> )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 p-6 bg-white">
              <h3 className="text-lg font-semibold text-slate-900">Membership</h3>
              <p className="mt-2 text-sm text-slate-700">Access Fee — $25/month</p>
              <p className="text-sm text-slate-700">Performance Membership — $1,497/month</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-white">
              <h3 className="text-lg font-semibold text-slate-900">Integrations</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full bg-slate-900 text-white text-xs">Stripe</span>
                <span className="inline-flex items-center px-2 py-1 rounded-full bg-slate-900 text-white text-xs">Apple Health</span>
                <span className="inline-flex items-center px-2 py-1 rounded-full bg-slate-900 text-white text-xs">Google Fit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Tile({ title, desc }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="text-sm font-medium text-slate-900">{title}</div>
      <div className="mt-2 text-xs text-slate-600">{desc}</div>
    </div>
  )
}

function Pill({ label }) {
  return <span className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 text-sm text-slate-900">{label}</span>
}
