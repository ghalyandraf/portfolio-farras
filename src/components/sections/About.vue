<script setup lang="ts">
import { computed } from "vue";
import Container from "../layout/Container.vue";
import { currentLang, translations } from "../../composables/i18n";

const t = computed(() => translations[currentLang.value].about);

const cardIcons = ["code", "map-pin", "graduation-cap", "rocket"];
</script>

<template>
  <section id="about" class="bg-white py-20 transition-colors duration-300 dark:bg-zinc-950 sm:py-24 lg:py-32">
    <Container>
      <!-- Heading -->
      <div class="mx-auto max-w-2xl text-center">
        <p
          class="text-xs font-semibold tracking-[3px] text-blue-600 dark:text-blue-400 sm:text-sm sm:tracking-[4px]"
        >
          {{ t.tag }}
        </p>

        <h2 class="mt-4 text-3xl font-black text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
          {{ t.title }}
        </h2>

        <p class="mt-5 text-base leading-7 text-zinc-500 dark:text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
          {{ t.desc }}
        </p>
      </div>

      <!-- Cards -->
      <div class="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:mt-20 md:grid-cols-2">
        <div
          v-for="(card, index) in t.cards"
          :key="card.title"
          class="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-3xl sm:p-8"
        >
          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/50 sm:h-14 sm:w-14 sm:rounded-2xl"
          >
            <!-- CODE -->
            <svg
              v-if="cardIcons[index] === 'code'"
              class="h-6 w-6 text-blue-600 dark:text-blue-400 sm:h-7 sm:w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 18l6-6-6-6M8 6l-6 6 6 6"
              />
            </svg>

            <!-- MAP PIN -->
            <svg
              v-else-if="cardIcons[index] === 'map-pin'"
              class="h-6 w-6 text-blue-600 dark:text-blue-400 sm:h-7 sm:w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <!-- GRADUATION CAP -->
            <svg
              v-else-if="cardIcons[index] === 'graduation-cap'"
              class="h-6 w-6 text-blue-600 dark:text-blue-400 sm:h-7 sm:w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l6.16-3.42A12.02 12.02 0 0121 14.5M12 14l-6.16-3.42A12.02 12.02 0 003 14.5M12 14v7"
              />
            </svg>

            <!-- ROCKET -->
            <svg
              v-else
              class="h-6 w-6 text-blue-600 dark:text-blue-400 sm:h-7 sm:w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 2C9 6 8 10 8 13a4 4 0 008 0c0-3-1-7-4-11z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 17l-2 4 4-2M18 17l2 4-4-2"
              />
            </svg>
          </div>

          <h3 class="mt-5 text-xl font-bold text-zinc-900 dark:text-white sm:mt-6 sm:text-2xl">
            {{ card.title }}
          </h3>

          <p
            v-for="(line, i) in card.lines"
            :key="i"
            class="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400 sm:mt-4 sm:text-base sm:leading-8"
            :class="{ 'mt-1 sm:mt-1': i > 0 && card.lines.length > 2 }"
          >
            {{ line }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>
