<script setup lang="ts">
import { ref, computed } from "vue";
import { Menu, X, Sun, Moon, Globe } from "@lucide/vue";
import Container from "./Container.vue";
import { currentLang, currentTheme, toggleLanguage, toggleTheme, translations } from "../../composables/i18n";

const open = ref(false);

const t = computed(() => translations[currentLang.value].nav);

const menus = computed(() => [
  { name: t.value.home, href: "#home" },
  { name: t.value.about, href: "#about" },
  { name: t.value.projects, href: "#projects" },
  { name: t.value.certificates, href: "#certificates" },
  { name: t.value.contact, href: "#contact" },
]);
</script>

<template>
  <header class="fixed top-0 left-0 z-50 w-full">
    <Container>

      <div
        class="mt-5 flex h-16 items-center justify-between rounded-full border border-zinc-200 bg-white/70 px-6 shadow-lg backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70"
      >

        <h1 class="text-xl font-bold text-zinc-900 dark:text-white">
          Farras<span class="text-blue-600">.</span>
        </h1>

        <!-- Desktop Navigation -->
        <nav class="hidden items-center gap-8 lg:flex">
          <a
            v-for="menu in menus"
            :key="menu.href"
            :href="menu.href"
            class="text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white"
          >
            {{ menu.name }}
          </a>
        </nav>

        <!-- Actions (Lang & Theme Switcher) -->
        <div class="flex items-center gap-3">
          <!-- Language Toggle Button -->
          <button
            @click="toggleLanguage"
            class="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 sm:px-3.5 sm:py-1.5"
            title="Change Language"
          >
            <Globe :size="15" class="text-blue-600 dark:text-blue-400" />
            <span>{{ currentLang.toUpperCase() }}</span>
          </button>

          <!-- Dark/Light Theme Toggle Button -->
          <button
            @click="toggleTheme"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
            title="Toggle Theme"
          >
            <Sun v-if="currentTheme === 'dark'" :size="18" class="text-amber-400" />
            <Moon v-else :size="18" class="text-zinc-600" />
          </button>

          <!-- Mobile Menu Button -->
          <button
            class="text-zinc-800 dark:text-zinc-200 lg:hidden"
            @click="open = !open"
          >
            <Menu v-if="!open" :size="24" />
            <X v-else :size="24" />
          </button>
        </div>

      </div>

      <!-- Mobile Menu -->
      <transition name="fade">
        <div
          v-if="open"
          class="mt-3 rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-800 dark:bg-zinc-900 lg:hidden"
        >
          <a
            v-for="menu in menus"
            :key="menu.href"
            :href="menu.href"
            class="block py-3 text-zinc-700 transition hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            @click="open = false"
          >
            {{ menu.name }}
          </a>
        </div>
      </transition>

    </Container>
  </header>
</template>
