# FeatureBanner Component Spec

## ADDED Requirements

### Requirement: Unified Component Interface

The new `FeatureBanner.astro` component SHALL consolidate `TextCardHalf` and `TextCardSmall` interfaces.

#### Scenario: Supporting legacy props
GIVEN a developer uses `FeatureBanner`
WHEN they pass `structure` props like `contentKey`, `section`, `image`
AND optional overrides like `id`, `reverse`, `baseKey`, `fieldKey`, `imageAltKey`, `imageClass`
THEN the component renders correctly using these values.

### Requirement: Layout Modes

The component SHALL support `layout="grid"` and `layout="flex"` modes which affect CSS classes and responsive image sizes.

#### Scenario: Supporting Grid Mode
GIVEN a developer uses `FeatureBanner`
WHEN they pass `layout="grid"` (default)
THEN it renders with `grid grid-cols-1 md:grid-cols-2` classes
AND the image uses responsive sizes suitable for half-width.

#### Scenario: Supporting Flex Mode
GIVEN a developer uses `FeatureBanner`
WHEN they pass `layout="flex"`
THEN it renders with `flex flex-col md:flex-row` classes
AND the image uses responsive sizes suitable for 1/3 width (`md:w-1/2 lg:w-1/3`).

### Requirement: Handling Reverse

The component SHALL handle the `reverse` prop differently based on the active layout mode.

#### Scenario: Reverse in Grid
GIVEN `reverse={true}` is passed
WHEN layout is "grid"
THEN the image receives `md:order-last` class.

#### Scenario: Reverse in Flex
GIVEN `reverse={true}` is passed
WHEN layout is "flex"
THEN the container receives `md:flex-row-reverse` class.

### Requirement: Image Loading Strategy

The component SHALL support an optional `loading` prop to control image lazy loading.

#### Scenario: Defaults
GIVEN a developer uses `FeatureBanner`
WHEN they omit the `loading` prop
THEN it defaults to `loading="lazy"`.

#### Scenario: Eager Loading
GIVEN a developer uses `FeatureBanner`
WHEN they pass `loading="eager"`
THEN the underlying `Image` component renders with `loading="eager"`.
