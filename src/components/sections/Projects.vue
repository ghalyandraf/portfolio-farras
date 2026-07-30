<script setup lang="ts">
import fortuna from "@/assets/images/fortuna.png";
import perpustakaan from "@/assets/images/img-perpus.png";
import travel from "@/assets/images/img-travel.png";
import hotel from "@/assets/images/newHotel.png";

const projects = [
  {
    title: "Fortuna Website",
    image: fortuna,
    description: "Laravel-based electrical service website featuring a booking system and an admin dashboard.",
    tech: ["Laravel", "Tailwind CSS", "MySQL"],
    link: "https://fortunasolusi.com",
    button: "Live Website",
  },
  {
    title: "Perpustakaan",
    image: perpustakaan,
    description: "Laravel-based library information website.",
    tech: ["Laravel", "Bootstrap", "MySQL"],
    link: "https://www.linkedin.com/posts/farras-ghalyandra-644304387_saya-mengembangkan-e-perpustakaan-sebuah-ugcPost-7393616407881568256-bOi4/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF9DcpQBrXQKDbn1bGpsCaKH80KlGVPBcz4",
    button: "View Post",
  },
  {
    title: "Travel",
    image: travel,
    description: "Laravel-based travel website featuring tour package booking and an admin dashboard.",
    tech: ["Laravel", "Bootstrap", "JavaScript", "Laragon"],
    link: "https://www.linkedin.com/posts/farras-ghalyandra-644304387_website-travel-berbasis-laravel-yang-dirancang-ugcPost-7392912938812112896-ezhN/",
    button: "View Post",
  },
  {
    title: "Hotel",
    image: hotel,
    description: "A modern hotel booking website featuring a Laravel-based room reservation system.",
    tech: ["Laravel", "Bootstrap", "JavaScript", "Laragon"],
    link: "https://www.linkedin.com/posts/farras-ghalyandra-644304387_hotel-website-is-a-web-based-hotel-booking-activity-7384563766392143872-Qmxf/",
    button: "View Post",
  },
];
</script>

<template>
  <section id="projects" class="bg-zinc-50 py-20 sm:py-24 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">

      <div class="mx-auto max-w-2xl text-center">
        <span class="rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-600 sm:py-2 sm:text-sm">My Projects</span>
        <h2 class="mt-5 text-3xl font-black sm:mt-6 sm:text-4xl md:text-5xl">Selected Works</h2>
        <p class="mt-4 text-base leading-7 text-zinc-500 sm:mt-5 sm:text-lg sm:leading-8">A collection of websites and applications I've built using Laravel, Vue.js, Next.js and modern frontend technologies.</p>
      </div>

      <div class="mt-12 space-y-8 sm:mt-16 sm:space-y-10 md:mt-20 md:space-y-12">
        <div v-for="project in projects" :key="project.title" class="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:rounded-[32px]">
          <div class="grid lg:grid-cols-2">
            <div class="aspect-video overflow-hidden bg-zinc-100 lg:aspect-auto">
              <img :src="project.image" :alt="project.title" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>

            <div class="flex flex-col justify-center p-6 sm:p-8 md:p-12">
              <h3 class="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">{{ project.title }}</h3>
              <p class="mt-4 text-sm leading-6 text-zinc-500 sm:mt-6 sm:text-base sm:leading-8">{{ project.description }}</p>

              <div class="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                <span v-for="tech in project.tech" :key="tech" class="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 sm:px-4 sm:py-2 sm:text-sm">{{ tech }}</span>
              </div>

              <div class="mt-8 flex flex-wrap gap-4 sm:mt-10">
                <a :href="project.link" target="_blank" class="group/button inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40 sm:px-7 sm:py-3 sm:text-base">
                  {{ project.button }}
                  <svg class="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>