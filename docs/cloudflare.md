# Cloudflare Workers deployment (OpenNext)

Built alongside Vercel. `main` still deploys to Vercel until the nameservers move.

## Scripts
- `npm run cf:build`: build, then remove server secrets from the bundle (`scripts/cf-strip-env.mjs`).
- `npm run cf:preview`: build and run locally on the Workers runtime.
- `npm run cf:deploy`: build and deploy. Always use these scripts. Running
  `opennextjs-cloudflare build` directly ships everything in `.env.local` inside the Worker.

## Variables
Build time (`.env.local` / `.env.production.local`, both gitignored): `NEXT_PUBLIC_SANITY_PROJECT_ID`,
`NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `NEXT_PUBLIC_GA_ID`.

Worker secrets (`wrangler secret put`): `RESEND_API_KEY`, `RECAPTCHA_SECRET_KEY`.
For local preview put the same two in `.dev.vars` (gitignored).

Not needed: Production on Vercel has no Sanity tokens or portfolio passcode, and no code reads `GOOGLE_*`.
`SITE_ENV`: set to anything but `production` at build time to make a staging build noindex.

## Caching
KV holds the page cache and a memory queue rebuilds pages after their `revalidate` window. There is no
D1 tag cache, so `revalidatePath` does nothing. Its only callers are in the retired Starter portfolio manager.

## Not carried over
The Starter order upload (`/api/starter-upload`, Vercel Blob) is unreachable because `/starter/*` redirects.
The code is untouched, and `BLOB_READ_WRITE_TOKEN` is deliberately not set on the Worker.

## Deploy steps
Status: steps 1 to 3 are done. A noindex staging build (`SITE_ENV=staging`) is live at
https://williamlangdown.william-3f7.workers.dev. Redeploy without `SITE_ENV` before the domain move.

1. `npx wrangler login`, using your own Cloudflare account (not a client's).
2. `npx wrangler kv namespace create NEXT_INC_CACHE_KV`, then put the id in `wrangler.jsonc`.
3. `npm run cf:deploy`, then `npx wrangler secret put` for the two secrets.
4. Test on the workers.dev URL: contact form, questionnaire, a blog page more than an hour after deploy,
   and the logs for CPU limit errors. Add the workers.dev hostname to the reCAPTCHA site, and to Sanity CORS
   if you want to use /studio there.

## Domain move (DNS is currently on Vercel)
1. Add `williamlangdown.com` to Cloudflare.
2. Compare the imported records against `npx vercel dns ls williamlangdown.com` (all pages). Required: apex MX
   `smtp.google.com`; `google._domainkey`, `default._domainkey`, `resend._domainkey`; `send` MX and TXT; apex SPF;
   three Google site-verification TXT records; `_dmarc`. Also review the `mail`, `ftp`, `ssh`, `autoconfig` and
   `autodiscover` A records. Set mail-related records to DNS only. Do not copy Vercel's `*` ALIAS or CAA defaults.
3. Change the nameservers where the domain is registered.
4. Add `routes` with `custom_domain: true` for the apex and `www` to `wrangler.jsonc` (removing conflicting records
   first), redirect `www` to the apex, and deploy.
5. Send and receive a test email and test both forms. Remove the Vercel project only after that.

Pre-existing: the apex SPF record includes Resend only, not Google (`include:_spf.google.com`).
