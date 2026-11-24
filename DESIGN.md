# DESIGN.md — 곽호세 포트폴리오 "Drawing set"

Generated with taste-skill `stitch-design-taste` for Google Stitch or any coding agent.
Source of truth for new screens on hosekwak.github.io/hose-portfolio.

## 1. Atmosphere
An infrastructure engineer's drawing set. Every project is a sheet: a field of its own color,
the real architecture drawing pinned across the field's edge, and a title block at the foot.
Paper, navy ink, square corners, hairline rules. Calm and exact, never decorative.

- Density 4 — Daily App Balanced
- Variance 5 — Offset Asymmetric (drawing overlaps the field; left rail, wide content)
- Motion 2 — Static Restrained (one hover lift on the drawing; nothing moves on its own)

## 2. Color
| Name | Hex | Role |
| --- | --- | --- |
| Paper | `#FFFFFF` | Page ground, drawing sheets |
| Navy ink | `#0F1E33` | Text, rules, frames, focus ring, the one UI accent |
| Graphite | `#4A5566` | Secondary text (7:1 on paper) |
| Quiet | `#667181` | Inactive nav only (4.9:1) |
| Rule | `#D5DBE3` | Hairlines between rows |
| Wash | `#F3F5F8` | Panels inside case studies |

Project fields (identity, not accents; one per project, used only for its card field, its case-study
title band, its section numbers and its 3px card rules):
Bememory green `#1F6E4E` · CGV red `#C42F2A` · AIOps violet `#4B3FC4` · VMware blue `#1D5FBF`.
White text on every field passes 4.5:1. Never use two project colors on one screen outside the index.

## 3. Typography
- Display: **Archivo Variable**, width 68–72%, weight 800, leading 0.86, as authored case
  (project names like "BE MEMORY", section titles like "Architecture"). Self-hosted.
- Text: **IBM Plex Sans KR** 400/700, 16px base, leading 1.65 (1.8 in case-study prose),
  `word-break: keep-all`. Self-hosted subsets.
- Scale (rem): 0.75 · 0.8125 · 0.875 · 0.9375 · 1 · 1.125 · 1.25 · 1.75 · clamp display.
- Numbers in tables, dates and metrics: `font-variant-numeric: tabular-nums`.
- Labels are sentence case or Korean. No letter-spaced capitals, no monospace labels.

## 4. Components
- **Project sheet (card):** 1.5px ink frame. Field 20px/24px padding, category in 14px bold white,
  display title. Drawing: white, 1px ink frame, 12px padding, overlaps the field by 64px.
  Title block: 1.5px ink top rule, three cells (프로젝트 / 기간 / 팀) split by 1px ink rules,
  label 12px graphite, value 15px bold. Hover (fine pointer only): drawing rises 6px, name underlines.
- **Case-study title band:** full project field, white text, back link underlined, h1 clamp(36–60px).
- **Section heading:** display face 32–44px with its number in the project color, 1.5px ink rule under.
- **Spec rows** (problems, solutions, learnings): two columns, title left 32%, body right, 1px rules,
  first row 3px project-color rule. Never three equal cards.
- **Steps:** joined boxes with 1.5px ink frames, numbered 01–04 only when the content is a sequence.
- **Buttons/links:** text links with 4px underline offset. Focus ring 2px ink, 4px offset.
- Corners are square everywhere. No shadows except none.

## 5. Layout
- Fixed left rail 200px (nav + GitHub, Email, Blog); content starts at 280px, max 1160px.
- Index: two sheets per row above 1120px, one sheet (max 640px) below.
- 700px and below: rail becomes a top row, title band runs edge to edge, every grid is one column.
- No horizontal scroll at any width from 320px to 1920px. Tables stack into labeled rows under 700px.

## 6. Motion
- Only: drawing lift on hover (200ms ease-out) and a 2px press. Smooth scrolling only without
  `prefers-reduced-motion`. No entrance animations, no loops, no parallax.

## 7. Never
- Rounded SaaS cards, soft grey shadows, gradients, glass
- Purple/blue AI gradients; neon; pure #000
- Letter-spaced ALL-CAPS eyebrows, mono labels, "A · B · C" meta strings
- Numbered markers on things that are not sequences
- Captionless decorative stock images; emojis
- A second accent on one screen; color as the only carrier of meaning
