import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Dashboard from './components/Dashboard'
import Policies from './components/Policies'
import Profile from './components/Profile'

function Home(){
  return (
    <main>
      <Hero />
      <Pricing />
    </main>
  )
}

export default function App(){
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <footer className="border-t border-black/10 py-8 mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-black/60">AmazingXO — Just Performance.</div>
      </footer>
    </div>
  )
}
