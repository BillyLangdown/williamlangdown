export default function KeystoneLogo({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M7 3H17L14 21H10L7 3Z" />
    </svg>
  )
}
