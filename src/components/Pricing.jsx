import { motion } from 'framer-motion'

export default function Pricing() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="rounded-2xl border border-black/10 p-6 bg-white shadow-sm">
            <h3 className="text-lg font-semibold">Access Fee</h3>
            <p className="mt-2 text-4xl font-black tracking-tight">$25<span className="text-base font-medium text-black/60">/month</span></p>
            <ul className="mt-4 text-sm text-black/70 space-y-2">
              <li>Keeps your spot</li>
              <li>Keeps your dashboard live</li>
              <li>Keeps data access open</li>
              <li>Keeps shipments flowing</li>
            </ul>
          </motion.div>

          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.05}} className="rounded-2xl border-2 border-black p-6 bg-gradient-to-br from-white to-blue-50 shadow-lg">
            <h3 className="text-lg font-semibold">Performance Membership</h3>
            <p className="mt-2 text-4xl font-black tracking-tight">$1,497<span className="text-base font-medium text-black/60">/month</span></p>
            <ul className="mt-4 text-sm text-black/70 space-y-2">
              <li>Performance/Recovery package</li>
              <li>Monthly protocol access</li>
              <li>Performance console dashboard</li>
              <li>Provider support</li>
              <li>Quarterly data assessments</li>
            </ul>
          </motion.div>

          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.1}} className="rounded-2xl border border-black/10 p-6 bg-white shadow-sm">
            <h3 className="text-lg font-semibold">Optional A La Carte</h3>
            <ul className="mt-4 text-sm text-black/70 space-y-2">
              <li>Bloodwork — $397/every 3 months</li>
              <li>Prescription Only — $197/month</li>
              <li>Nurse Phone Support — $297/month (two calls)</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
