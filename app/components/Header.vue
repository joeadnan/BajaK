<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// ── State ──────────────────────────────────────────────────────────────
const isMenuOpen = ref(false);
const activeSection = ref("home");
const isHidden = ref(false);
const isScrolled = ref(false);

let lastScrollY = 0;
let observer: IntersectionObserver | null = null;

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

// ── 1. Smooth scroll ke section ────────────────────────────────────────
function scrollToSection(id: string) {
  isMenuOpen.value = false;
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ── 2. Active state via IntersectionObserver ───────────────────────────
function initObserver() {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    {
      threshold: 0.4,
      rootMargin: "-80px 0px 0px 0px",
    },
  );

  navItems.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) observer?.observe(el);
  });
}

// ── 3. Navbar hide/show saat scroll ───────────────────────────────────
function handleScroll() {
  const currentY = window.scrollY;
  isScrolled.value = currentY > 10;
  isHidden.value = currentY > 80 && currentY > lastScrollY;
  lastScrollY = currentY;
}

// ── Lifecycle ──────────────────────────────────────────────────────────
onMounted(() => {
  initObserver();
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  observer?.disconnect();
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="fixed top-0 left-0 z-50 w-full bg-primary/95 backdrop-blur border-b border-white/50 transition-transform duration-300"
    :class="{
      'shadow-lg': isScrolled,
      '-translate-y-full': isHidden,
      'translate-y-0': !isHidden,
    }"
  >
    <div class="container-custom h-20 flex items-center justify-between">
      <!-- ── Logo ──────────────────────────────────────────────────── -->
      <button @click="scrollToSection('home')" class="flex items-center gap-3">
        <div
          class="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center font-black text-primary hover:bg-secondary/90 transition"
        >
          BJ
        </div>
        <div>
          <h1 class="text-black font-bold text-xl leading-none">BajaKu</h1>
          <p class="text-xs text-yellow-600">Professional Baja Ringan</p>
        </div>
      </button>

      <!-- ── Nav Desktop ─────────────────────────────────────────── -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-semibold">
        <button
          v-for="item in navItems"
          :key="item.id"
          @click="scrollToSection(item.id)"
          class="transition duration-200 pb-0.5"
          :class="
            activeSection === item.id
              ? 'text-yellow-300 border-b-2 border-yellow-300'
              : 'text-yellow-700 hover:text-yellow-300'
          "
        >
          {{ item.label }}
        </button>
      </nav>

      <!-- ── CTA + Hamburger ─────────────────────────────────────── -->
      <div class="flex items-center gap-4">
        <a
          href="https://wa.me/6283874915877"
          class="hidden md:flex flex-col text-right"
        >
          <span class="text-xs text-slate-600">Hubungi Kami</span>
          <strong class="text-secondary">0838-7491-5877</strong>
        </a>

        <!-- Hamburger -->
        <button
          class="md:hidden flex flex-col gap-1.5 p-2"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Toggle menu"
        >
          <span
            class="block w-6 h-0.5 bg-yellow-700 transition-all duration-300"
            :class="{ 'rotate-45 translate-y-2': isMenuOpen }"
          />
          <span
            class="block w-6 h-0.5 bg-yellow-700 transition-all duration-300"
            :class="{ 'opacity-0 scale-x-0': isMenuOpen }"
          />
          <span
            class="block w-6 h-0.5 bg-yellow-700 transition-all duration-300"
            :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"
          />
        </button>
      </div>
    </div>

    <!-- ── Mobile Drawer ───────────────────────────────────────────── -->
    <Transition name="slide">
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-primary/98 border-t border-white/20 px-6 py-4 flex flex-col gap-1"
      >
        <button
          v-for="item in navItems"
          :key="item.id"
          @click="scrollToSection(item.id)"
          class="text-left text-sm font-semibold py-3 border-b border-white/10 transition duration-200"
          :class="
            activeSection === item.id
              ? 'text-yellow-300'
              : 'text-yellow-700 hover:text-yellow-400'
          "
        >
          {{ item.label }}
        </button>

        <a
          href="https://wa.me/6283874915877"
          class="mt-3 text-sm font-semibold text-secondary"
        >
          📞 0838-7491-5877
        </a>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
