<script setup lang="ts">
interface Props {
  image: string;
  title: string;
  description: string;
  alt?: string;
}

withDefaults(defineProps<Props>(), {
  alt: "",
});
</script>

<template>
  <article
    class="portfolio-card group relative overflow-hidden rounded-3xl shadow-lg"
  >
    <!-- Image -->
    <NuxtImg
      :src="image"
      :alt="alt || title"
      class="card-image h-80 w-full object-cover"
      loading="lazy"
      format="webp"
      quality="80"
    />

    <!-- Overlay -->
    <div class="card-overlay absolute inset-0" />

    <!-- Content -->
    <div class="card-content absolute bottom-0 z-10 w-full p-6">
      <h3 class="text-xl font-extrabold leading-tight text-white">
        {{ title }}
      </h3>

      <p
        class="card-description mt-2 text-sm leading-relaxed text-yellow-100/80"
      >
        {{ description }}
      </p>
    </div>
  </article>
</template>

<style scoped>
.portfolio-card {
  cursor: pointer;
  transition:
    box-shadow 0.4s ease,
    transform 0.4s ease;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 200, 50, 0.08);
}

.portfolio-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 16px 48px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(255, 200, 50, 0.22),
    0 0 40px rgba(234, 179, 8, 0.1);
}

/* Image zoom */
.card-image {
  transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.portfolio-card:hover .card-image {
  transform: scale(1.08);
}

/* Gradient overlay expands on hover */
.card-overlay {
  background: linear-gradient(
    to top,
    var(--color-primary, #1a0a00) 0%,
    color-mix(in srgb, var(--color-primary, #1a0a00) 70%, transparent) 35%,
    transparent 65%
  );
  transition: background 0.4s ease;
}

.portfolio-card:hover .card-overlay {
  background: linear-gradient(
    to top,
    var(--color-primary, #1a0a00) 0%,
    color-mix(in srgb, var(--color-primary, #1a0a00) 88%, transparent) 55%,
    color-mix(in srgb, var(--color-primary, #1a0a00) 40%, transparent) 100%
  );
}

/* Content lifts on hover */
.card-content {
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.portfolio-card:hover .card-content {
  transform: translateY(-4px);
}

/* Description revealed on hover */
.card-description {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition:
    max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    opacity 0.4s ease 0.05s;
}

.portfolio-card:hover .card-description {
  max-height: 6rem;
  opacity: 1;
}
</style>
