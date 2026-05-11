<template>
  <div>
    <!-- Header akan selalu ada di atas -->
    <Header />

    <!-- Konten dari index.vue akan muncul di sini -->
    <main>
      <NuxtPage />
      <nuxt-link to="/Services"></nuxt-link>
    </main>

    <!-- Footer akan selalu ada di bawah -->
    <Footer />
  </div>
</template>
