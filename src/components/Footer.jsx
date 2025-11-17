export default function Footer(){
  return (
    <footer className="border-t border-slate-200 bg-white py-12 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="col-span-2 md:col-span-2">
            <div className="font-semibold tracking-tight text-slate-900">AmazingXO</div>
            <p className="mt-3 text-slate-600 max-w-sm">Refined control. Quiet power. A premium console for owners to monitor, adjust, and execute.</p>
          </div>
          <div>
            <div className="font-medium text-slate-900">App</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="/dashboard" className="hover:text-slate-900">Dashboard</a></li>
              <li><a href="/biomarkers" className="hover:text-slate-900">Biomarkers</a></li>
              <li><a href="/signals" className="hover:text-slate-900">Signals</a></li>
              <li><a href="/protocols" className="hover:text-slate-900">Protocols</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-slate-900">Operations</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="/shipments" className="hover:text-slate-900">Shipments</a></li>
              <li><a href="/integrations" className="hover:text-slate-900">Integrations</a></li>
              <li><a href="/policies" className="hover:text-slate-900">Policies</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-slate-900">Contact</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="mailto:owner@amazingxo.com" className="hover:text-slate-900">owner@amazingxo.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AmazingXO. All rights reserved.</p>
          <p>Color system: Indigo 600, Cyan 600, Slate 900 on White.</p>
        </div>
      </div>
    </footer>
  )
}
