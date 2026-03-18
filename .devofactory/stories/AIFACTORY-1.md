# Story

As a Frontend Developer, I want to change the home page banner to a gradient background with purple-to-blue and update text styling for contrast, so that the home page visually improves user engagement.

## Acceptance Criteria

- Given there is an existing `.banner` div in `src/pages/home/home-page.ui.tsx`
  - When the background of the `.banner` div is updated to a `purple-to-blue gradient`
    - Then the banner shows a smooth transition from purple (rgb(138,43,226)) to blue (rgb(0,0,255))
- Given there are existing text elements within the `.banner` div
  - When the background changes to the `purple-to-blue gradient`
    - Then the text is readable with good contrast
      - And no layout shifts occur due to size or position adjustments

## Tasks / Subtasks

1. [ ] Update the banner's background color in `src/pages/home/home-page.ui.tsx` (AC: #1)
   - [ ] Replace the `.banner` div style with a CSS gradient
     ```tsx
     // src/pages/home/home-page.ui.tsx
     <div className="banner" 
          style={{ 
            backgroundColor: `linear-gradient(90deg, rgba(138,43,226, 1) 0%, rgba(0,0,255, 1) 100%)` }}>
       {/* existing content */}
     </div>
     ```

## Dev Notes

### Architecture Constraints
- Use `linear-gradient` for the gradient background.
- Ensure no additional layout shifts occur by avoiding changes to the `.banner` div's position or size.

### Project Structure Notes
- Update styles in `src/pages/home/home-page.ui.tsx`.
- Keep all CSS changes consistent with existing patterns, such as maintaining appropriate spacing and alignment as defined by the component structure.

### Anti-Patterns to Avoid
- Do not use a solid color background.
- Do not adjust the `.banner` div's dimensions or position without understanding potential layout shifts.
- Do not change any other styles that might affect text readability on mobile screens, unless explicitly allowed for this enhancement.

### Testing Requirements
- Use `@testing-library/react` and Jest to ensure the banner and its inner text are visually correct after applying the gradient background.
  - Example usage of test framework:
    ```jsx
    // src/__tests__/pages/home/HomePage.ui.test.tsx
    import { render, screen } from '@testing-library/react';
    const HomePage = require('~pages/home/home-page.ui').default;
    
    describe('Home Page Banner', () => {
      it('should display a gradient background in the banner div with correct text contrast', async () => {
        render(<HomePage />);
        
        // Check color
        const bannerDiv = screen.getByRole('banner');
        expect(bannerDiv).toHaveStyle({ 
          'background-color': `linear-gradient(90deg, rgba(138,43,226, 1) 0%, rgba(0,0,255, 1) 100%)` 
        });
        
        // Check text contrast
        const bannerText = screen.getByRole('heading');
        expect(bannerText).toHaveStyle({ 
          'color': 'white', 
          'font-size': '24px'// example style for text visibility test, adjust as necessary
        });
      });
    });
    ```

## References

- .devofactory/architecture.md (Section: `Article API`, `Article Schema`, `Application Structure`)
- .devofactory/conventions.md (Not directly referenced due to lack of explicit content)