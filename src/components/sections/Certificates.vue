<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

import bnsp from "@/assets/certificates/bnsp.png";
import sertikom1 from "@/assets/certificates/sertikom1.png";
import sertikom2 from "@/assets/certificates/sertikom2.png";
import sertikom3 from "@/assets/certificates/sertikom3.png";

const certificates = [
  {
    title: "BNSP Junior Web Developer",
    issuer: "BNSP",
    year: "2025",
    image: bnsp,
  },
  {
    title: "Building a Full-Stack Mobile App",
    issuer: "SERTIKOM",
    year: "2025",
    image: sertikom3,
  },
  {
    title: "Building a Library Management Website",
    issuer: "SERTIKOM",
    year: "2024",
    image: sertikom2,
  },
  {
    title: "Developing a Web-Based Hotel Booking Application",
    issuer: "SERTIKOM",
    year: "2024",
    image: sertikom1,
  },
];

const selectedCertificate = ref<string | null>(null);

const openCertificate = (image: string) => {
  selectedCertificate.value = image;
  document.body.style.overflow = "hidden";
};

const closeCertificate = () => {
  selectedCertificate.value = null;
  document.body.style.overflow = "";
};

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    closeCertificate();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});
</script>

<template>
  <section id="certificates" class="bg-zinc-50 py-20 sm:py-24 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <!-- Heading -->
      <div class="mx-auto max-w-2xl text-center">
        <span
          class="rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-600 sm:py-2 sm:text-sm"
        >
          My Certificates
        </span>

        <h2 class="mt-5 text-3xl font-black sm:mt-6 sm:text-4xl md:text-5xl">
          Professional Certifications
        </h2>

        <p class="mt-4 text-base leading-7 text-zinc-500 sm:mt-5 sm:text-lg sm:leading-8">
          Certifications and competency assessments that demonstrate my
          expertise in web development and software engineering.
        </p>
      </div>

      <!-- Cards -->
      <div class="mt-12 space-y-8 sm:mt-16 sm:space-y-10 md:mt-20 md:space-y-12">
        <div
          v-for="certificate in certificates"
          :key="certificate.title"
          class="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:rounded-[32px]"
        >
          <div class="grid gap-0 lg:grid-cols-2 lg:gap-10">
            <!-- IMAGE -->
            <div class="flex items-center justify-center bg-zinc-100 p-5 sm:p-8">
              <img
                :src="certificate.image"
                :alt="certificate.title"
                @click="openCertificate(certificate.image)"
                class="h-auto max-h-[320px] w-full cursor-zoom-in object-contain transition-transform duration-700 group-hover:scale-105 sm:max-h-[450px] lg:max-h-[750px]"
              />
            </div>

            <!-- CONTENT -->
            <div class="flex flex-col justify-center p-6 sm:p-8 md:p-12">
              <span
                class="w-fit rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600 sm:px-4 sm:py-2 sm:text-sm"
              >
                {{ certificate.issuer }}
              </span>

              <h3 class="mt-5 text-xl font-bold sm:mt-6 sm:text-2xl md:text-3xl lg:text-4xl">
                {{ certificate.title }}
              </h3>

              <p class="mt-4 text-sm leading-6 text-zinc-500 sm:mt-6 sm:text-base sm:leading-8">
                Successfully completed the professional competency
                assessment and earned this certification, validating my
                skills in web development.
              </p>

              <div class="mt-6 sm:mt-8">
                <span
                  class="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 sm:px-4 sm:py-2 sm:text-sm"
                >
                  {{ certificate.year }}
                </span>
              </div>

              <div class="mt-8 sm:mt-10">
                <button
                  @click="openCertificate(certificate.image)"
                  class="group inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-7 sm:py-3 sm:text-base"
                >
                  View Certificate

                  <svg
                    class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14m-7-7 7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="selectedCertificate"
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
        @click="closeCertificate"
      >
        <button
          @click.stop="closeCertificate"
          class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-black shadow-lg transition hover:scale-110 sm:right-6 sm:top-6 sm:h-12 sm:w-12 sm:text-2xl"
        >
          ✕
        </button>

        <img
          :src="selectedCertificate"
          class="max-h-[85vh] max-w-[92vw] rounded-2xl bg-white p-2 shadow-2xl sm:max-h-[92vh]"
          @click.stop
        />
      </div>
    </Transition>
  </Teleport>
</template>