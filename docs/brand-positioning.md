# Brand positioning baseline

Written 2026-09-10 as the single source of truth for what this practice is, who it's for,
and what it offers — so future copy, page, and SEO decisions have one place to check
against instead of drifting. If a piece of content on the site contradicts this doc, the
content is wrong, not this doc (until this doc is deliberately updated).

This draft is synthesised from what's already decided and live on the site (homepage,
about, pricing copy) plus the actual case-study roster in Sanity. Sections marked
**OPEN — needs your call** are genuine forks I can't resolve from the evidence alone.

**Status (2026-09-10):** both original open items resolved — see §2 and §4. Axiom and VIN
Shield removed from Sanity (both were unpublished drafts, never actually live). Planning
Enforcement Advisory un-noindexed. Growth Websites, Custom Software and Booking Systems &
Automation retired via 301 redirect to `/services`. Blog index metadata fixed. Two new
smaller open items in §4a (one blog post) and a note on `/pricing` and `/about` not being
in main nav.

---

## 1. Who this is

An independent practice, not an agency. One senior practitioner (William Langdown) working
across three connected disciplines — Brand, Digital, Technology — rather than three
separate businesses or a menu of specialisms. The reason those three sit together: most
providers are strong in one and outsource or gloss over the other two, which creates
handoffs and diluted judgement between strategy and what actually gets built.

Somerset-based (Taunton), working with clients across the UK, remotely. Somerset is where
the practice is from and a genuine source of local trust — it is not the boundary of the
practice.

**Positioning statement (already live on the homepage, keep this as the anchor):**
> For businesses whose brand, digital presence or systems haven't kept up with what
> they've actually become.

## 2. Target audience (ICP)

**Who this is for:** established, specialist businesses — usually owner-led or with a
small leadership team, with real trading history — whose commercial credibility no longer
matches the maturity of the business. The buyer is a business owner or senior
decision-maker, not a marketing department or procurement function.

**Who this is *not* for:**
- Startups or pre-revenue businesses buying a first website
- Businesses wanting the cheapest possible option / a template site
- Enterprises with an internal digital/marketing team who just need execution capacity
- Consumer/D2C brands optimising primarily for volume or paid acquisition

**The recurring "trigger" that brings someone in:** the business has grown or matured, but
its outward presentation (brand/website) or its internal operations (manual processes,
disconnected tools) is still running on what it looked like five or ten years ago.

### RESOLVED: no named verticals for now

Decision (2026-09-10): stay generalist — "established specialist businesses," no named
industry. Not enough project experience in any one vertical yet to credibly specialise.
Revisit this once there's a denser cluster of work in one industry; don't build
`/industries/*` pages until then.

## 3. What's actually offered

Three capabilities, delivered as **scoped projects or broader engagements**, not a menu of
fixed products:

- **Brand** — Research, positioning, messaging, identity, creative direction
- **Digital** — UX, web design, digital experiences, technical SEO, analytics
- **Technology** — Development, software, integrations, automation, applied AI

This is the model already live at `/services` (titled "Capabilities") and `/pricing`
(titled "Working Together" — "focused projects are often around £2,500," broader
engagements scoped individually).

**Retired from this brand — do not resurrect as standalone offers:**
- Starter Websites (£495 template sites) — redirects to `/pricing`
- Website Audits (£145), Website Support (£60–90/hr), Care Plans (£19–149/month) — all
  redirect to `/pricing`
- **Growth Websites, Custom Software, Booking Systems & Automation** — per your last
  message, these are being retired as standalone product pages too. They were the
  package-priced (£1,500–£4,000 / from £3,000 / "priced individually") middle tier between
  the old commodity products and the new engagement model. Under this baseline, "website
  work" and "software work" are just the Digital and Technology capabilities — not separate
  named products with their own pricing badge and FAQ page.

If any of that £1,500–£4,000-style website work or software work continues in practice,
it's now just a **Digital** or **Technology** engagement, scoped like everything else —
not a differently-branded product line.

## 4. Evidence / proof — current state

Three case studies live in Sanity as of 2026-09-10 (published perspective — this is what's
actually on the public site, not the raw dataset which also showed two unpublished drafts):

| Client | Fits new ICP? | Notes |
|---|---|---|
| The Planning Enforcement Advisory | Yes — flagship | Now indexable (was `robots: { index: false }`, fixed 2026-09-10) |
| Building Ventilation Services Ltd | Yes | Strong, quantified (56→98 mobile PageSpeed) |
| The Garden Tablecloth Co. | Kept deliberately | Not current ICP (Etsy seller → own store, Wix build) but good results and William doesn't want it dropped — keep as CRO/audit proof, just don't lead with it as ICP evidence |

**Removed 2026-09-10:** VIN Shield and Axiom (concept demo, not a real client) — both were
unpublished drafts, never actually live on williamlangdown.com, discarded from Sanity
entirely per William's instruction.

### RESOLVED: Planning Enforcement noindex

Was likely an oversight (case study links out to a Vercel preview URL, `pea-sooty.vercel.app`,
not a real domain — plausibly noindexed while unfinished and never revisited). Fixed
2026-09-10: `robots: { index: false }` removed, canonical + OG tags added. Now indexable.

## 5. Brand voice / tone

- Grounded, plain-spoken, confident. Explains *why*, not just *what*.
- Research-led: claims are backed by a specific project, number, or reasoning — not
  generic assertion ("we build great websites").
- No fake urgency, no countdown-style sales language, no "package" framing (Starter /
  Growth / Pro tiers).
- No hype-cycle language around AI — when automation/AI comes up, it's framed as solving a
  specific operational problem (per the custom-software page's old framing: "replacing the
  spreadsheets and manual processes your team works around every day" — that instinct was
  right, keep it, just don't badge it as a separate product).
- Never describes the practice as an "agency," never uses "we" for a one-person practice.

## 6. What NOT to do (confirmed mistakes to avoid)

- No "[service] in Taunton & Somerset" / "[service] in Taunton" style title tags — this is
  the exact commodity-freelancer framing the reposition is moving away from, and it's
  currently live in `/blog`'s metadata (see next message) and was live on the three
  retiring service pages.
- No mass-produced town pages (Bridgwater, Yeovil, etc.) — confirmed non-goal.
- No generic "why your business needs a website in 2026" filler content.
- No separate landing page for every capability sub-item (UX consultancy, CRO consultancy,
  technical SEO, etc. each getting their own page) — these live as sections within the
  three capability pages, not as their own indexed pages.
- No pricing badges/FAQ-page structure per offer (the retired service pages' format) — one
  clear engagement model on `/pricing`, not five.

## 7. What this means for site structure

Matches this baseline as of 2026-09-10:
- Homepage, `/about`, `/pricing`, `/services` (Capabilities)
- Case studies: BVS, Planning Enforcement Advisory (both now indexable), Garden Tablecloth
  (kept deliberately, framed as CRO proof not ICP proof)
- `growth-websites`, `custom-software`, `booking-systems-automation` now 301 → `/services`,
  removed from sitemap.ts. Page files left in place (unreachable dead code — same pattern
  already used for the three earlier retired pages, see `docs/orla-migration-notes.md`).
- `/blog` index metadata fixed (was the single worst commodity-language offender on the
  site — "Web Design Blog... Taunton & Somerset... for small businesses").

### Blog posts — reviewed 2026-09-10, per-post verdict

Individual post metadata pulls from each post's own Sanity fields, not hardcoded — so the
code is fine, the problem was always content. Six posts exist, verdict on each:

| Post | Verdict | Why |
|---|---|---|
| "Do Businesses in Small Towns in Somerset Like Chard or Frome Need a Website?" | **OPEN — recommend retire** | Purest commodity-freelancer framing on the site, title and description both. No salvageable premium angle — this is a different business's content. |
| "How AI Is Changing the Construction Industry, and Why Small Builders Should Pay Attention" | Needs a title/description rewrite | Topic is genuinely good (aligns with Technology capability + trades-adjacent proof via BVS) but "small builders... in Somerset" framing undercuts it. Body may be fine, headline framing isn't. |
| "Agentic AI and the small business admin problem" | Needs a title rewrite | Title says "small business," description is actually fine/neutral. Likely just a title/slug fix, not a rewrite. |
| "Mobile-First Isn't Always Right..." | Keep as-is | No commodity language, reads as genuine expert UX/CRO writing. |
| "The First 5 Things I Check When Looking at a Website" | Keep as-is | Same — evergreen, first-person expert framing, fits fine. |
| "The Trust Signals That Actually Matter on a Product Page" | Keep as-is | Same. |

So this isn't "rewrite the blog," it's: retire 1, retitle 2, leave 3 alone. **Actioned
2026-09-10**: Chard/Frome post unpublished (moved to draft, not deleted — recoverable in
Studio if ever wanted back); "Agentic AI and the small business admin problem" retitled to
"Agentic AI and the operational admin problem"; "How AI Is Changing the Construction
Industry..." retitled to "How AI Is Changing Construction, and What Established Firms
Should Watch For." Slugs left unchanged on both to avoid breaking URLs. Blog is now 5
published posts, none with commodity/small-town framing left.

---

**Review this and tell me what's wrong or missing** — particularly the two OPEN items
(named verticals, Planning Enforcement noindex) — and I'll fold your answers back into
this doc before we touch any actual page content, so we're rewriting the blog and retiring
those three pages against a settled baseline instead of guessing again.
