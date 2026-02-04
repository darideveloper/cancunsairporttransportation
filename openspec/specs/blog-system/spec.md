# Blog System

## Purpose

Implement a blog section that fetches content from an external API, supports pagination, detailed post views, and multilingual content (English/Spanish).
## Requirements
### Requirement: LangLink Component

The `LangLink` component MUST support custom translated paths provided via props.

#### Scenario: Handling custom translated paths

- **Given** the `LangLink` component receives a `translatedPath` prop
- **When** it renders the language toggle link
- **Then** it MUST use `translatedPath` as the `href` instead of generating from `pageKey`

### Requirement: Layout Prop Propagation

The `Layout` component MUST propagate `translatedPath` to child components.

#### Scenario: Passing translatedPath through component chain

- **Given** a blog detail page passes `translatedPath` to `Layout`
- **Then** `Layout` MUST pass it to `Header`
- **And** `Header` MUST pass it to `TopBar`
- **And** `TopBar` MUST pass it to `LangLink`

### Requirement: Routes Configuration

The routes configuration MUST include blog listing page.

#### Scenario: Adding blog route

- **Given** the routes file `src/lib/i18n/routes.ts`
- **Then** it MUST include a `blog` entry with `en: "blog"` and `es: "es/blog"`

### Requirement: API Client

The system MUST provide an API client at `src/lib/blog/api.ts` to fetch blog posts from the external API.

#### Scenario: Fetching all posts

- **Given** the API endpoint `{API_BASE}/api/posts/`
- **When** `getPosts(lang)` is called
- **Then** it MUST send `Accept-Language` header with the specified language
- **And** it MUST send `Authorization` header if `API_TOKEN` is configured
- **And** it MUST return an array of `Post` objects

#### Scenario: Fetching a single post

- **Given** the API endpoint `{API_BASE}/api/posts/{slug}/?details=true`
- **When** `getPostBySlug(slug, lang)` is called
- **Then** it MUST return a `PostDetail` object with full content
- **And** it MUST include the `related_post` field for language linking
- **And** it MUST include `title`, `description`, `keywords` for SEO

### Requirement: Blog Listing Page

The blog listing page MUST display a paginated grid of posts with proper SEO.

#### Scenario: Viewing the English listing

- **Given** a user visits `/blog`
- **Then** they MUST see a grid of English blog posts
- **And** the page MUST use `BlogSEO` component with `currentPage="blog"`
- **And** SEO metadata MUST be read from `pages.blog` in `en.json`
- **And** post cards MUST use `ButtonCta` component for "Read more" link

#### Scenario: Viewing the Spanish listing

- **Given** a user visits `/es/blog`
- **Then** they MUST see a grid of Spanish blog posts
- **And** the page MUST use `BlogSEO` component with `currentPage="blog"`
- **And** SEO metadata MUST be read from `pages.blog` in `es.json`

### Requirement: Blog Detail Page SEO from API

The blog detail page MUST use SEO metadata from the API response.

#### Scenario: Setting SEO metadata

- **Given** a post is fetched from the API
- **Then** `BlogPostSEO` MUST receive `postTitle` from `post.title`
- **And** `BlogPostSEO` MUST receive `postExcerpt` from `post.description`
- **And** `BlogPostSEO` MUST receive `postKeywords` from `post.keywords`
- **And** `BlogPostSEO` MUST receive `postAuthor` from `post.author`
- **And** `BlogPostSEO` MUST receive `postDate` from `post.created_at`
- **And** `BlogPostSEO` MUST receive `postImageUrl` from `post.banner_image_url`
- **And** `BlogPostSEO` MUST receive `postSlug` from `post.slug`

### Requirement: Blog Detail Page Display

The blog detail page MUST display the full content of a post.

#### Scenario: Viewing a post

- **Given** a user clicks on a post in the listing
- **Then** they MUST be taken to `/blog/{slug}` or `/es/blog/{slug}`
- **And** the page MUST use `BannerImage` component with `post.banner_image_url`
- **And** the page MUST display: title, author, date, full content
- **And** the content MUST be rendered with `marked` and `set:html`

### Requirement: Translation System Integration

All static UI text MUST use the project's translation system.

#### Scenario: Using translations for UI elements

- **Given** the blog listing page
- **Then** static text like "Read more", "Previous", "Next" MUST use `useTranslations(lang)`
- **And** the translations MUST be defined in `pages.blog` section of JSON files

#### Scenario: Adding required translations

- **Given** the translation files `en.json` and `es.json`
- **Then** they MUST include `pages.blog.title`, `pages.blog.description`, `pages.blog.keywords`
- **And** they MUST include `pages.blog.heading`, `pages.blog.readMore`
- **And** they MUST include `pages.blog.pagination.previous`, `pages.blog.pagination.next`
- **And** they MUST include `pages.blog.meta.author`, `pages.blog.meta.date`

### Requirement: Language Switching on Post
The system MUST allow users to switch between English and Spanish versions of the same post.

#### Scenario: Switching to existing translation
When a user views a post that has a related post in the other language (linked via `related_post` slug), the language switcher button MUST link directly to that related post's URL.
- **Given** I am on a blog post page (e.g., /blog/my-post)
- **And** the post data contains a `related_post` slug pointing to the translated version (e.g., "mi-articulo")
- **Then** the logic must successfully resolve this slug to the translated post object
- **And** the language toggle button must point to the translated post URL (e.g., /es/blog/mi-articulo)

### Requirement: Reusable Components

The blog system MUST reuse existing project components.

#### Scenario: Using existing components

- **Given** the blog listing page
- **Then** it MUST use `SectionHeading` for the page title
- **And** it MUST use `ButtonCta` for "Read more" and pagination buttons

#### Scenario: Using existing components in detail

- **Given** the blog detail page
- **Then** it MUST use `BannerImage` for the hero section
- **And** it MUST use `Layout` for the page wrapper

