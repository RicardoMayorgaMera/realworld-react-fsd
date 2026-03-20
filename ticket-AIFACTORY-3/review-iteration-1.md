# Code Review: Ticket AIFACTORY-3 — Iteration 1

**Status:** ❌ Changes Requested

## Findings

### 1. [HIGH] `src/widgets/articles-feed/articles-feed.ui.tsx:150`
**Description:** Transition utility is not used for smooth animations.
**Suggestion:** Integrate `transitionUtils` from `<root>/utils/transition-utils.ts` to apply the transitions.

---

### 2. [CRITICAL] `src/styles/global.css:20`
**Description:** Styles are not being updated using transition utilities, violating project conventions.
**Suggestion:** Refactor styles in `global.css` to use the transition utility functions for a consistent animation approach.

---

## Fix Plan

- 1. Update `src/widgets/articles-feed/articles-feed.ui.tsx` at line 150: Import and use `transitionUtils` to apply smooth transitions for hovered card animation.
- 2. Refactor `src/styles/global.css` around line 20, ensuring all animations are applied through the transition utility functions.
