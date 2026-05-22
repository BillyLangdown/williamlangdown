export default function PageDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

      {/* Flowing line — spans full page height, weaves left/right between sections */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          className="[vector-effect:non-scaling-stroke]"
          d="M 38 0 C 72 3, 68 11, 60 16 C 52 21, 12 25, 20 34 C 27 41, 84 45, 80 53 C 76 59, 16 61, 18 70 C 20 76, 80 80, 74 87 C 68 92, 42 96, 48 100"
          stroke="#C17A3A"
          strokeWidth="20"
          opacity="0.09"
          strokeLinecap="round"
        />
      </svg>

      {/* Circle 1 — upper right, bleeds off edge */}
      <div className="absolute top-[5%] -right-16 md:-right-20 w-[220px] h-[220px] md:w-[340px] md:h-[340px] rounded-full border border-[#C17A3A] opacity-[0.1]" />

      {/* Circle 2 — mid left, large, mostly off-screen */}
      <div className="absolute top-[38%] -left-24 md:-left-40 w-[300px] h-[300px] md:w-[480px] md:h-[480px] rounded-full border border-[#1A1A1A] opacity-[0.05]" />

      {/* Circle 3 — lower right */}
      <div className="absolute top-[65%] -right-12 md:-right-28 w-[240px] h-[240px] md:w-[380px] md:h-[380px] rounded-full border border-[#C17A3A] opacity-[0.09]" />

    </div>
  )
}
