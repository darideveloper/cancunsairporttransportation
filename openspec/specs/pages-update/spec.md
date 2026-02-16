# pages-update Specification

## Purpose
TBD - created by archiving change update-transaction-pages. Update Purpose after archive.
## Requirements
### Requirement: Add Transaction Translations
Add new translation keys for the transaction status component. These keys MUST be added to `en.json` and `es.json`.

#### Scenario: English Keys
Given the `en.json` file
Then it should contain `transaction` object with keys for success/error contacts and buttons:
- `transaction.success.contact`
- `transaction.error.contact`
- `transaction.call_us`
- `transaction.go_home`
- `transaction.view_reservation`

#### Scenario: Spanish Keys
Given the `es.json` file
Then it should contain `transaction` object with keys for success/error contacts and buttons

