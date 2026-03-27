const problems = [
  {
    title: 'Low conversion rates',
    description:
      'Visitors browse but don\'t buy. Something in the journey is creating doubt — and doubt kills conversions.',
  },
  {
    title: 'Weak trust signals',
    description:
      'No reviews, a vague returns policy, or a dated design. Customers leave before they commit when trust isn\'t established.',
  },
  {
    title: 'Weak product pages',
    description:
      'Thin copy and poor imagery fail to answer the questions customers need answered before they\'ll hand over their card.',
  },
  {
    title: 'Confusing shopping',
    description:
      'A navigation or checkout that makes people stop and think is a checkout that makes people leave.',
  },
  {
    title: 'Generic looking stores',
    description:
      'A store that looks like every other store gives customers no reason to choose you over the alternatives.',
  },
  {
    title: 'Mobile journeys',
    description:
      'Over half of shoppers browse on mobile. A clunky mobile experience is silently costing you sales every day.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-gray-900 mb-4">
            Problems I Fix
          </h2>
          <p className="text-base text-gray-500 max-w-xl">
            These are the issues I most often see in ecommerce stores.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="bg-white p-8 flex flex-col gap-4"
            >
              <span className="text-xs text-gray-400 tabular-nums">
                0{i + 1}
              </span>
              <h3 className="text-base font-medium text-gray-900">
                {problem.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
