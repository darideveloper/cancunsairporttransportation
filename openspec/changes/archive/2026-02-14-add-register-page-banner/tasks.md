# Tasks: Add Banner to Register Page

- [x] **Analysis**: Verify `BannerImage.astro` functionality and `process.png` dimensions. <!-- id: 0 -->
- [x] **Implementation**: Integrate `BannerImage` into `src/components/pages/store/Register.astro`. <!-- id: 1 -->
- [x] **Refactoring**: Remove legacy `SectionHeading` from `Register.astro`. <!-- id: 2 -->
- [x] **Testing**: Verify responsive behavior and translations in `/en/register` and `/es/registro`. <!-- id: 3 -->

## Complex Task Examples

### Integration Example
Updating the `Register.astro` file to use the banner and handle the spacing:

```astro
<Layout pageKey={pageKey}>
  <PageSEO currentPage='register' slot='seo' />

  <BannerImage
    src={processBannerImg}
    alt={t('pages.register.title')}
    title={t('pages.register.title')}
    class="-mt-6"
  >
    <h1 class="mx-auto w-11/12 text-4xl font-bold md:text-5xl">
      {t('pages.register.title')}
    </h1>
    <p class="mt-4 text-lg text-white/90">
      {t('pages.register.description')}
    </p>
  </BannerImage>

  <!-- Notice the container starting after the banner -->
  <div class='container py-24'>
    ...
  </div>
</Layout>
```
