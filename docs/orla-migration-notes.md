# Orla migration notes

Written as part of the williamlangdown.com repositioning (2026-08). This is a map of what
could move to the Orla codebase (orlabooking.com), not a migration itself — nothing in the
Orla repo was touched, and nothing here has been deleted from this repo. It documents what's
being unlinked from the live site (redirected or de-navved) and left in place on disk.

## What changed on williamlangdown.com

- `/starter` and everything under it now redirects to `/pricing` (301). `/starter/order`
  redirects to `/contact`. The routes and their code are untouched.
- The Starter Websites and Orla product both still exist as code/pages, but are no longer
  linked from Nav, Footer, the homepage, or any service page.
- `/services/website-audits`, `/services/website-support` and `/services/care-plans` (the
  £145 audit, hourly support and monthly retainer pages) also now redirect to `/pricing`,
  which explains the new engagement-based model. These aren't Orla-related, but are flagged
  here since they're the other set of pages retired in this pass.

## 1. Starter website content

Location: `app/starter/**`

- `page.tsx` — the Starter Websites sales page (£495, 3-page, pick-a-design pitch), plus
  `DesignPicker.tsx` (the 6-design picker UI) and `AskWilliamBanner.tsx` (upsell prompt).
- `preview-1` … `preview-6`, plus `remix-ironclad` — seven full template demo sites, each with
  its own `layout.tsx`, home/about/contact pages, and a `PreviewNav.tsx`. These are the actual
  "six polished designs" referenced in the old pitch, plus the Ironclad rebrand concept
  (previously featured on the homepage as a project, now removed from there since it's a
  Starter template skin, not a client project).
- Variant names/positioning (from `app/actions/starter-order.ts`): Forge (bold/modern), Willow
  (warm/personal), Hartley (minimal/professional), Ochre (image-led/gallery), Axium
  (tech/interactive), Keystone (trade/dependable). Useful as a starting taxonomy if Orla ends
  up offering design variants.
- `order/page.tsx` + `order/OrderForm.tsx` (695 lines) — the order flow: design choice, content
  intake (photos, logo, copy), and checkout-adjacent form logic. The single largest piece of
  reusable UI in this tree.
- `_shared/` — `Lightbox.tsx`, `PageIntro.tsx`, `Reveal.tsx`, `StatCounter.tsx`: small reusable
  UI primitives used across the preview sites.
- `preview-4/manage/` — a passcode-protected self-serve dashboard (`ManageDashboard.tsx`,
  `PasscodeForm.tsx`) letting a Starter client manage their own gallery content. This is the
  closest thing in this repo to a customer self-management portal, worth a look if Orla builds
  a client-facing admin area.

Pricing/copy in this tree (£495, "live in about a week", "no contract, no deposit") is written
for the old commodity-freelancer positioning and would need rewriting for Orla's own brand
voice, not copied verbatim.

## 2. Booking-related content

Orla itself has no code in this repository — it's an external product at orlabooking.com,
referenced only as an outbound link (logo + "Visit orlabooking.com"). Those links have been
removed from `components/ServicesSection.tsx` (deleted), `components/PromoTicker.tsx`
(deleted), and `app/services/booking-systems-automation/page.tsx` (link and FAQ entry
removed). There is no booking-system implementation to migrate from this repo; that logic
lives in the Orla codebase already.

What is here: `preview-4`'s gallery manage flow (see above) is the closest analogue to a
booking/availability self-management UI, and may be a useful reference for Orla's own
customer-facing dashboard.

## 3. Small service-business messaging

Copy worth mining for Orla's own site/onboarding, not reused verbatim:

- `app/starter/page.tsx` and `app/pricing/page.tsx` (prior version, now rewritten) — sole
  trader / small business framing: "get online quickly", "no contract, no deposit", "see it
  live before you pay."
- `app/services/growth-websites/page.tsx` previously contrasted "Starter" vs "Growth" as
  template-vs-custom; that comparison block has been removed from this repo (no longer
  relevant once Starter isn't part of this brand) but the underlying logic, simple presence
  vs. a site built around a customer journey, may be useful framing for how Orla positions
  itself against a plain website builder.

## 4. Reusable functionality

- `app/starter/order/OrderForm.tsx` — multi-step intake form (design/variant selection,
  content collection, file uploads). The most substantial reusable piece.
- `app/api/starter-upload/route.ts` — a Vercel Blob token-exchange endpoint so uploads go
  browser → Blob directly, bypassing the ~4.5MB Serverless Function body limit. Generic
  pattern, not Starter-specific; directly reusable for any Orla upload flow (business photos,
  logos, documents).
- `app/actions/starter-order.ts` — server action that emails a formatted order summary via
  Resend on submission.
- `app/starter/preview-4/manage/*` + `app/actions/portfolio-manage.ts` — passcode-gated
  content management (cookie-based auth, Sanity writes via `portfolioWriteClient`,
  `revalidatePath` on save). A working (if minimal) pattern for a client self-service portal.
- `app/starter/_shared/*` — `Lightbox`, `Reveal` (scroll-in), `StatCounter`, `PageIntro`: small
  generic UI components with no Starter-specific coupling.
- `lib/portfolioConfig.ts` — currently just `MAX_ARTWORKS`, scoped as a comment to "the £495
  Starter price point." Would need re-deriving for whatever tier/limit logic Orla uses.

## 5. Dependencies

- **Resend** (`resend` package) — transactional email for order notifications
  (`starter-order.ts`) and the main contact form (`app/actions/contact.ts`). Orla would need
  its own Resend project/API key, not this one.
- **Vercel Blob** (`@vercel/blob`) — file uploads for the order form. Same note: separate
  storage/project for Orla.
- **Sanity** — `sanity/portfolioClient.ts` and the `portfolioGallery` schema
  (`sanity/schemas/portfolioGallery.ts`) back the preview-4 demo gallery, against a demo
  document (`portfolio-demo`) in this project's dataset. Orla would need its own Sanity
  project/dataset (or a different CMS entirely) rather than sharing this one.
- **reCAPTCHA v3** (`react-google-recaptcha-v3`) — used by the main contact form, not by the
  Starter order form itself (worth double-checking if Orla's intake forms need bot protection).

## 6. Do not migrate as-is

- Anything with williamlangdown.com's own SEO, schema, canonical URLs, or contact details
  baked in (metadata blocks in every `app/starter/**/page.tsx` and `layout.tsx`).
- Copy referencing "William Langdown", personal-brand phrasing, or the old commodity-freelancer
  tone, Orla needs its own brand voice, not a re-skin of this one.
- The shared `Nav`/`Footer`/`ScrollReveal`/design-token setup in this repo, Orla is a separate
  codebase and should establish its own component and token system rather than importing these.
- `hello@williamlangdown.com` / Resend "from" addresses and the Vercel Blob store tied to this
  project: infrastructure credentials are project-specific and shouldn't be shared across the
  two products.
