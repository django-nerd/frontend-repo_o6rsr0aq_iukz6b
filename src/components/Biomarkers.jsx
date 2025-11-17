import { useState } from 'react'

const preset = [
  { name: 'Testosterone', unit: 'ng/dL' },
  { name: 'Estradiol (E2)', unit: 'pg/mL' },
  { name: 'SHBG', unit: 'nmol/L' },
  { name: 'CRP', unit: 'mg/L' },
  { name: 'Fasting Insulin', unit: 'µIU/mL' },
]

export default function Biomarkers(){
  const [rows, setRows] = useState(preset.map(p=>({ ...p, value: '' })))

  const update = (i, val) => {
    const next = [...rows]
    next[i].value = val
    setRows(next)
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900">Biomarkers</h1>
          <p className="text-sm text-slate-600">Track the core set. Keep it clean.</p>
        </header>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Marker</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Value</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Unit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rows.map((r, i)=> (
                <tr key={r.name}>
                  <td className="px-4 py-3 text-sm text-slate-900">{r.name}</td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      value={r.value}
                      onChange={e=>update(i, e.target.value)}
                      placeholder="—"
                      className="w-40 rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">{r.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex gap-3">
          <button className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-indigo-600 text-white text-sm">Save</button>
          <button className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-slate-200 text-sm text-slate-900">Export</button>
        </div>
      </div>
    </section>
  )
}
