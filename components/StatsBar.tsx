const stats = [
  {
    value: '1s',
    label: 'is all that\'s needed to form a first impression',
  },
  {
    value: '1%',
    label: 'of visitors often leave after one page',
  },
  {
    value: '1%',
    label: 'of carts are abandoned',
  },
]

export default function StatsBar() {
  return (
    <section className="border-t border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {stats.map((stat, i) => (
          <div key={i} className="py-10 md:px-10 first:pl-0 last:pr-0">
            <span className="block text-5xl font-light text-gray-900 mb-3 tracking-tight">
              {stat.value}
            </span>
            <span className="text-sm text-gray-500 leading-relaxed">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
