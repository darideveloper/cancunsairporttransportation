# Design: Reservation Detail Layout

The layout follows a "Dashboard" style with a hero status header, a main details table, and a sidebar summary.

## Architectural Reasoning
- **Component Reusability**: Reuses `Layout`, `PageSEO`, and `ButtonCta`.
- **Responsive Grid**: Uses Tailwind CSS `grid-cols-1 md:grid-cols-3` (2/3 for details, 1/3 for sidebar).
- **Static vs Dynamic**: While the routes are pre-generated, the actual data (Marcelo's info) will be hydrated client-side or passed via props if using SSR. For this phase, we will implement the UI with placeholder/example tags that can be easily bound to data.

## Implementation Details

### 1. ButtonCta.tsx Extension
Add `red` and `redGhost` variants:
```typescript
red: "bg-red-600 text-white",
redGhost: "bg-red-600/10 border border-red-600 text-red-600",
```

### 2. Page Structure (`ReservationDetail.astro`)

#### Hero Status
- Large checkmark icon (`FaCheckCircle` or custom SVG).
- Centered `h1` "Reservations data".
- User row: Horizontal flex with name, phone, and email. Phone/Email icons from `react-icons/fa`.
- Status row: Status badge (`CONFIRMED`) and "Log out" button.

#### Main Content Grid
- **Left Column (2/3)**:
    - Status Card: `border-l-4 border-accent bg-white p-4 shadow-sm`.
    - Details Table: `w-full` table with alternating row backgrounds or simple borders.
- **Right Column (1/3)**:
    - "Payment methods" header (`H2`).
    - **Reusable Component**: `BookingSummary.tsx`.
        - Pass props: `lang`, `selectedVehicle` (mocked or loaded), `currency` ("USD"), `passengers`.
        - This component already handles the dark card styling, price formatting, and vehicle summary.
    - Security Badges:
        - "Guaranteed safe & secure checkout" row.
        - Payment logos (Visa, Mastercard, Amex, etc.) reused from `PaymentMethod.tsx` assets (or imported directly).

### 3. Translation Updates
Add the following structure under `pages.reservationDetail`:
```json
"user": {
  "greeting": "Hi, {name}",
  "statusLabel": "Status of your reservation",
  "logout": "Log out"
},
"details": {
  "code": "Reservation code:",
  "service": "Service:",
  "passengers": "Passengers:",
  "from": "From:",
  "to": "To:",
  "pickup": "Pickup date:"
},
"payment": {
  "methods": "Payment methods",
  "total": "Total",
  "secure": "Guaranteed safe & secure checkout"
}
```
