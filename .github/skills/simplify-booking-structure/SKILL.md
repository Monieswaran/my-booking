---
name: simplify-booking-structure
description: "Use when simplifying or reorganizing the My Booking Next.js project, adding booking features, moving files, or deciding where new UI, data, configuration, and utilities belong. Keep the codebase small, predictable, and easy to validate."
---

# Simplify Booking Structure

Keep this project organized by responsibility, with as few folders and abstractions as possible.

## Target structure

```text
src/
  app/                    # routes, layouts, and route-local loading/error UI
  components/
    booking/              # reusable booking-flow UI
    layout/               # Navbar, Footer, and shared shell UI
    ui/                   # generic primitives used by two or more features
  config/                 # navigation and stable app configuration
  data/                   # local mock or seed data
  lib/                    # shared logic and integrations
  assets/brand/           # imported brand assets
  public/                 # files served directly by URL
  styles/                 # global styles and theme tokens
```

## Workflow

1. Identify the owning responsibility before creating or moving a file.
2. Keep route composition in `src/app`; keep feature behavior in `src/components/booking`.
3. Put reusable shell elements in `src/components/layout` and truly generic primitives in `src/components/ui`.
4. Put static navigation or app-wide choices in `src/config`; put mock content in `src/data`.
5. Put shared non-visual logic in `src/lib`. Do not create a helper for one call site.
6. Prefer an existing component or data module before adding a new abstraction.
7. Use the `@/*` alias for imports from `src` and preserve the existing naming style.
8. When moving a file, update every import in the same change and remove the old file only after references are gone.
9. Do not introduce a new top-level folder, barrel file, state library, or design-system layer unless the current structure cannot express the requirement clearly.

## Decision points

- If a component is only used by one route and has no meaningful behavior boundary, keep it in that route file.
- If it is booking-specific and reused or independently testable, place it in `src/components/booking`.
- If it frames the whole site, place it in `src/components/layout`.
- If it has no booking or shell knowledge and is reused across features, place it in `src/components/ui`.
- If a value is static and app-wide, use `src/config`; if it represents example content, use `src/data`; if it performs logic, use `src/lib`.

## Simplification rules

- Make the smallest change that clarifies ownership.
- Avoid duplicate data, duplicate styling tokens, and wrapper components with no behavior.
- Keep public APIs and existing import aliases stable unless a move requires an update.
- Do not mix route files, visual components, mock data, and utilities in one folder.
- Do not refactor unrelated files while reorganizing.

## Completion checks

After any structural change:

1. Search for imports of moved or deleted paths.
2. Run `npm run lint`.
3. Run `npm run build` when route boundaries, imports, or Next.js behavior changed.
4. Confirm the final tree still matches the target structure and that no empty legacy folders remain.
5. Summarize moved files and any intentionally unchanged paths.
