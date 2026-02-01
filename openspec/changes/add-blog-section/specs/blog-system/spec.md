# Blog System Specs

## ADDED Requirements

### Requirement: Fetching Blog Posts
The system MUST fetch blog posts from the external API to generate static pages.
#### Scenario: Fetching paths for build
- **Given** the API endpoint `http://127.0.0.1:8000/api/posts/`
- **When** the site is built
- **Then** it should fetch all posts to generate static paths for the listing and detail pages.

### Requirement: Blog Listing Page
The blog listing page MUST display a grid of posts with pagination controls.
#### Scenario: Viewing the listing
- **Given** a user visits `/blog`
- **Then** they should see a grid of English blog posts.
- **And** they should see pagination controls if there are more posts than the page size.
- **And** the page should use `BlogSEO` component.

### Requirement: Blog Detail Page
The blog detail page MUST display the full content of a selected post.
#### Scenario: Viewing a single post
- **Given** a user clicks on a post in the listing
- **Then** they should be taken to `/blog/[slug]`
- **And** they should see the full content of the post.
- **And** the page should use `BlogPostSEO` component.

### Requirement: Language Switching on Post
The system MUST allow users to switch between the English and Spanish versions of a post.
#### Scenario: Switching to existing translation
- **Given** a user is viewing an English post that has a Spanish translation (`related_post`)
- **When** they click the "Español" switch in the header
- **Then** they should be redirected to the corresponding Spanish post URL.

#### Scenario: Switching with no translation
- **Given** a user is viewing a post with no translation
- **When** they click the language switch
- **Then** they should be redirected to the main blog listing of the target language (fallback).

## MODIFIED Requirements

### Requirement: LangLink Component
The `LangLink` component MUST support custom translated paths provided via props.
#### Scenario: Handling custom translated paths
- **Given** the `LangLink` component
- **When** it receives a `translatedPath` prop
- **Then** it should use that path for the language toggle instead of generating one from `pageKey`.
