# Design: React Component Standardization

## Architectural Reasonings
React 19 and Astro work best with standard function declarations. `React.FC` (or `FC`) has historically provided properties like `defaultProps` and `propTypes` that are largely deprecated or better handled via standard JavaScript defaults. Furthermore, standard function declarations are more straightforward for both the compiler and developers.

## Patterns
### Preferred Pattern
```tsx
export default function MyComponent({ prop1, prop2 }: MyComponentProps) {
  return <div>{prop1}</div>;
}
```

### Discouraged Pattern
```tsx
const MyComponent: React.FC<MyComponentProps> = ({ prop1, prop2 }) => {
  return <div>{prop1}</div>;
};
export default MyComponent;
```

## Trade-offs
- **Pros**: Consistency, alignment with modern React idiomatic patterns, potentially fewer hydration edge cases in Astro.
- **Cons**: Minor refactoring effort for existing components.
