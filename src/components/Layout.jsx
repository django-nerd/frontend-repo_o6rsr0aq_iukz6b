import { Link, useLocation } from 'react-router-dom'

const nav = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/biomarkers', label: 'Biomarkers' },
  { to: '/signals', label: 'Signals' },
  { to: '/protocols', label: 'Protocols' },
  { to: '/shipments', label: 'Shipments' },
  { to: '/integrations', label: 'Integrations' },
  { to: '/policies', label: 'Policies' },
]

function NavLink({ to, children }){
  const { pathname } = useLocation()
  const active = pathname === to
  return (
    <Link
      to={to}
      className={`px-3 py-2 text-sm rounded-full transition-colors ${active ? 'text-slate-900 bg-slate-100' : 'text-slate-600 hover:text-slate-900'}`}
    >
      {children}
    </Link>
  )
}

export default function Layout({ children }){
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 xo-glass">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight">
            AmazingXO
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map(i=> <NavLink key={i.to} to={i.to}>{i.label}</NavLink>)}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/profile" className="xo-btn xo-btn-quiet">Profile</Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
