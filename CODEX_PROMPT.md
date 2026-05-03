# Build Task: content-readability-optimizer

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: content-readability-optimizer
HEADLINE: Optimize content for target reading levels
WHAT: Analyzes blog posts and suggests edits to match specific reading levels (8th grade, college, etc.) with real-time readability scoring
WHY: 43% of adults read below 9th grade level but most content is written at college level
WHO PAYS: Content creators and marketing teams
NICHE: content-creation
PRICE: $$11/mo

ARCHITECTURE SPEC:
Next.js app with a text editor interface that analyzes content in real-time using readability algorithms (Flesch-Kincaid, SMOG, etc.). Users paste content, select target reading level, and get instant feedback with specific suggestions for simplification.

PLANNED FILES:
- app/page.tsx
- app/editor/page.tsx
- app/api/analyze/route.ts
- app/api/suggestions/route.ts
- app/api/webhooks/lemonsqueezy/route.ts
- components/ReadabilityEditor.tsx
- components/ReadabilityScore.tsx
- components/SuggestionPanel.tsx
- components/TargetLevelSelector.tsx
- lib/readability.ts
- lib/suggestions.ts
- lib/lemonsqueezy.ts
- lib/auth.ts

DEPENDENCIES: next, react, tailwindcss, next-auth, prisma, @prisma/client, @lemonsqueezy/lemonsqueezy.js, textstat, compromise, lucide-react, react-textarea-autosize, recharts

REQUIREMENTS:
- Next.js 15 with App Router (app/ directory)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components (npx shadcn@latest init, then add needed components)
- Dark theme ONLY — background #0d1117, no light mode
- Stripe Payment Link for payments (hosted checkout — use the URL directly as the Buy button href)
- Landing page that converts: hero, problem, solution, pricing, FAQ
- The actual tool/feature behind a paywall (cookie-based access after purchase)
- Mobile responsive
- SEO meta tags, Open Graph tags
- /api/health endpoint that returns {"status":"ok"}
- NO HEAVY ORMs: Do NOT use Prisma, Drizzle, TypeORM, Sequelize, or Mongoose. If the tool needs persistence, use direct SQL via `pg` (Postgres) or `better-sqlite3` (local), or just filesystem JSON. Reason: these ORMs require schema files and codegen steps that fail on Vercel when misconfigured.
- INTERNAL FILE DISCIPLINE: Every internal import (paths starting with `@/`, `./`, or `../`) MUST refer to a file you actually create in this build. If you write `import { Card } from "@/components/ui/card"`, then `components/ui/card.tsx` MUST exist with a real `export const Card` (or `export default Card`). Before finishing, scan all internal imports and verify every target file exists. Do NOT use shadcn/ui patterns unless you create every component from scratch — easier path: write all UI inline in the page that uses it.
- DEPENDENCY DISCIPLINE: Every package imported in any .ts, .tsx, .js, or .jsx file MUST be
  listed in package.json dependencies (or devDependencies for build-only). Before finishing,
  scan all source files for `import` statements and verify every external package (anything
  not starting with `.` or `@/`) appears in package.json. Common shadcn/ui peers that MUST
  be added if used:
  - lucide-react, clsx, tailwind-merge, class-variance-authority
  - react-hook-form, zod, @hookform/resolvers
  - @radix-ui/* (for any shadcn component)
- After running `npm run build`, if you see "Module not found: Can't resolve 'X'", add 'X'
  to package.json dependencies and re-run npm install + npm run build until it passes.

ENVIRONMENT VARIABLES (create .env.example):
- NEXT_PUBLIC_STRIPE_PAYMENT_LINK  (full URL, e.g. https://buy.stripe.com/test_XXX)
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  (pk_test_... or pk_live_...)
- STRIPE_WEBHOOK_SECRET  (set when webhook is wired)

BUY BUTTON RULE: the Buy button's href MUST be `process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
used as-is — do NOT construct URLs from a product ID, do NOT prepend any base URL,
do NOT wrap it in an embed iframe. The link opens Stripe's hosted checkout directly.

After creating all files:
1. Run: npm install
2. Run: npm run build
3. Fix any build errors
4. Verify the build succeeds with exit code 0

Do NOT use placeholder text. Write real, helpful content for the landing page
and the tool itself. The tool should actually work and provide value.


PREVIOUS ATTEMPT FAILED WITH:
Codex exited 1: Reading additional input from stdin...
OpenAI Codex v0.121.0 (research preview)
--------
workdir: /tmp/openclaw-builds/content-readability-optimizer
model: gpt-5.3-codex
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019deb6c-2745-7721-abf9-978252a83f01
--------
user
# Build Task: content-readability-optimizer

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: content-readability-optimizer
H
Please fix the above errors and regenerate.