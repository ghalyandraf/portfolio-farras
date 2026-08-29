<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import gsap from "gsap";
import Container from "../layout/Container.vue";
import profile from "../../assets/images/parras.jpg";
import { siVuedotjs, siLaravel, siNextdotjs, siTypescript } from "simple-icons";
import { currentLang, translations } from "../../composables/i18n";

const photo = ref<HTMLElement | null>(null);
const badgeVue = ref<HTMLElement | null>(null);
const badgeLaravel = ref<HTMLElement | null>(null);
const badgeNext = ref<HTMLElement | null>(null);
const badgeTS = ref<HTMLElement | null>(null);

const t = computed(() => translations[currentLang.value].hero);

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

onMounted(() => {
  gsap.from(".hero-text", { opacity: 0, y: 50, stagger: 0.15, duration: 1, ease: "power3.out" });
  gsap.to(photo.value, { y: -15, repeat: -1, yoyo: true, duration: 3, ease: "power1.inOut" });
  gsap.to(badgeVue.value, { y: -15, repeat: -1, yoyo: true, duration: 2 });
  gsap.to(badgeLaravel.value, { y: 15, repeat: -1, yoyo: true, duration: 2.5 });
  gsap.to(badgeNext.value, { y: -12, repeat: -1, yoyo: true, duration: 2.2 });
  gsap.to(badgeTS.value, { y: 12, repeat: -1, yoyo: true, duration: 2.7 });
});
</script>

<template>
  <section id="home" class="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
    <div class="absolute inset-0 -z-20 bg-gradient-to-b from-white via-slate-50 to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />
    <div class="absolute left-1/2 top-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px] sm:h-[500px] sm:w-[500px] lg:h-[650px] lg:w-[650px] lg:blur-[130px] dark:bg-blue-600/15" />

    <Container>
      <div class="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

        <div class="text-center lg:text-left">
          <span class="hero-text inline-flex rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm text-zinc-800 shadow-md backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200 sm:px-5 sm:text-base">
            {{ t.badge }}
          </span>

          <p class="hero-text mt-8 text-zinc-500 dark:text-zinc-400 sm:mt-10">{{ t.hi }}</p>

          <h1 class="hero-text mt-2 text-4xl font-black leading-none text-zinc-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Farras
            <br />
            Ghalyandra
          </h1>

          <h2 class="hero-text mt-5 whitespace-pre-line text-xl font-semibold text-zinc-800 dark:text-zinc-200 sm:mt-6 sm:text-2xl">
            {{ t.subtitle }}
          </h2>

          <p class="hero-text mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-500 dark:text-zinc-400 sm:mt-8 sm:text-lg sm:leading-8 lg:mx-0">
            {{ t.desc }}
          </p>

          <div class="hero-text mt-8 flex flex-wrap justify-center gap-4 sm:mt-10 lg:justify-start">
            <button
              @click="scrollToSection('projects')"
              class="rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-1 hover:shadow-xl dark:bg-blue-600 dark:hover:bg-blue-500 sm:px-7 sm:py-4 sm:text-base"
            >
              {{ t.viewProjects }}
            </button>
            <button
              @click="scrollToSection('contact')"
              class="rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm text-zinc-800 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 sm:px-7 sm:py-4 sm:text-base"
            >
              {{ t.contactMe }}
            </button>
          </div>

          <div class="hero-text mt-10 flex items-center justify-center gap-2 text-zinc-400 dark:text-zinc-500 sm:mt-12 lg:justify-start">
            <div class="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            {{ t.availableForWork }}
          </div>
        </div>

        <div class="relative flex justify-center">
          <div class="absolute h-[260px] w-[260px] rounded-full bg-blue-400/20 blur-[60px] sm:h-[340px] sm:w-[340px] sm:blur-[75px] lg:h-[420px] lg:w-[420px] lg:blur-[90px] dark:bg-blue-500/20" />

          <div ref="photo" class="relative z-20 w-full max-w-[420px]">
            <div class="rounded-[28px] border border-white/50 bg-white/80 p-3 shadow-[0_30px_80px_rgba(0,0,0,.12)] backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/80 sm:rounded-[38px] sm:p-4">
              <img :src="profile" class="w-full rounded-[20px] transition duration-500 hover:scale-105 sm:rounded-[28px]" />
            </div>

            <div ref="badgeVue" class="absolute -left-2 top-10 flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs text-zinc-800 shadow-xl dark:bg-zinc-800 dark:text-zinc-100 sm:left-0 sm:top-16 sm:gap-2 sm:px-5 sm:py-3 sm:text-base">
              <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 sm:h-4 sm:w-4" :fill="`#${siVuedotjs.hex}`"><path :d="siVuedotjs.path" /></svg>
              Vue.js
            </div>
            <div ref="badgeLaravel" class="absolute -right-2 top-28 flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs text-zinc-800 shadow-xl dark:bg-zinc-800 dark:text-zinc-100 sm:-right-6 sm:top-40 sm:gap-2 sm:px-5 sm:py-3 sm:text-base">
              <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 sm:h-4 sm:w-4" :fill="`#${siLaravel.hex}`"><path :d="siLaravel.path" /></svg>
              Laravel
            </div>
            <div ref="badgeNext" class="absolute bottom-10 left-1 flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs text-zinc-800 shadow-xl dark:bg-zinc-800 dark:text-zinc-100 sm:bottom-14 sm:left-5 sm:gap-2 sm:px-5 sm:py-3 sm:text-base">
              <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 sm:h-4 sm:w-4" :fill="`#${siNextdotjs.hex}`"><path :d="siNextdotjs.path" /></svg>
              Next.js
            </div>
            <div ref="badgeTS" class="absolute bottom-0 right-2 flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs text-zinc-800 shadow-xl dark:bg-zinc-800 dark:text-zinc-100 sm:right-8 sm:gap-2 sm:px-5 sm:py-3 sm:text-base">
              <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 sm:h-4 sm:w-4" :fill="`#${siTypescript.hex}`"><path :d="siTypescript.path" /></svg>
              TypeScript
            </div>
          </div>
        </div>

      </div>

      <div class="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-zinc-400 dark:text-zinc-500 sm:block sm:bottom-8">↓ {{ t.scroll }}</div>
    </Container>
  </section>
</template>
