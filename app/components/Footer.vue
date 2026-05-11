<script setup lang="ts">
const currentYear = new Date().getFullYear();

const menus = [
  { name: "Home", to: "/" },
  { name: "Services", to: "#services" },
  { name: "Portfolio", to: "#portfolio" },
  { name: "Contact", to: "#contact" },
];

const contacts = [
  {
    label: "Phone",
    value: "0838-7491-5877",
    href: "tel:083821359370",
    icon: "ri-phone-line",
  },
  {
    label: "Email",
    value: "info@bajaku.id",
    href: "mailto:info@bajaku.id",
    icon: "ri-mail-line",
  },
];
</script>

<template>
  <footer
    class="relative overflow-hidden border-t border-white/10 bg-[#07111F] text-white"
  >
    <!-- Background Glow -->
    <div
      class="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl"
    />

    <div class="container-custom relative z-10 py-16">
      <div
        class="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4"
      >
        <!-- Brand -->
        <section class="lg:col-span-2">
          <NuxtLink
            to="/"
            class="inline-flex items-center text-4xl font-black tracking-tight"
          >
            Baja<span class="text-secondary">Ku</span>
          </NuxtLink>

          <p class="mt-5 max-w-xl text-[15px] leading-8 text-slate-300">
            Menyediakan baja ringan berkualitas untuk rangka atap, kanopi,
            plafon, renovasi atap, dan berbagai kebutuhan konstruksi modern
            dengan hasil kuat, rapi, dan terpercaya.
          </p>

          <!-- CTA -->
          <div class="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/6283874915877"
              target="_blank"
              class="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-primary transition hover:scale-105"
            >
              Konsultasi Gratis
            </a>

            <a
              href="#portfolio"
              class="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-secondary hover:text-secondary"
            >
              Lihat Portfolio
            </a>
          </div>
        </section>

        <!-- Navigation -->
        <nav aria-label="Footer Navigation">
          <h3
            class="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-secondary"
          >
            Navigation
          </h3>

          <ul class="space-y-4">
            <li v-for="menu in menus" :key="menu.name">
              <NuxtLink
                :to="menu.to"
                class="group inline-flex items-center text-slate-300 transition hover:text-white"
              >
                <span
                  class="mr-2 h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:w-4"
                />
                {{ menu.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Contact -->
        <section>
          <h3
            class="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-secondary"
          >
            Contact
          </h3>

          <ul class="space-y-5">
            <li v-for="contact in contacts" :key="contact.label">
              <a
                :href="contact.href"
                class="group flex items-start gap-4 text-slate-300 transition hover:text-white"
              >
                <div
                  class="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg transition group-hover:border-secondary group-hover:bg-secondary/10 group-hover:text-secondary"
                >
                  <i :class="contact.icon" />
                </div>

                <div>
                  <p class="text-xs uppercase tracking-widest text-slate-500">
                    {{ contact.label }}
                  </p>

                  <p class="mt-1 text-sm font-medium">
                    {{ contact.value }}
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </div>

      <!-- Bottom -->
      <div
        class="flex flex-col items-center justify-between gap-4 pt-7 text-sm text-slate-400 md:flex-row"
      >
        <p>
          © {{ currentYear }}
          <span class="font-semibold text-white">BajaKu</span>. All rights
          reserved.
        </p>

        <div class="flex items-center gap-5">
          <a href="#" class="transition hover:text-secondary">
            Privacy Policy
          </a>

          <a href="#" class="transition hover:text-secondary"> Terms </a>
        </div>
      </div>
    </div>
  </footer>
</template>
