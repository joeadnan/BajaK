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
  <article class="group relative overflow-hidden rounded-3xl shadow-lg">
    <!-- Image -->
    <NuxtImg
      :src="image"
      :alt="alt || title"
      class="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
      loading="lazy"
      format="webp"
      quality="80"
    />

    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"
    />

    <!-- Content -->
    <div class="absolute bottom-0 z-10 p-6">
      <h3 class="mb-2 text-xl font-extrabold text-yellow-600">
        {{ title }}
      </h3>

      <p class="text-sm leading-relaxed text-yellow-600">
        <!-- {{ description }} -->
      </p>
    </div>
  </article>
</template>
