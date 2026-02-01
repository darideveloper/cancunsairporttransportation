# Tasks: Fix Heading Hierarchy

## Implementation Tasks

### 1. Fix Reservation Page (High Priority)
- [x] **1.1** Change `<h4>` to `<h3>` in `src/components/pages/store/Reservation.astro` (line 78)
- [x] **1.2** Verify Spanish version uses same component, no separate changes needed

### 2. Fix Destinations Page (Medium Priority)
- [x] **2.1** Add H2 section heading before the BasicImageCard highlights in `src/components/pages/landing/Destinations.astro`
- [x] **2.2** Add translation keys for the new H2 section title in `src/messages/en.json`
- [x] **2.3** Add translation keys for the new H2 section title in `src/messages/es.json`

### 3. Fix Privacy Policy Content (Medium Priority)
- [x] **3.1** Add H2 section headings to `src/content/legal/en/privacy-policy.mdx`
- [x] **3.2** Add H2 section headings to `src/content/legal/es/privacy-policy.mdx`

### 4. Fix 404 Page (Low Priority)
- [x] **4.1** Add H2 subtitle in `src/pages/404.astro`
- [x] **4.2** Add translation keys for subtitle in `src/messages/en.json` and `es.json`

### 5. Validation
- [x] **5.1** Run `npm run build` to regenerate all pages
- [x] **5.2** Run heading hierarchy validation script on all generated HTML files
- [x] **5.3** Verify zero heading hierarchy violations

## Dependencies

- Task 1.x: Independent, can be done first
- Task 2.x: Requires translation file updates
- Task 3.x: MDX content only, independent
- Task 4.x: Requires translation file updates, lowest priority

## Verification Commands

```bash
# Build the project
npm run build

# Check for heading hierarchy issues
for file in $(find dist -name "*.html" ! -path "*/en/*"); do 
  if grep -q "Redirecting to" "$file" 2>/dev/null; then continue; fi
  headings=$(grep -oP '<h[1-6]' "$file" | sed 's/<h//')
  if [ -n "$headings" ]; then
    prev=0; issues=""
    for h in $headings; do
      if [ $prev -gt 0 ] && [ $h -gt $((prev + 1)) ]; then
        issues="$issues Skip from H$prev to H$h;"
      fi
      prev=$h
    done
    if [ -n "$issues" ]; then
      echo "$(echo $file | sed 's|dist/||'): $issues"
    fi
  fi
done
```

## Acceptance Criteria

- [x] All pages have proper heading hierarchy (no level skips)
- [x] Both English and Spanish pages are fixed
- [x] Build completes without errors
- [x] Validation script reports zero issues
