import { useState } from 'react'

const performance = ['Capacity','Power','Speed','Pressure','Efficiency']
const recovery = ['Inflammation','Fatigue','Electrolytes','Lymphatic','Glycogen']

export default function Signals(){
  const [vals, setVals] = useState(() => Object.fromEntries([...performance, ...recovery].map(k=>[k,50])))
  const setVal = (k, v) => setVals(prev=>({ ...prev, [k]: v }))

  const Slider = ({ label }) => (
    <div>
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-slate-900">{label}</span>
        <span className="text-slate-500">{vals[label]}</span>
      </div>
      <input type="range" min="0" max="100" value={vals[label]} onChange={e=>setVal(label, Number(e.target.value))} className="w-full accent-cyan-600" />
    </div>
  )

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900">Signals</h1>
          <p className="text-sm text-slate-600">Quick sliders. Snapshot the day.</p>
        </header>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="xo-card p-6 bg-white">
            <h3 className="font-medium text-slate-900 mb-4">Performance</h3>
            <div className="space-y-5">
              {performance.map(k=> <Slider key={k} label={k} />)}
            </div>
          </div>
          <div className="xo-card p-6 bg-white">
            <h3 className="font-medium text-slate-900 mb-4">Recovery</h3>
            <div className="space-y-5">
              {recovery.map(k=> <Slider key={k} label={k} />)}
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button className="xo-btn xo-btn-secondary">Save</button>
        </div>
      </div>
    </section>
  )
}
