# Implement Web Chat (Tawk.to)

## Summary
Integrate the Tawk.to live chat widget into the application to provide real-time customer support. This involves creating a dedicated Astro component for the script and including it in the global layout.

## Background
The legacy application used Tawk.to with specific property and widget IDs. We need to replatform this integration into the Astro application, ensuring it loads performantly and is available across all pages.

## Goals
1.  Enable Tawk.to chat widget on all site pages.
2.  Use the provided Property ID (`682b4275b26df01905316062`) and Widget ID (`1irkfn78h`).
3.  Ensure the `Tawk_API` is available for programmatic control (e.g., maximizing the widget).
4.  Store credentials (Property ID and Widget ID) in environment variables (`.env`) to avoid hardcoding.

## Non-Goals
- Custom styling of the widget (controlled via Tawk.to dashboard).
- Complex custom behaviors or identity tracking (basic visitor tracking only).
