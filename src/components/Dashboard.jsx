import { useEffect, useState } from 'react'
import { Activity, Zap, Gauge, ShieldCheck, Cpu, Truck, Link2 } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Dashboard() {
  const [brand, setBrand] = useState(null)
  const [protocols, setProtocols] = useState({ performance: [], recovery: [] })
  const [insights, setInsights] = useState({ insights: [] })
  const demoEmail = 'owner@amazingxo.com'

  useEffect(() => {
    fetch(`${API}/api/brand`).then(r=>r.json()).then(setBrand)
    fetch(`${API}/api/protocols`).then(r=>r.json()).then(setProtocols)
  }, [])

  const getInsights = async () => {
    const res = await fetch(`${API}/api/ai/insights`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ owner_email: demoEmail })
    })
    const data = await res.json()
    setInsights(data)
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-black/10 p-6 bg-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Performance Console</h3>
                <button onClick={getInsights} className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-black text-white text-sm">
                  <Cpu size={16}/> AI Insights
                </button>
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <Tile icon={<Activity size={16}/>} title="Data" desc="Biomarkers"/>
                <Tile icon={<Zap size={16}/>} title="Performance" desc="Capacity, Power, Speed, Pressure, Efficiency"/>
                <Tile icon={<ShieldCheck size={16}/>} title="Recovery" desc="Inflammation, Fatigue, Electrolytes, Lymphatic, Glycogen"/>
                <Tile icon={<Truck size={16}/>} title="Shipments" desc="Kits and prescriptions"/>
              </div>
              {insights.insights?.length > 0 && (
                <ul className="mt-6 space-y-2 text-sm text-black/80 list-disc pl-6">
                  {insights.insights.map((i, idx) => (<li key={idx}>{i}</li>))}
                </ul>
              )}
            </div>

            <div className="rounded-2xl border border-black/10 p-6 bg-white">
              <h3 className="text-lg font-semibold">Protocols</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Performance</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {protocols.performance.map(p => <Pill key={p} label={p}/> )}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Recovery</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {protocols.recovery.map(p => <Pill key={p} label={p}/> )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-black/10 p-6 bg-white">
              <h3 className="text-lg font-semibold">Membership</h3>
              <p className="mt-2 text-sm text-black/70">Access Fee — $25/month</p>
              <p className="text-sm text-black/70">Performance Membership — $1,497/month</p>
            </div>
            <div className="rounded-2xl border border-black/10 p-6 bg-white">
              <h3 className="text-lg font-semibold">Integrations</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-black text-white text-xs"><Link2 size={12}/> Stripe</span>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-black text-white text-xs"><Link2 size={12}/> Apple Health</span>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-black text-white text-xs"><Link2 size={12}/> Google Fit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Tile({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-black/10 p-4">
      <div className="flex items-center gap-2 text-sm font-medium">{icon} {title}</div>
      <div className="mt-2 text-xs text-black/70">{desc}</div>
    </div>
  )
}

function Pill({ label }) {
  return <span className="inline-flex items-center px-3 py-1 rounded-full border border-black/10 text-sm">{label}</span>
}
