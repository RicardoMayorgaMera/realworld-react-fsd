# Code Review: Ticket AIFACTORY-2 — Iteration 2

**Status:** ❌ Changes Requested

## Findings

### 1. [HIGH] `src/pages/layout/Footer.tsx:14`
**Description:** 'expect(screen.getByText('Built'))toBeInTheDocument();' is incorrect. The text should be 'Built with React'.
**Suggestion:** Change the test to correctly match the expected text: `expect(screen.getByText('Built with React')).toBeInTheDocument();`

---

### 2. [MEDIUM] `src/pages/layout/Footer.tsx:9`
**Description:** Test coverage for social icon presence is missing.
**Suggestion:** Add tests to verify the presence of each social icon. Example: `expect(screen.getByTestId('github-icon')).toBeInTheDocument();`

---

### 3. [LOW] `src/pages/layout/Footer.tsx:6`
**Description:** Consider adding a data-testid attribute to the GitHub, Twitter, and LinkedIn icon elements for testing purposes.
**Suggestion:** Add `data-testid` attributes: `<GitHub size={24} data-testid='github-icon'/>`

---

## Fix Plan

- 1. Fix the test description to match 'Built with React': `expect(screen.getByText('Built with React')).toBeInTheDocument();`
- 2. Add tests to verify the presence of each social icon: `expect(screen.getByTestId('github-icon')).toBeInTheDocument();`, `expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();`, and `expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();`
