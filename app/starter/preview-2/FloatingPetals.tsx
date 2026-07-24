'use client'

import { motion } from 'framer-motion'

// Ambient drifting petals confined to the hero section. Purely decorative,
// gives the florist theme a bit of life without needing real photography.
const petals = [
  { left: '6%', size: 16, delay: 0, duration: 14, rotate: -20 },
  { left: '18%', size: 10, delay: 3, duration: 11, rotate: 30 },
  { left: '32%', size: 13, delay: 1.5, duration: 16, rotate: -10 },
  { left: '58%', size: 11, delay: 5, duration: 13, rotate: 15 },
  { left: '74%', size: 15, delay: 2, duration: 15, rotate: -25 },
  { left: '88%', size: 9, delay: 4.5, duration: 12, rotate: 20 },
]

function Petal({ size, rotate }: { size: number; rotate: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ transform: `rotate(${rotate}deg)` }}>
      <path
        d="M12 2C15 6 15 12 12 22C9 12 9 6 12 2Z"
        fill="#C97B5A"
        fillOpacity="0.35"
      />
    </svg>
  )
}

export default function FloatingPetals() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {petals.map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: p.left, top: '-5%' }}
          animate={{ y: ['0%', '520%'], x: [0, 18, -12, 0], rotate: [p.rotate, p.rotate + 40, p.rotate] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
        >
          <Petal size={p.size} rotate={p.rotate} />
        </motion.div>
      ))}
    </div>
  )
}
