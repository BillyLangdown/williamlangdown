/**
 * Visible stand-in for a real asset that doesn't exist yet. Never
 * fabricate a mock in its place — this makes the gap obvious to the
 * client during review instead of quietly shipping a fake screenshot.
 */
export default function AssetPlaceholder({
  need,
  aspect = '4 / 3',
}: {
  need: string
  aspect?: string
}) {
  return (
    <div
      className="flex w-full items-center justify-center border border-dashed p-8 text-center"
      style={{ aspectRatio: aspect, borderColor: 'rgba(16,35,63,0.25)', background: 'rgba(16,35,63,0.03)' }}
    >
      <p className="max-w-xs text-xs leading-relaxed text-tertiary">
        <span className="mb-1 block font-semibold uppercase tracking-widest text-secondary">
          Placeholder
        </span>
        Needs: {need}
      </p>
    </div>
  )
}
