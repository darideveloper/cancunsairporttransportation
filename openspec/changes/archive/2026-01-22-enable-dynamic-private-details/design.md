# Design: Dynamic PrivateDetails Component

## Component Interface
The `PrivateDetails` component will update its `Props` interface:

```typescript
interface Props {
  page: string;
}
```

The data fetching logic will change from:
```typescript
const content = t("pages.privateAirportTransfer.privateDetails") as any;
```
to:
```typescript
const { page } = Astro.props;
const content = t(`pages.${page}.privateDetails`) as any;
```

## Translation Structure
We need to ensure the following structures exist in `src/messages/*.json`:

1.  **`pages.group.privateDetails`**: New content for Group Transfers.
2.  **`pages.luxury.privateDetails`**: New content for Luxury Transportation.
3.  **`pages.private.privateDetails`**: Content for Private Transfers (currently located at `pages.privateAirportTransfer.privateDetails`). We should likely migrate or duplicate the existing content to `pages.private.privateDetails` to match the `page="private"` variable used in `private-airport-transfer-cancun.astro`.

## Page Updates
- **`src/pages/[lang]/group-transfers-cancun.astro`**:
    - Pass `page={page}` (where `page` is "group").
- **`src/pages/[lang]/luxury-transportation-cancun.astro`**:
    - Pass `page={page}` (where `page` is "luxury").
- **`src/pages/[lang]/private-airport-transfer-cancun.astro`**:
    - Pass `page={page}` (where `page` is "private").

## Backward Compatibility
The current `pages.privateAirportTransfer` key might be legacy. We will prefer aligning with the `page` constant defined in each Astro file ("group", "private", "luxury").
