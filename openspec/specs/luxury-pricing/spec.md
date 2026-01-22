# luxury-pricing Specification

## Purpose
TBD - created by archiving change translate-luxury-pricing-update. Update Purpose after archive.
## Requirements
### Requirement: Luxury Page Pricing Content
The pricing section on the luxury page MUST show alternative transportation options with accurate prices and descriptions.

#### Scenario: English Luxury Page
- **Given** the user is on the English luxury transportation page
- **Then** the pricing section title should be "Other services similar to luxury transportation in Cancun"
- **And** the first card should be "Private Transportation" starting from $29.99 USD
- **And** the second card should be "Taxi Service" starting from $34.99 USD (tagged as Most Popular)
- **And** the third card should be "Group Transportation" starting from $84.00 USD

#### Scenario: Spanish Luxury Page
- **Given** the user is on the Spanish luxury transportation page
- **Then** the pricing section title should be "Otros servicios similares a transporte de lujo en Cancún"
- **And** the first card should be "Transporte privado" starting from $539.82 MXN
- **And** the second card should be "Servicio de taxi" starting from $664.81 MXN (tagged as Más Vendido)
- **And** the third card should be "Transporte de grupos" starting from $1512.00 MXN

