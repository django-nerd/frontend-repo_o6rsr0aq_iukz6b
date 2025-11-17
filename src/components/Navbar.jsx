import { Link, useLocation } from 'react-router-dom'
import { Menu, User, ShieldCheck, Cpu, Activity, CreditCard } from 'lucide-react'

function NavLink({ to, label }) {
  const location = useLocation()
  const active = location.pathname === to
  return (
    <Link
      to={to}
      className={`px-3 py-2 text-sm transition-colors ${active ? 'text-black' : 'text-gray-500 hover:text-black'}`}
    >
      {label}
    </Link>
  )
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 shadow-inner shadow-white/40" />
          <span className="font-semibold tracking-tight">AmazingXO</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" label="Home" />
          <NavLink to="/dashboard" label="Dashboard" />
          <NavLink to="/pricing" label="Pricing" />
          <NavLink to="/policies" label="Policies" />
          <NavLink to="/ai" label="AI" />
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/profile" className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-black/10 hover:border-black/20 transition-colors">
            <User size={16} /> Profile
          </Link>
          <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-black/10">
            <Menu size={16} />
          </button>
        </div>
      </div>
    </header>
  )
}
