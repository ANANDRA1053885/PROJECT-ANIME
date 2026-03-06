# AniVerse — Frontend Architecture
### Production-Grade Anime Community Platform

---

## 1. Complete Frontend Architecture

### Architectural Philosophy

AniVerse is built on a **hybrid rendering model** using Next.js App Router. The strategy:

- **Server Components (RSC)** for data-heavy, SEO-critical pages (home, anime detail, character pages)
- **Client Components** only where interactivity demands it (forms, real-time features, animations)
- **Edge Runtime** for geographically distributed responses on latency-sensitive routes
- **Streaming + Suspense** for progressive hydration, enabling fast FCP even with large data payloads

### Rendering Decision Matrix

| Page | Strategy | Rationale |
|---|---|---|
| Home | ISR (60s revalidation) | Trending content changes frequently but not per-request |
| Anime Detail | ISR (5min) + Streaming | Static metadata + dynamic reviews streamed in |
| Character Page | ISR (1hr) | Rarely changes |
| Community Forum | SSR + SWR | Real-time discussion requires fresh data |
| User Profile | SSR (authenticated) | Personalized, cannot be cached globally |
| Search Results | SSR | Dynamic, user-specific |

---

## 2. Folder Structure

```
aniverse/
├── app/                              # Next.js App Router
│   ├── (auth)/                       # Auth route group (no shared layout)
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── (main)/                       # Main layout route group
│   │   ├── layout.tsx                # Root shell: nav, footer, providers
│   │   ├── page.tsx                  # Home page (ISR)
│   │   ├── anime/
│   │   │   ├── [slug]/
│   │   │   │   ├── page.tsx          # Anime detail (ISR + Streaming)
│   │   │   │   ├── episodes/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── loading.tsx       # Skeleton UI
│   │   │   └── loading.tsx
│   │   ├── character/
│   │   │   └── [id]/
│   │   │       ├── page.tsx
│   │   │       └── loading.tsx
│   │   ├── community/
│   │   │   ├── page.tsx              # Forum hub
│   │   │   ├── [boardId]/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [threadId]/
│   │   │   │       └── page.tsx
│   │   │   └── loading.tsx
│   │   ├── profile/
│   │   │   ├── [username]/
│   │   │   │   └── page.tsx          # Public profile
│   │   │   └── me/
│   │   │       └── page.tsx          # Authenticated user profile
│   │   └── search/
│   │       └── page.tsx
│   ├── api/                          # Route Handlers (BFF layer)
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts
│   │   ├── revalidate/
│   │   │   └── route.ts              # Webhook-triggered revalidation
│   │   └── og/
│   │       └── route.tsx             # Dynamic Open Graph images
│   ├── globals.css
│   ├── layout.tsx                    # Root layout (html, body)
│   └── manifest.ts                   # PWA manifest
│
├── components/
│   ├── ui/                           # shadcn/ui primitives (auto-generated)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── sheet.tsx
│   │   └── ...
│   ├── common/                       # App-wide shared components
│   │   ├── navigation/
│   │   │   ├── NavBar.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── UserMenu.tsx
│   │   ├── layout/
│   │   │   ├── PageContainer.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   └── InfiniteScrollWrapper.tsx
│   │   ├── media/
│   │   │   ├── AnimeCard.tsx
│   │   │   ├── AnimeCardSkeleton.tsx
│   │   │   ├── AnimeBanner.tsx
│   │   │   └── EpisodeCard.tsx
│   │   ├── feedback/
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── EmptyState.tsx
│   │   │   └── Toast.tsx
│   │   └── seo/
│   │       ├── JsonLd.tsx
│   │       └── MetaTags.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── TrendingCarousel.tsx
│   │   ├── NewsGrid.tsx
│   │   ├── RecommendationRail.tsx
│   │   └── CommunityHighlights.tsx
│   ├── anime/
│   │   ├── AnimeHeader.tsx
│   │   ├── Synopsis.tsx
│   │   ├── RatingWidget.tsx
│   │   ├── ReviewList.tsx
│   │   ├── ReviewCard.tsx
│   │   ├── EpisodeList.tsx
│   │   ├── AnimeDiscussions.tsx
│   │   └── AddToWatchlistButton.tsx
│   ├── character/
│   │   ├── CharacterHero.tsx
│   │   ├── AppearanceList.tsx
│   │   └── CharacterDiscussions.tsx
│   ├── community/
│   │   ├── BoardList.tsx
│   │   ├── ThreadList.tsx
│   │   ├── ThreadCard.tsx
│   │   ├── PostComposer.tsx
│   │   ├── PostList.tsx
│   │   ├── VoteButton.tsx
│   │   └── TrendingDebates.tsx
│   └── profile/
│       ├── ProfileHeader.tsx
│       ├── WatchlistGrid.tsx
│       ├── ActivityFeed.tsx
│       ├── UserReviews.tsx
│       └── StatsPanel.tsx
│
├── hooks/                            # Custom React hooks
│   ├── useAnimeDetail.ts
│   ├── useInfiniteThreads.ts
│   ├── useWatchlist.ts
│   ├── useOptimisticVote.ts
│   ├── useMediaQuery.ts
│   ├── useDebounce.ts
│   └── useKeyboardNav.ts
│
├── lib/
│   ├── api/                          # API client layer
│   │   ├── client.ts                 # Axios/fetch instance with interceptors
│   │   ├── anime.ts                  # Anime API functions
│   │   ├── community.ts
│   │   ├── user.ts
│   │   └── search.ts
│   ├── auth/
│   │   ├── config.ts                 # NextAuth config
│   │   └── middleware.ts
│   ├── query/
│   │   ├── keys.ts                   # TanStack Query key factory
│   │   └── client.ts                 # QueryClient singleton
│   ├── utils/
│   │   ├── cn.ts                     # clsx + tailwind-merge
│   │   ├── format.ts                 # Date, number formatters
│   │   ├── anime.ts                  # Anime-specific utils
│   │   └── url.ts
│   └── validations/
│       ├── review.schema.ts
│       ├── thread.schema.ts
│       └── profile.schema.ts
│
├── store/                            # Zustand stores
│   ├── useAuthStore.ts
│   ├── useWatchlistStore.ts
│   ├── useUIStore.ts                 # Theme, sidebar, modals
│   └── usePlayerStore.ts             # Trailer/preview player state
│
├── types/
│   ├── anime.types.ts
│   ├── user.types.ts
│   ├── community.types.ts
│   └── api.types.ts
│
├── config/
│   ├── site.ts                       # Site-wide constants
│   ├── navigation.ts                 # Nav link definitions
│   └── queryConfig.ts                # TanStack Query defaults
│
├── middleware.ts                     # Edge middleware (auth, geolocation)
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── public/
    ├── icons/                        # PWA icons (all sizes)
    ├── images/
    └── sw.js                         # Service Worker (via next-pwa)
```

---

## 3. Component Architecture

### Design Principles

**Atomic Hierarchy**: `ui primitives → common components → feature components → page sections`

All components follow this contract:
1. **Server-first**: Default to RSC. Only add `"use client"` when hooks, browser APIs, or event handlers are needed.
2. **Single responsibility**: One clear purpose per component.
3. **Accessibility-native**: ARIA roles, keyboard focus, and semantic HTML are not afterthoughts.
4. **Typed props**: Strict TypeScript interfaces, no `any`.

### Key Component Patterns

**Pattern 1 — Server/Client Boundary Split**
```
AnimeDetailPage (Server)
  ├── AnimeHeader (Server) — poster, title, metadata
  ├── Synopsis (Server) — static content
  ├── Suspense boundary
  │   └── ReviewList (Client) — interactive, paginated
  ├── Suspense boundary
  │   └── EpisodeList (Client) — accordion, expandable
  └── AnimeDiscussions (Client) — real-time, voting
```

**Pattern 2 — Compound Components (shadcn pattern)**
```tsx
// AnimeCard as a compound component
<AnimeCard anime={data}>
  <AnimeCard.Poster />
  <AnimeCard.Info />
  <AnimeCard.Actions />    // Only rendered when authenticated
</AnimeCard>
```

**Pattern 3 — Optimistic UI**
```tsx
// VoteButton uses optimistic updates via TanStack Query
const { mutate } = useMutation({
  mutationFn: postVote,
  onMutate: async (variables) => {
    await queryClient.cancelQueries({ queryKey: keys.thread(id) });
    const prev = queryClient.getQueryData(keys.thread(id));
    queryClient.setQueryData(keys.thread(id), (old) => ({
      ...old, votes: old.votes + variables.direction
    }));
    return { prev };
  },
  onError: (_, __, ctx) => queryClient.setQueryData(keys.thread(id), ctx.prev),
});
```

**Pattern 4 — Virtualized Lists**

All infinite lists (episode lists, thread lists, review lists) use `@tanstack/react-virtual` for DOM-efficient rendering of large datasets.

### Animation Architecture (Framer Motion)

Define shared animation variants in `lib/utils/animations.ts`:

```ts
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  })
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } }
};
```

Use `LazyMotion` + `domAnimation` feature bundle to reduce Framer Motion's bundle impact by ~60%.

---

## 4. State Management Strategy

### Zustand Store Design

Zustand handles **client-side global state** only. Server state lives exclusively in TanStack Query.

```
┌─────────────────────────────────────────────────────┐
│                    State Layers                      │
├─────────────────┬───────────────────────────────────┤
│ Server State    │ TanStack Query                     │
│                 │ Cache, sync, background refetch    │
├─────────────────┼───────────────────────────────────┤
│ Client Global   │ Zustand                            │
│                 │ Auth session, watchlist, UI state  │
├─────────────────┼───────────────────────────────────┤
│ Local/Form      │ React Hook Form + Zod              │
│                 │ Review forms, post composer, etc.  │
├─────────────────┼───────────────────────────────────┤
│ URL State       │ Next.js searchParams               │
│                 │ Filters, pagination, search query  │
└─────────────────┴───────────────────────────────────┘
```

**`useAuthStore`** — User session, JWT tokens, auth status.
Persisted to `localStorage` via `zustand/middleware/persist`. Hydrated on mount.

**`useWatchlistStore`** — Local watchlist state with optimistic sync. Persisted offline, synced to server when online.

**`useUIStore`** — Theme (light/dark), mobile nav open state, active modal, toast queue.

**`usePlayerStore`** — Trailer player state (playing, muted, currentId) for the home hero and anime detail pages.

### TanStack Query Configuration

```ts
// config/queryConfig.ts
export const queryConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,         // 5 minutes
      gcTime: 1000 * 60 * 30,           // 30 minutes
      retry: 2,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    }
  }
};
```

**Query Key Factory** (`lib/query/keys.ts`):
```ts
export const keys = {
  anime: {
    all: ['anime'] as const,
    detail: (slug: string) => ['anime', slug] as const,
    reviews: (slug: string, page: number) => ['anime', slug, 'reviews', page] as const,
    episodes: (slug: string) => ['anime', slug, 'episodes'] as const,
  },
  community: {
    boards: ['community', 'boards'] as const,
    threads: (boardId: string) => ['community', boardId, 'threads'] as const,
    thread: (id: string) => ['community', 'thread', id] as const,
  },
  user: {
    profile: (username: string) => ['user', username] as const,
    watchlist: (userId: string) => ['user', userId, 'watchlist'] as const,
    activity: (userId: string) => ['user', userId, 'activity'] as const,
  }
};
```

---

## 5. Performance Optimization Plan

### Bundle Optimization

**Code Splitting Strategy:**
- Every page-level component is automatically code-split by Next.js App Router.
- Heavy client components (PostComposer with rich text, VideoPlayer) are wrapped in `dynamic()` with `ssr: false`.
- Framer Motion loaded via `LazyMotion` with `domAnimation` subset.
- `next/font` for zero-layout-shift font loading (served from same domain as app).

```ts
// next.config.mjs
const config = {
  experimental: {
    optimizePackageImports: ['framer-motion', '@radix-ui/react-*', 'lucide-react'],
    ppr: true,                          // Partial Prerendering (Next.js 15)
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [...],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  compress: true,
};
```

### Image Optimization

All anime imagery uses `next/image` with:
- **AVIF/WebP** format negotiation
- **`priority`** prop on hero images (eliminates LCP delay)
- Explicit `width` and `height` to prevent layout shift (CLS = 0)
- **Blur-up placeholders** via `placeholder="blur"` with `blurDataURL`
- Anime thumbnails served from CDN (Cloudflare) with immutable cache headers

### Critical Rendering Path

1. **Partial Prerendering (PPR)**: Static shell rendered instantly at edge; dynamic holes streamed in.
2. **Inline critical CSS**: Tailwind's purged CSS is ~10-20KB; no render-blocking stylesheets.
3. **Resource hints**: `<link rel="preconnect">` for API domain and image CDN in `app/layout.tsx`.
4. **Prefetching**: `<Link prefetch={true}>` on all in-viewport navigation links.

### Caching Architecture

```
Request → Cloudflare Edge Cache
  ↓ (miss)
Next.js Edge Runtime (middleware, routing)
  ↓
Next.js Full Route Cache (ISR)
  ↓ (dynamic segments)
React Cache (per-request deduplication)
  ↓
API / Database
```

- **Static pages**: Cached at CDN edge with `stale-while-revalidate` headers
- **API responses**: TanStack Query client-side cache (5min stale time)
- **Images**: Immutable cache (`Cache-Control: public, max-age=31536000, immutable`)
- **Fonts**: Cached via `next/font` (self-hosted, same origin)

### Core Web Vitals Targets

| Metric | Target | Strategy |
|---|---|---|
| LCP | < 1.5s | Hero image `priority`, CDN, AVIF |
| CLS | 0 | Explicit image dimensions, font-display: swap |
| FID/INP | < 100ms | Virtualization, deferred non-critical JS |
| TTFB | < 200ms | Edge rendering, ISR, Cloudflare |
| FCP | < 1.2s | PPR static shell, inline critical CSS |

### PWA Configuration

```ts
// next.config.mjs — via @ducanh2912/next-pwa
const withPWA = nextPWA({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  workboxOptions: {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/api\.aniverse\.com\//,
        handler: 'NetworkFirst',
        options: { cacheName: 'api-cache', networkTimeoutSeconds: 3 }
      },
      {
        urlPattern: /\.(jpg|jpeg|png|webp|avif|svg)$/,
        handler: 'CacheFirst',
        options: { cacheName: 'image-cache', expiration: { maxAgeSeconds: 604800 } }
      }
    ]
  }
});
```

PWA manifest (`app/manifest.ts`) includes: all icon sizes (72 to 512), `standalone` display mode, theme color, screenshots for app store listing.

---

## 6. Accessibility Architecture

WCAG 2.1 AA compliance is structural, not retrofitted.

**Semantic HTML Foundation:**
- Every page uses proper landmark elements: `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`
- Headings form a logical hierarchy (h1 → h2 → h3) on every page
- Interactive elements are always `<button>` or `<a>`, never `<div onClick>`

**Focus Management:**
- Custom `useFocusTrap` hook for all modal dialogs and drawers
- `useKeyboardNav` hook for carousel and list keyboard navigation (arrow keys, Home/End)
- Skip-to-content link as first focusable element in every page
- Visible focus rings via Tailwind's `focus-visible:` utilities

**ARIA Patterns:**
```tsx
// TrendingCarousel — full keyboard + screen reader support
<section aria-labelledby="trending-heading" aria-roledescription="carousel">
  <h2 id="trending-heading">Trending This Season</h2>
  <div role="group" aria-label={`${currentIndex + 1} of ${total}`}>
    {slides}
  </div>
  <button aria-label="Previous anime" aria-controls="carousel-track">‹</button>
  <button aria-label="Next anime" aria-controls="carousel-track">›</button>
</section>
```

**Color & Contrast:** All text meets 4.5:1 contrast ratio. Theme tokens enforced via design tokens in `tailwind.config.ts`.

**Motion Sensitivity:**
```css
@media (prefers-reduced-motion: reduce) {
  /* All Framer Motion animations respect this via `useReducedMotion()` hook */
}
```

**Forms (React Hook Form + Zod):**
- Error messages linked to inputs via `aria-describedby`
- Required fields marked with `aria-required="true"`
- Live validation announced via `aria-live="polite"` region

---

## 7. Development Workflow

### Toolchain

```
Linting:     ESLint + @typescript-eslint + eslint-plugin-jsx-a11y
Formatting:  Prettier
Git Hooks:   Husky + lint-staged (lint + typecheck on commit)
Testing:     Vitest (unit) + Playwright (E2E) + Storybook (component)
CI:          GitHub Actions
Versioning:  Changesets
```

### Branch Strategy (GitHub Flow)

```
main ──────────────────────────────────────────── Production
  └── feature/anime-review-system
  └── fix/mobile-nav-focus-trap
  └── perf/virtualize-episode-list
```

PRs require: passing CI, Lighthouse budget check, and 1 review.

### Environment Configuration

```
.env.local          # Developer local secrets
.env.development    # Shared dev config (committed)
.env.staging        # Staging environment
.env.production     # Production (injected by CI, never committed)
```

### Storybook

Every component in `components/common` and `components/ui` has a Story. Stories serve as:
- Visual regression testing baseline (via Chromatic)
- Living documentation
- A11y auditing (via `@storybook/addon-a11y`)

### Lighthouse CI Budget

```json
// lighthouserc.json
{
  "ci": {
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.95 }],
        "categories:best-practices": ["error", { "minScore": 0.95 }],
        "categories:seo": ["error", { "minScore": 0.9 }]
      }
    }
  }
}
```

---

## 8. Deployment Strategy

### Infrastructure

**Primary:** Vercel (optimal Next.js platform)
- Edge Network: 100+ PoPs globally
- Automatic ISR, PPR, and Edge Runtime support
- Preview deployments on every PR

**CDN / Asset Layer:** Cloudflare
- All static assets (`/_next/static/`) served via Cloudflare CDN
- Image optimization via Cloudflare Images (fallback for `next/image`)
- DDoS protection and WAF

**Database & Backend:** (BFF Pattern)
- Next.js Route Handlers act as a Backend-for-Frontend (BFF) layer
- Proxies requests to microservices, handles auth token injection
- Protects internal API keys from client exposure

### Scaling for Millions of Users

```
User Request
    ↓
Cloudflare Edge (CDN, DDoS, WAF)
    ↓
Vercel Edge Network (routing, middleware)
    ↓
┌───────────────────────────────────────┐
│ Vercel Edge Functions                 │
│ • Auth middleware (JWT verification)  │
│ • Geolocation routing                 │
│ • A/B testing                         │
└───────────────────────────────────────┘
    ↓
┌───────────────────────────────────────┐
│ Next.js Full Route Cache              │
│ • ISR pages served from cache         │
│ • ~99% of requests never hit origin  │
└───────────────────────────────────────┘
    ↓ (cache miss, <1% of requests)
┌───────────────────────────────────────┐
│ Next.js Server (Vercel Lambda)        │
│ • Dynamic rendering                   │
│ • BFF API calls                       │
└───────────────────────────────────────┘
    ↓
Backend Microservices / Database
```

**Key scalability decisions:**
- ISR means origin servers handle only ~1% of traffic for popular pages (the rest is served from cache)
- Stateless Next.js server — horizontally scalable with zero coordination
- Zustand + TanStack Query client-side caching reduces API calls by 60-80%
- Virtualized lists mean DOM size stays constant regardless of list length
- Service Worker caches critical routes offline, reducing server load and improving repeat-visit performance

### Monitoring

- **Vercel Analytics** — Core Web Vitals per route, per device, per geography
- **Sentry** — Error tracking, performance tracing, session replay
- **Datadog RUM** — Real user monitoring at scale
- **Uptime** — Better Uptime or Checkly for synthetic monitoring

---

## Appendix: Tech Stack Summary

| Concern | Solution |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 (strict mode) |
| Styling | TailwindCSS 3 + CSS Variables |
| Components | shadcn/ui (Radix primitives) |
| Animation | Framer Motion (LazyMotion) |
| Server State | TanStack Query v5 |
| Client State | Zustand v4 |
| Forms | React Hook Form + Zod |
| Auth | NextAuth.js v5 |
| PWA | @ducanh2912/next-pwa |
| Virtualization | @tanstack/react-virtual |
| Testing | Vitest + Playwright + Storybook |
| Deployment | Vercel + Cloudflare |
| Monitoring | Vercel Analytics + Sentry |
