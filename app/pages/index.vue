<script setup lang="ts">
const services = [
  {
    icon: "🏠",
    title: "Rangka Atap",
    description:
      "Pemasangan rangka atap baja ringan untuk rumah, ruko, gudang, dan bangunan komersial.",
  },
  {
    icon: "🛡️",
    title: "Kuat & Aman",
    description:
      "Material berkualitas, struktur presisi, dan pengerjaan sesuai kebutuhan bangunan.",
  },
  {
    icon: "🏆",
    title: "Produk Terbaik",
    description:
      "Menggunakan material berkualitas tinggi dengan hasil akhir presisi, tahan lama, dan terpercaya untuk berbagai kebutuhan Anda.",
  },
  {
    icon: "💰",
    title: "Hemat Biaya",
    description:
      "Solusi konstruksi ringan yang efisien, tahan lama, dan minim perawatan.",
  },
];

const portfolios = [
  {
    image: "/images/Bondek1219.jpeg",
    title: "Bondek",
    description: "Pemasangan rangka atap baja ringan rumah tinggal.",
  },
  {
    image: "/images/Hollo.jpeg",
    title: "Hollo",
    description: "Kanopi halaman rumah dengan struktur kuat dan rapi.",
  },
  {
    image: "/images/NockBending.jpeg",
    title: "Nock Bending",
    description: "Pemasangan reng baja ringan untuk atap genteng metal.",
  },
  {
    image: "/images/SengGelombang.jpeg",
    title: "Seng Gelombang 914",
    description: "Penggantian rangka lama menjadi baja ringan.",
  },
  {
    image: "/images/SengGelombang762.jpeg",
    title: "Seng Gelombang 762",
    description: "Penggantian rangka lama menjadi baja ringan.",
  },
  {
    image: "/images/Spandek.jpeg",
    title: "Spandek",
    description: "Penggantian rangka lama menjadi baja ringan.",
  },
  {
    image: "/images/GentengPasir.jpeg",
    title: "Genteng Pasir",
    description: "Penggantian rangka lama menjadi baja ringan.",
  },
  {
    image: "/images/CNP_75x35.jpeg",
    title: "CNP 75x35",
    description: "Penggantian rangka lama menjadi baja ringan.",
  },
];
</script>

<template>
  <main>
    <!-- HERO -->
    <section id="home">
      <Hero />
    </section>

    <!-- CONTACT -->
    <section id="contact">
      <Contact />
    </section>

    <!-- SERVICES -->
    <section id="services" class="bg-white py-20">
      <div class="container-custom">
        <div class="mb-12 text-center">
          <h2 class="section-title">
            Layanan
            <span class="text-highlight"> BajaKu </span>
          </h2>

          <p class="mt-4 text-slate-700">
            Solusi konstruksi baja ringan profesional untuk berbagai kebutuhan
            bangunan.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-4">
          <ServiceCard
            v-for="service in services"
            :key="service.title"
            v-bind="service"
          />
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="bg-slate-50 py-24">
      <div class="container-custom grid items-center gap-14 md:grid-cols-2">
        <!-- Image -->
        <div class="relative">
          <NuxtImg
            src="/images/BajaKu.jpg"
            alt="Tentang BajaKu"
            class="rounded-3xl shadow-xl"
            loading="lazy"
          />

          <div
            class="absolute -bottom-8 left-8 rounded-3xl bg-secondary p-6 shadow-xl"
          >
            <h3 class="text-4xl font-black text-primary">10+</h3>

            <p class="font-bold text-primary">Tahun Pengalaman</p>
          </div>
        </div>

        <!-- Content -->
        <div>
          <h2 class="section-title mb-6">
            Penyedia Baja Ringan Terbaik:
            <span class="text-highlight"> Solusi Atap Kuat Tahan Karat. </span>
          </h2>

          <p class="mb-8 leading-relaxed text-slate-700">
            Ribuan proyek konstruksi mengandalkan BajaKu untuk material baja
            ringan terbaik mereka. Dengan pengalaman lebih dari 10 tahun, kami
            menyediakan rangka
          </p>

          <div class="space-y-5">
            <div>
              <h3 class="mb-2 text-xl font-extrabold text-primary">
                Visi Kami
              </h3>

              <p class="text-slate-700">
                Menjadi penyedia solusi baja ringan terdepan yang mengutamakan
                standar keamanan tinggi, kekuatan material premium, dan
                ketahanan bangunan jangka panjang.
              </p>
            </div>

            <div>
              <h3 class="mb-2 text-xl font-extrabold text-primary">
                Misi Kami
              </h3>

              <p class="text-slate-700">
                Memberikan layanan purna jual dan garansi produk demi kepuasan
                pelanggan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PORTFOLIO -->
    <section id="portfolio" class="bg-white py-24">
      <div class="container-custom">
        <div
          class="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <h2 class="section-title">
              Product Baja Ringan
              <span class="text-highlight"> Yang Kami Tawarkan. </span>
            </h2>

            <p class="mt-4 max-w-2xl text-slate-700">
              Wujudkan Bangunan Impian dengan Produk Baja Ringan Berkualitas –
              Cek Inspirasi Product Kami!
            </p>
          </div>

          <NuxtLink to="#portfolio" class="btn-primary"> Lihat Semua </NuxtLink>
        </div>

        <div class="grid gap-6 md:grid-cols-4">
          <PortfolioCard
            v-for="portfolio in portfolios"
            :key="portfolio.title"
            v-bind="portfolio"
          />
        </div>
      </div>
    </section>
  </main>
</template>
