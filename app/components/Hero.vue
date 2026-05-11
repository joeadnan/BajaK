<template>
  <section
    class="relative min-h-screen pt-32 flex items-center bg-primary overflow-hidden"
  >
    <div class="absolute inset-0">
      <img
        src="/images/about-bajaringan.jpg"
        alt="Jasa baja ringan profesional"
        class="w-full h-full object-cover opacity-35"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/30"
      ></div>
    </div>

    <div
      class="container-custom relative z-10 grid md:grid-cols-2 gap-10 items-center"
    >
      <div>
        <p class="text-secondary font-bold mb-4">
          Spesialis Rangka Atap & Konstruksi Baja Ringan
        </p>

        <h2
          class="text-5xl md:text-7xl font-black text-inherit leading-tight mb-6"
        >
          Bangunan Kuat Dengan
          <span class="text-secondary">Baja Ringan Berkualitas.</span>
        </h2>

        <p class="text-slate-700 text-lg max-w-xl mb-8">
          Penyedia solusi material dan instalasi baja ringan terpercaya. BajaKu
          menghadirkan produk rangka atap, kanopi, hingga plafon berkualitas
          untuk proyek hunian maupun skala besar seperti gudang dan gedung
          komersiall.
        </p>

        <div class="flex flex-wrap gap-4">
          <NuxtLink to="#contact" class="btn-primary">
            Konsultasi Sekarang
          </NuxtLink>
          <NuxtLink to="#portfolio" class="btn-dark border border-white/20">
            Lihat Portfolio
          </NuxtLink>
        </div>

        <div class="grid grid-cols-2 gap-6 mt-12 max-w-md">
          <div>
            <h3 class="text-4xl font-black text-white">500+</h3>
            <p class="text-yellow-600">Project Selesai</p>
          </div>
          <div>
            <h3 class="text-4xl font-black text-white">10+</h3>
            <p class="text-yellow-600">Tahun Pengalaman</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
