```markdown
## Story
As a Frontend Developer, I want to add hover animation effects (shadow lift and slight scale) to article preview cards in the feed, so that the user experience is improved with smooth transitions.

## Acceptance Criteria
Given the ArticlesFeed component,  
When the mouse hovers over an article card,  
Then the card should elevate with a box-shadow.  
Given the same ArticlesFeed component,  
When the mouse hovers over an article card,  
Then the card's scale should slightly increase to 1.02.  
Given the hover state of the card,  
When transitions are applied,  
Then the transition duration should be 0.2s with a timing function of "ease".  
Given the hover state of the card,  
When the transition is active,  
Then there should be no layout shift.

## Tasks / Subtasks
- [ ] Update `src/widgets/articles-feed/articles-feed.ui.tsx` to include hover animations (AC: #1)
  - [ ] Modify existing styles in `src/styles/global.css` following pattern in `src/styles/shared-components.css`
- [ ] Add animation logic to `src/widgets/articles-feed/articles-feed.component.ts` (AC: #2, #3)
  - [ ] Use the transition utility from `<root>/utils/transition-utils.ts`

## Dev Notes

### Architecture Constraints
- You must use smooth CSS transitions as per React and Web Animations standards.  
- Transition properties should be set using utility functions to ensure consistency with the rest of the application.
- Follow patterns for file structure found in existing `.tsx` files, particularly `src/widgets/articles-feed/articles-feed.component.ts`.

### Project Structure Notes
- Ensure all new or modified CSS files follow naming conventions from `src/styles/`.  
- New state logic should be included within component classes and not externalized.

### Anti-Patterns to Avoid
- Do NOT reinvent existing transition utilities; use `<root>/utils/transition-utils.ts` for smooth animations.
- Do NOT modify critical layout files outside of the targeted components, such as `src/App.tsx`.
- Incorrect placement in directories other than `src/widgets/articles-feed` will violate directory structure.

### Testing Requirements
- Add snapshot tests to ensure visual consistency (`__tests__/articles-feed.uiSnapshots.ts`).
- Write unit tests for any new or modified logic using Jest and React Testing Library, focusing on hover event handlers (e.g., `__tests__/articles-feed.component.spec.ts`).

## References
- .devofactory/architecture.md – For guidance on component structure and transition utilities.
- .devofactory/conventions.md – For naming conventions and general development best practices.
```

This story follows the BMAD method, ensuring comprehensive coverage of implementation details while adhering to project-specific constraints.