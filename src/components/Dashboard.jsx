import { useMemo, useState } from 'react'

export default function Dashboard() {
  const [insights, setInsights] = useState<string[]>([] as unknown as string[])

  const sampleInsights = [
    'Hold: Capacity 72. Keep cadence. Hydrate early.',
    'Adjust: Sleep pressure is high. Pull evening screen time 60 minutes earlier.',
    'Add: Electrolytes on training days. 1 packet. Mid-session.',
  ]

  const getInsights = () => setInsights(sampleInsights)

  const kpis = useMemo(() => ([
    { label: 'Capacity', value: 72 },
    { label: 'Recovery', value: 66 },
    { label: 'Consistency', value: 91 },
    { label: 'Readiness', value: 78 },
  ]), [])

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="xo-card xo-card-hover p-6 bg-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">Performance Console</h3>
                <button onClick={getInsights} className="xo-btn xo-btn-primary">AI Insights</button>
              </div>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {kpis.map(k => (
                  <div key={k.label} className="rounded-xl border border-slate-200 p-4 bg-white">
                    <div className="text-xs text-slate-600">{k.label}</div>
                    <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{k.value}</div>
                  </div>
                ))}
              </div>

              {insights.length > 0 && (
                <>
                  <div className="mt-6 xo-divider" />
                  <ul className="mt-6 space-y-2 text-sm text-slate-800 list-disc pl-6">
                    {insights.map((i, idx) => (<li key={idx}>{i}</li>))}
                  </ul>
                </>
              )}
            </div>

            <div className="xo-card xo-card-hover p-6 bg-white">
              <h3 className="text-lg font-semibold text-slate-900">Protocols</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-slate-900">Performance</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Energy','Lean','Hormones','Libido'].map(p => <Pill key={p} label={p}/> )}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Recovery</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Focus','Menopause','Relieve','Skin'].map(p => <Pill key={p} label={p}/> )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="xo-card p-6 bg-white">
              <h3 className="text-lg font-semibold text-slate-900">Membership</h3>
              <p className="mt-2 text-sm text-slate-700">Access Fee — $25/month</p>
              <p className="text-sm text-slate-700">Performance Membership — $1,497/month</p>
            </div>
            <div className="xo-card p-6 bg-white">
              <h3 className="text-lg font-semibold text-slate-900">Integrations</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="xo-chip">Stripe</span>
                <span className="xo-chip">Apple Health</span>
                <span className="xo-chip">Google Fit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pill({ label }) {
  return <span className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 text-sm text-slate-900">{label}</span>
}
