export default function Policies(){
  const items = [
    { key: 'privacy', title: 'Privacy Policy', body: 'We collect only what drives performance. No resale. No noise.'},
    { key: 'terms', title: 'Terms of Service', body: 'Membership maintains access to the console, data, and shipments.'},
    { key: 'refund', title: 'Refund Policy', body: 'Access fees are monthly. Packages are service-forward and non-refundable once delivered.'},
  ]
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
        {items.map((i)=> (
          <article key={i.key} className="xo-card p-6 bg-white">
            <h3 className="text-lg font-semibold text-slate-900">{i.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{i.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
