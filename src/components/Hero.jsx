import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/95" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl sm:text-7xl font-black tracking-tight leading-[0.95]"
        >
          PERFORMANCE.
          <br />
          <span className="text-black/70">That’s the point. That’s the promise. That’s the experience.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl text-black/70 max-w-2xl"
        >
          AmazingXO is Performance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link to="/pricing" className="pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white text-sm font-semibold shadow">
            Get Started
          </Link>
          <Link to="/dashboard" className="pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-black/10 text-sm font-semibold">
            Open Console
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
