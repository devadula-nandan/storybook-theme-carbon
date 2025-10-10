# Storybook Carbon Theme - Styles Architecture

This directory contains all SCSS styling for the Carbon-themed Storybook interface. The styles are organized into modular, maintainable files with comprehensive documentation.

## File Structure

```
src/styles/
├── README.md              # This file - architecture documentation
├── _mixins.scss          # Core reusable mixins for buttons, inputs, etc.
├── _panel-shared.scss    # Shared panel component styles
├── theme-base.scss       # Carbon theme application (white, g10, g90, g100)
├── common.scss           # Global styles and base elements
├── toolbar.scss          # Storybook toolbar styles
├── sidenav.scss          # Sidebar navigation styles
├── panel.scss            # Panel area styles (Controls, A11y, etc.)
└── scss.d.ts             # TypeScript definitions for SCSS imports
```

## Architecture Principles

### 1. DRY (Don't Repeat Yourself)
- Common patterns extracted into mixins in `_mixins.scss`
- Button styles unified with `button-complete()`, `button-states()`, `button-size()`
- Input styles consolidated with `input-field()`, `form-controls()`

### 2. Maintainability
- Each file has a single responsibility
- Comprehensive inline comments explaining purpose and usage
- Consistent naming conventions following BEM-inspired patterns

### 3. Carbon Design System Integration
- All colors use Carbon theme tokens (e.g., `$text-primary`, `$layer-01`)
- Spacing follows Carbon's spacing scale (`$spacing-06`, `$spacing-08`, etc.)
- Components follow Carbon's interaction patterns

### 4. Documentation
- Every major section has explanatory comments
- Complex selectors are documented with their purpose
- Mixins include parameter descriptions and usage examples

## Key Files

### `_mixins.scss`
Core reusable patterns used throughout the theme:

**Button Mixins:**
- `button-reset($include-focus)` - Base button styling reset
- `button-states($layer)` - Hover/active states for different layers
- `button-complete($include-focus, $layer)` - Complete button styling
- `button-size($size)` - Consistent button dimensions

**Input Mixins:**
- `input-field($layer)` - Base input styling
- `input-border-bottom()` - Bottom border for text inputs
- `form-controls()` - Complete form control styling

**Tab Mixins:**
- `tab-button()` - Tab button base styles
- `tab-active()` - Active tab indicator
- `badge($interactive)` - Count badges on tabs

**Utility Mixins:**
- `focus-state($type)` - Consistent focus styling
- `radio-button()` - Custom radio input styling
- `toggle-switch()` - Custom toggle switch styling
- `date-time-inputs()` - Date/time input theme handling

### `_panel-shared.scss`
Shared patterns specific to panel components:

- Panel button variations
- Form control groupings
- Custom input types (radio, toggle)
- Date/time input theming

### `theme-base.scss`
Applies Carbon Design System themes to Storybook:

**Available Themes:**
- `white` - Light theme with white background (default)
- `g10` - Light gray theme
- `g90` - Dark gray theme
- `g100` - Dark theme with black background

Controlled via `[storybook-carbon-theme]` attribute on `:root`.

### `common.scss`
Global styles applied across entire Storybook interface:

- Scrollbar styling
- Text selection colors
- Base body text
- Popper/tooltip elements
- Accessibility skip links

### `toolbar.scss`
Styles for the top toolbar:

- Standard buttons and links
- Tab navigation
- Viewport controls
- Selected/active states
- Button separators

### `sidenav.scss`
Styles for the left sidebar:

- Sidebar header
- Search field with combobox
- Navigation tree
- Story items (selected, hover, focus states)
- Subheadings and categories

### `panel.scss`
Styles for the bottom/right panel area:

**Controls Addon:**
- Save/reset buttons
- ArgTable with editable controls
- Form inputs (text, number, select, radio, etc.)
- Complex types (arrays, objects)
- Code source blocks

**Interactions Addon:**
- Test toolbar
- Play function controls
- Interaction step list
- Status indicators

**Accessibility Addon:**
- Violation/Pass/Incomplete tabs
- Violation list items
- Violation details panel
- WCAG guideline links
- HTML/Highlight detail tabs

## Usage Guidelines

### Importing Styles
Styles are imported in the appropriate React components:

```typescript
import "../styles/theme-base.scss";
import "../styles/common.scss";
import "../styles/toolbar.scss";
// etc.
```

### Using Mixins
When extending or customizing styles:

```scss
@use "mixins" as *;

.my-custom-button {
  @include button-size('large');
  @include button-complete(true, 'layer-01');
}
```

### Adding New Styles

1. **Identify the appropriate file** based on the component location
2. **Check if a mixin exists** that can be reused
3. **Add comprehensive comments** explaining the purpose
4. **Use Carbon tokens** for colors, spacing, and typography
5. **Test across all themes** (white, g10, g90, g100)

### Color Token Reference

**Text:**
- `$text-primary` - Primary text
- `$text-secondary` - Secondary/helper text
- `$text-on-color` - Text on colored backgrounds

**Backgrounds:**
- `$background` - Base background
- `$layer-01`, `$layer-02` - Elevated layers
- `$background-hover`, `$background-active` - Interactive states
- `$background-selected` - Selected state

**Borders:**
- `$border-subtle-01` - Subtle borders
- `$border-strong-01` - Strong borders
- `$border-interactive` - Interactive/active borders
- `$border-inverse` - Inverse borders

**Interactive:**
- `$focus` - Focus indicator color
- `$interactive` - Interactive element color
- `$link-primary` - Primary link color

**Support:**
- `$support-error` - Error state

**Icons:**
- `$icon-primary` - Primary icon color

## Testing

When making changes, test:

1. All four Carbon themes (white, g10, g90, g100)
2. Interactive states (hover, active, focus)
3. Keyboard navigation and accessibility
4. Responsive behavior at different viewport sizes
5. Build process with `npm run build`

## Build Process

Styles are processed during the build:

```bash
npm run build
```

The build uses:
- `tsup` for bundling
- `sass` for SCSS compilation
- `esbuild-sass-plugin` for integration

## Maintenance Notes

### When Carbon Updates
If Carbon Design System updates, check:
- Theme token names haven't changed
- New spacing/sizing tokens are available
- Deprecated features are removed

### Performance Considerations
- Avoid deep nesting (max 3-4 levels)
- Use mixins to reduce generated CSS size
- Leverage Carbon's design tokens (they're CSS custom properties)

### Common Pitfalls
1. **Hardcoded colors** - Always use Carbon tokens
2. **Inconsistent spacing** - Use Carbon spacing scale
3. **Missing dark theme support** - Test in g90/g100 themes
4. **Overly specific selectors** - Keep specificity manageable
5. **Missing focus states** - Ensure keyboard accessibility

## Contributing

When contributing styles:

1. Follow existing patterns and conventions
2. Add comprehensive comments
3. Use mixins for repeated patterns
4. Test across all themes
5. Ensure accessibility (focus states, contrast)
6. Run build to verify no errors

## Support

For questions or issues related to these styles:
- Check Carbon Design System documentation: https://carbondesignsystem.com/
- Review Storybook documentation: https://storybook.js.org/
- Open an issue in the repository
