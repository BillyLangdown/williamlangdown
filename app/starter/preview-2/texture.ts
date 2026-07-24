// Shared cream-section background: a tonal floral pattern plus a fine grain
// overlay, layered the same way everywhere the base cream color is used
// (root, header, footer) so the pattern reads as one continuous surface.
export const willowTexture: React.CSSProperties = {
  backgroundImage:
    "url('/images/starter/willow-pattern.png'), " +
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
  backgroundSize: '560px 560px, 120px 120px',
  backgroundRepeat: 'repeat, repeat',
}
