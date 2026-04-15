# Design: Google Tag Manager Integration

## Overview
The integration of Google Tag Manager requires injecting two code snippets into the application's base layout. One snippet is placed as high as possible in the `<head>`, and the other is placed immediately after the opening `<body>` tag.

## Placement in `Layout.astro`
- **Head Snippet**: Will be placed at the top of the `<head>` section in `src/layouts/Layout.astro`.
- **Body Snippet**: Since Astro's `Layout.astro` defines the `<body>` tag, the `noscript` snippet will be placed immediately after the opening `<body>` tag.

## Technical Considerations
- **Astro Directives**: Use `is:inline` for both scripts to ensure they are not processed by Astro's bundler, maintaining the exact format required by Google.
- **Client Transitions**: GTM typically handles page views in single-page applications by listening for history changes or custom dataLayer events. Since this project uses Astro's `ClientRouter`, the marketing team might need to configure a "History Change" trigger in the GTM interface if they want to track client-side navigations.

## Script Details
### Head Snippet
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WKXM5PMV');</script>
<!-- End Google Tag Manager -->
```

### Body Snippet (Noscript)
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WKXM5PMV"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```
