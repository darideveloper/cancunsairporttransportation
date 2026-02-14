# Design Spec: Booking Components Refactor

## Relocation Map

| Component | Source Path | Target Path |
| :--- | :--- | :--- |
| **Organisms** | | |
| `VehicleBuyCards` | `src/components/organisms/VehicleBuyCards.tsx` | `src/components/organisms/booking/VehicleBuyCards.tsx` |
| `NoAvailability` | `src/components/organisms/NoAvailability.tsx` | `src/components/organisms/booking/NoAvailability.tsx` |
| `SelectedVehicleCard` | `src/components/organisms/SelectedVehicleCard.tsx` | `src/components/organisms/booking/SelectedVehicleCard.tsx` |
| **Molecules** | | |
| `VehicleBuyCard` | `src/components/molecules/VehicleBuyCard.tsx` | `src/components/molecules/booking/VehicleBuyCard.tsx` |
| `VehicleBuyCardSkeleton` | `src/components/molecules/VehicleBuyCardSkeleton.tsx` | `src/components/molecules/booking/VehicleBuyCardSkeleton.tsx` |
| `DynamicResultsHeader` | `src/components/molecules/DynamicResultsHeader.tsx` | `src/components/molecules/booking/DynamicResultsHeader.tsx` |

## Import Updates in Moved Components

### 1. `src/components/organisms/booking/VehicleBuyCards.tsx`
```tsx
// OLD
import VehicleBuyCard from "../molecules/VehicleBuyCard";
import VehicleBuyCardSkeleton from "../molecules/VehicleBuyCardSkeleton";
import NoAvailability from "./NoAvailability";
import { getVehicles } from "../../lib/transportation/api";
import { useTranslations } from "../../lib/i18n/utils";
import { useSearchFormStore } from "../../store/search-form";

// NEW
import VehicleBuyCard from "../../molecules/booking/VehicleBuyCard";
import VehicleBuyCardSkeleton from "../../molecules/booking/VehicleBuyCardSkeleton";
import NoAvailability from "./NoAvailability"; // Same folder
import { getVehicles } from "../../../lib/transportation/api";
import { useTranslations } from "../../../lib/i18n/utils";
import { useSearchFormStore } from "../../../store/search-form";
```

### 2. `src/components/organisms/booking/NoAvailability.tsx`
```tsx
// OLD
import ButtonCta from "../atoms/ButtonCta";
import { useTranslations } from "../../lib/i18n/utils";
import { PHONES } from "../../data/site-config";

// NEW
import ButtonCta from "../../atoms/ButtonCta";
import { useTranslations } from "../../../lib/i18n/utils";
import { PHONES } from "../../../data/site-config";
```

### 3. `src/components/organisms/booking/SelectedVehicleCard.tsx`
```tsx
// OLD
import { useSearchFormStore } from "../../store/search-form";
import { useTranslations } from "../../lib/i18n/utils";
import CheckListItem from "../atoms/CheckListItem";
import H2 from "../atoms/H2";

// NEW
import { useSearchFormStore } from "../../../store/search-form";
import { useTranslations } from "../../../lib/i18n/utils";
import CheckListItem from "../../atoms/CheckListItem";
import H2 from "../../atoms/H2";
```

### 4. `src/components/molecules/booking/VehicleBuyCard.tsx`
```tsx
// OLD
import ButtonCta from "../atoms/ButtonCta";
import CheckListItem from "../atoms/CheckListItem";
import StarRating from "../atoms/StarRating";

// NEW
import ButtonCta from "../../atoms/ButtonCta";
import CheckListItem from "../../atoms/CheckListItem";
import StarRating from "../../atoms/StarRating";
```

### 5. `src/components/molecules/booking/DynamicResultsHeader.tsx`
```tsx
// OLD
import { useSearchFormStore } from "../../store/search-form";
import { useTranslations } from "../../lib/i18n/utils";

// NEW
import { useSearchFormStore } from "../../../store/search-form";
import { useTranslations } from "../../../lib/i18n/utils";
```

## Consumer Updates

### `src/components/pages/store/Results.astro`
```astro
// Update imports
import VehicleBuyCard from '../../molecules/booking/VehicleBuyCard'
import DynamicResultsHeader from '../../molecules/booking/DynamicResultsHeader'
import VehicleBuyCards from '../../organisms/booking/VehicleBuyCards'
```

### `src/components/pages/store/Register.astro`
```astro
// Update import
import SelectedVehicleCard from '../../organisms/booking/SelectedVehicleCard'
```

## ADDED Requirements

### Requirement: Relocate Components
The system MUST relocate all booking-specific React components to their respective `booking` subfolders within molecules and organisms.

#### Scenario: Verify Folder Structure
- `src/components/molecules/booking` contains `VehicleBuyCard.tsx`, `VehicleBuyCardSkeleton.tsx`, `DynamicResultsHeader.tsx`.
- `src/components/organisms/booking` contains `VehicleBuyCards.tsx`, `NoAvailability.tsx`, `SelectedVehicleCard.tsx`.

### Requirement: Preserve Functionality
The moved components MUST retain identical functionality and props interfaces.

#### Scenario: Verify Component Rendering
- `VehicleBuyCards` renders the list of vehicles correctly on the results page.
- `SelectedVehicleCard` renders the selection summary on the register page.

### Requirement: Resolve Imports
The system MUST update all internal and external imports to reflect the new file locations.

#### Scenario: Verify Build
- The project builds without "module not found" errors.
- Internal relative imports (e.g., `../../atoms/ButtonCta`) are correct.
