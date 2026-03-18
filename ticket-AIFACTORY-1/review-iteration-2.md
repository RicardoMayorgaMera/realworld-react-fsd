# Code Review: Ticket AIFACTORY-1 — Iteration 2

**Status:** ❌ Changes Requested

## Findings

### 1. [HIGH] `src/pages/home/home-page.ui.tsx:3`
**Description:** Gradient color values are hard-coded, making it difficult to maintain and align with the project's conventions.
**Suggestion:** Use named constants or import predefined colors from a centralized palette file.

---

### 2. [MEDIUM] `src/pages/home/home-page.ui.tsx:3`
**Description:** Potential layout shift might occur due to the new gradient background. Ensure it does not affect other elements.
**Suggestion:** Use CSS `will-change` property or layout inspection tools to prevent unintended layout shifts.

---

### 3. [LOW] `src/__tests__/pages/home/HomePage.ui.test.tsx:8`
**Description:** Test for text color and size is missing in the existing unit tests.
**Suggestion:** Add a test to verify that banner text has the correct contrast with the new background.

---

## Fix Plan

- 1. Replace hard-coded color values with named constants or import from a centralized palette file — modify src/pages/home/home-page.ui.tsx:3
- 2. Add layout shift prevention measures by using the `will-change` property in the CSS — ensure this change is tested for side effects.
- 3. Implement a test to check text readability against the new background — update src/__tests__/pages/home/HomePage.ui.test.tsx
