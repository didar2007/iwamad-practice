# Week 5 — Handoff notes (SIS 2 starter design)

**Routes (from the prototype):** `posts-desktop` → `post-desktop`; `post-desktop` → `posts-desktop`

**Components → React files:** PostCard → `ProfileCard.tsx`; Button → `LikeButton.tsx` (uses `ui/Button.tsx`); Tag → `SkillItem.tsx` (uses `ui/Tag.tsx`)

**Button variants → prop:** `variant = "primary" | "outlined"` (Figma: Primary, Outlined)

**PostCard layout:** direction column; gap 12px; padding 16px; radius 8px

**Breakpoint change:** phone 1 column, desktop 3 columns; header stacks on phone, horizontal on desktop

**Tokens (all ten):**
- `color/primary` = `#1D4ED8`
- `color/on-primary` = `#FFFFFF`
- `color/text` = `#1F2937`
- `color/text-muted` = `#9CA3AF`
- `color/surface` = `#FFFFFF`
- `color/border` = `#D1D5DB`
- `space/2` = `8px`
- `space/4` = `16px`
- `space/6` = `24px`
- `radius/md` = `8px`