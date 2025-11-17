import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Biomarkers from './components/Biomarkers'
import Signals from './components/Signals'
import Protocols from './components/Protocols'
import Policies from './components/Policies'
import Profile from './components/Profile'
import Shipments from './components/Shipments'
import Integrations from './components/Integrations'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Layout>
        <Routes>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/biomarkers" element={<Biomarkers />} />
          <Route path="/signals" element={<Signals />} />
          <Route path="/protocols" element={<Protocols />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Layout>
    </div>
  )
}
