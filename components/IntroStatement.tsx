// Just the text: positioning (sticky, centered, over the image) is
// handled by the wrapper in Hero.tsx that mounts this.
//
// Plain CSS animation (see .animate-fade-up in globals.css), not the
// IntersectionObserver-based ScrollReveal used elsewhere on the site.
// This sits inside a `sticky` element, and if the observer ever fails
// to fire there (which can happen depending on browser/device), the
// text stays at opacity:0 forever - invisible. A CSS animation always
// runs once the browser paints it, no observer to fail.
export default function IntroStatement() {
  return (
    <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
      <p className="font-display text-2xl md:text-3xl lg:text-[2.25rem] text-bone leading-[1.35] animate-fade-up">
        Research-led strategy, design and software, shaped around business, audience and market.
      </p>
    </div>
  )
}
