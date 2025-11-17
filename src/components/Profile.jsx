import { useState } from 'react'

export default function Profile(){
  const [name, setName] = useState('Owner')
  const [email, setEmail] = useState('owner@amazingxo.com')
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/10 p-6 bg-white">
          <h3 className="text-lg font-semibold">Profile</h3>
          <div className="mt-4 grid gap-4">
            <label className="text-sm">Name
              <input className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2" value={name} onChange={e=>setName(e.target.value)} />
            </label>
            <label className="text-sm">Email
              <input className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2" value={email} onChange={e=>setEmail(e.target.value)} />
            </label>
            <button className="inline-flex justify-center px-4 py-2 rounded-full bg-black text-white text-sm w-max">Save</button>
          </div>
        </div>
      </div>
    </section>
  )
}
