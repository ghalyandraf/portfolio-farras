<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import Container from "../layout/Container.vue";
import profile from "../../assets/images/parras.jpg";
import { siVuedotjs, siLaravel, siNextdotjs, siTypescript } from "simple-icons";

const photo = ref<HTMLElement | null>(null);
const badgeVue = ref<HTMLElement | null>(null);
const badgeLaravel = ref<HTMLElement | null>(null);
const badgeNext = ref<HTMLElement | null>(null);
const badgeTS = ref<HTMLElement | null>(null);

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
    <div class="absolute inset-0 -z-20 bg-gradient-to-b from-white via-slate-50 to-blue-50" />
    <div class="absolute left-1/2 top-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px] sm:h-[500px] sm:w-[500px] lg:h-[650px] lg:w-[650px] lg:blur-[130px]" />

    <Container>
      <div class="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

        <div class="text-center lg:text-left">
          <span class="hero-text inline-flex rounded-full border bg-white/80 px-4 py-2 text-sm shadow-md backdrop-blur sm:px-5 sm:text-base">Available for Freelance</span>

          <p class="hero-text mt-8 text-zinc-500 sm:mt-10">Hi, I'm</p>

          <h1 class="hero-text mt-2 text-4xl font-black leading-none sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Farras
            <br />
            Ghalyandra
          </h1>

          <h2 class="hero-text mt-5 text-xl font-semibold sm:mt-6 sm:text-2xl">
            Building Modern
            <br />
            Digital Experiences.
          </h2>

          <p class="hero-text mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-500 sm:mt-8 sm:text-lg sm:leading-8 lg:mx-0">I build modern, fast and beautiful web experiences using Vue.js, Laravel, Next.js and modern frontend technologies.</p>

          <div class="hero-text mt-8 flex flex-wrap justify-center gap-4 sm:mt-10 lg:justify-start">
            <button class="rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-1 hover:shadow-xl sm:px-7 sm:py-4 sm:text-base">View Projects</button>
            <button class="rounded-full border px-6 py-3.5 text-sm transition hover:bg-white sm:px-7 sm:py-4 sm:text-base">Contact Me</button>
          </div>

          <div class="hero-text mt-10 flex items-center justify-center gap-2 text-zinc-400 sm:mt-12 lg:justify-start">
            <div class="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Available for Work
          </div>
        </div>

        <div class="relative flex justify-center">
          <div class="absolute h-[260px] w-[260px] rounded-full bg-blue-400/20 blur-[60px] sm:h-[340px] sm:w-[340px] sm:blur-[75px] lg:h-[420px] lg:w-[420px] lg:blur-[90px]" />

          <div ref="photo" class="relative z-20 w-full max-w-[420px]">
            <div class="rounded-[28px] border border-white/50 bg-white/80 p-3 shadow-[0_30px_80px_rgba(0,0,0,.12)] backdrop-blur-xl sm:rounded-[38px] sm:p-4">
              <img :src="profile" class="w-full rounded-[20px] transition duration-500 hover:scale-105 sm:rounded-[28px]" />
            </div>

            <div ref="badgeVue" class="absolute -left-2 top-10 flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs shadow-xl sm:left-0 sm:top-16 sm:gap-2 sm:px-5 sm:py-3 sm:text-base">
              <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 sm:h-4 sm:w-4" :fill="`#${siVuedotjs.hex}`"><path :d="siVuedotjs.path" /></svg>
              Vue.js
            </div>
            <div ref="badgeLaravel" class="absolute -right-2 top-28 flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs shadow-xl sm:-right-6 sm:top-40 sm:gap-2 sm:px-5 sm:py-3 sm:text-base">
              <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 sm:h-4 sm:w-4" :fill="`#${siLaravel.hex}`"><path :d="siLaravel.path" /></svg>
              Laravel
            </div>
            <div ref="badgeNext" class="absolute bottom-10 left-1 flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs shadow-xl sm:bottom-14 sm:left-5 sm:gap-2 sm:px-5 sm:py-3 sm:text-base">
              <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 sm:h-4 sm:w-4" :fill="`#${siNextdotjs.hex}`"><path :d="siNextdotjs.path" /></svg>
              Next.js
            </div>
            <div ref="badgeTS" class="absolute bottom-0 right-2 flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs shadow-xl sm:right-8 sm:gap-2 sm:px-5 sm:py-3 sm:text-base">
              <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 sm:h-4 sm:w-4" :fill="`#${siTypescript.hex}`"><path :d="siTypescript.path" /></svg>
              TypeScript
            </div>
          </div>
        </div>

      </div>

      <div class="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-zinc-400 sm:block sm:bottom-8">↓ Scroll</div>
    </Container>
  </section>
</template>