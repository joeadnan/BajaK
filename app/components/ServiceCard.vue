<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  icon: string;
}>();
</script>

<template>
  <div
    class="bg-primary rounded-3xl p-8 text-center shadow-xl hover:-translate-y-2 transition"
  >
    <div
      class="mx-auto mb-5 h-16 w-16 rounded-2xl bg-secondary/15 flex items-center justify-center text-4xl"
    >
      {{ icon }}
    </div>
    <h3 class="text-secondary font-extrabold text-xl mb-3">
      {{ title }}
    </h3>
    <p class="text-slate-600 text-sm leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>
