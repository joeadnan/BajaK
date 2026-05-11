<script setup lang="ts">
import { computed, ref } from "vue";

const WHATSAPP_NUMBER = "6283821359370";

const form = ref({
  name: "",
  phone: "",
  message: "",
});

const errors = ref({
  name: "",
  phone: "",
  message: "",
});

const isLoading = ref(false);

const toast = ref({
  show: false,
  success: false,
  message: "",
});

function validate() {
  let valid = true;

  errors.value = {
    name: "",
    phone: "",
    message: "",
  };

  // Nama
  if (!form.value.name.trim()) {
    errors.value.name = "Nama wajib diisi.";
    valid = false;
  }

  // Phone
  const phoneRegex = /^[0-9+\-\s]{8,15}$/;

  if (!form.value.phone.trim()) {
    errors.value.phone = "Nomor telepon wajib diisi.";
    valid = false;
  } else if (!phoneRegex.test(form.value.phone)) {
    errors.value.phone = "Format nomor telepon tidak valid.";
    valid = false;
  }

  // Message
  if (!form.value.message.trim()) {
    errors.value.message = "Pesan wajib diisi.";
    valid = false;
  } else if (form.value.message.length < 10) {
    errors.value.message = "Pesan minimal 10 karakter.";
    valid = false;
  }

  return valid;
}

function showToast(success: boolean, message: string) {
  toast.value = {
    show: true,
    success,
    message,
  };

  setTimeout(() => {
    toast.value.show = false;
  }, 3000);
}

const whatsappMessage = computed(() => {
  return encodeURIComponent(`
Halo BajaKu 👋

Nama: ${form.value.name}
No HP: ${form.value.phone}

Pesan:
${form.value.message}
`);
});

const whatsappLink = computed(() => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage.value}`;
});

async function kirimPesan() {
  if (!validate()) return;

  isLoading.value = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 800));

    showToast(true, "Mengalihkan ke WhatsApp...");

    window.open(whatsappLink.value, "_blank");

    form.value = {
      name: "",
      phone: "",
      message: "",
    };
  } catch (error) {
    showToast(false, "Gagal membuka WhatsApp.");
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <section id="contact" class="bg-gray-50 py-20">
    <div class="container-custom mx-auto max-w-5xl px-4">
      <!-- Header -->
      <div class="mb-12 text-center">
        <p
          class="mb-2 text-sm font-bold uppercase tracking-widest text-yellow-600"
        >
          Kontak
        </p>

        <h2 class="text-3xl font-black leading-tight text-gray-900 md:text-4xl">
          Hubungi
          <span class="text-yellow-500"> Kami </span>
        </h2>

        <p class="mx-auto mt-3 max-w-md text-sm text-gray-500">
          Konsultasi gratis untuk kebutuhan baja ringan Anda.
        </p>
      </div>

      <div class="grid items-start gap-10 md:grid-cols-2">
        <!-- LEFT -->
        <div class="flex flex-col gap-6">
          <div
            class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <h3 class="mb-4 text-base font-bold text-gray-800">Info Kontak</h3>

            <div class="flex flex-col gap-5 text-sm">
              <!-- WA -->
              <a
                :href="whatsappLink"
                target="_blank"
                class="group flex items-start gap-3"
              >
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-lg text-green-500"
                >
                  💬
                </div>

                <div>
                  <p class="text-xs text-gray-400">WhatsApp</p>

                  <p
                    class="font-semibold text-gray-800 transition group-hover:text-green-600"
                  >
                    0838-7491-5877
                  </p>
                </div>
              </a>

              <!-- Address -->
              <div class="flex items-start gap-3">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50 text-lg text-yellow-500"
                >
                  📍
                </div>

                <div>
                  <p class="text-xs text-gray-400">Alamat</p>

                  <p class="font-semibold text-gray-800">
                    Jl. Baja Ringan No. 1, Jakarta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div
          class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8"
        >
          <!-- TOAST -->
          <Transition name="toast">
            <div
              v-if="toast.show"
              class="mb-5 rounded-xl border px-4 py-3 text-sm font-semibold"
              :class="
                toast.success
                  ? 'border-green-200 bg-green-50 text-green-700'
                  : 'border-red-200 bg-red-50 text-red-700'
              "
            >
              {{ toast.message }}
            </div>
          </Transition>

          <!-- FORM -->
          <form class="flex flex-col gap-5" @submit.prevent="kirimPesan">
            <!-- NAME -->
            <div>
              <label
                class="mb-2 block text-xs font-bold uppercase text-gray-600"
              >
                Nama Lengkap
              </label>

              <input
                v-model="form.name"
                type="text"
                placeholder="cth: Budi Santoso"
                class="w-full rounded-xl border px-4 py-3 text-sm outline-none transition"
                :class="
                  errors.name
                    ? 'border-red-400 bg-red-50'
                    : 'border-gray-200 bg-gray-50 focus:border-yellow-400'
                "
              />

              <p v-if="errors.name" class="mt-1 text-xs text-red-500">
                {{ errors.name }}
              </p>
            </div>

            <!-- PHONE -->
            <div>
              <label
                class="mb-2 block text-xs font-bold uppercase text-gray-600"
              >
                Nomor Telepon
              </label>

              <input
                v-model="form.phone"
                type="tel"
                placeholder="0838-7491-5877"
                class="w-full rounded-xl border px-4 py-3 text-sm outline-none transition"
                :class="
                  errors.phone
                    ? 'border-red-400 bg-red-50'
                    : 'border-gray-200 bg-gray-50 focus:border-yellow-400'
                "
              />

              <p v-if="errors.phone" class="mt-1 text-xs text-red-500">
                {{ errors.phone }}
              </p>
            </div>

            <!-- MESSAGE -->
            <div>
              <label
                class="mb-2 block text-xs font-bold uppercase text-gray-600"
              >
                Pesan
              </label>

              <textarea
                v-model="form.message"
                rows="5"
                placeholder="Ceritakan kebutuhan Anda..."
                class="w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition"
                :class="
                  errors.message
                    ? 'border-red-400 bg-red-50'
                    : 'border-gray-200 bg-gray-50 focus:border-yellow-400'
                "
              />

              <div class="mt-1 flex justify-between">
                <p v-if="errors.message" class="text-xs text-red-500">
                  {{ errors.message }}
                </p>

                <p class="ml-auto text-xs text-gray-400">
                  {{ form.message.length }} karakter
                </p>
              </div>
            </div>

            <!-- BUTTON -->
            <button
              type="submit"
              :disabled="isLoading"
              class="flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition"
              :class="
                isLoading
                  ? 'cursor-not-allowed bg-yellow-300 text-yellow-800'
                  : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
              "
            >
              <span v-if="isLoading"> ⏳ </span>

              <span v-else> 💬 </span>

              {{ isLoading ? "Mengirim..." : "Kirim ke WhatsApp" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
