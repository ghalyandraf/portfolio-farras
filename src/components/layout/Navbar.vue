<script setup lang="ts">
import { ref } from "vue";
import { Menu, X } from "@lucide/vue";
import Container from "./Container.vue";

const open = ref(false);

const menus = [
  "Home",
  "About",
  "Projects",
  "Certificates",
  "Contact",
];
</script>

<template>
  <header class="fixed top-0 left-0 z-50 w-full">
    <Container>

      <div
        class="mt-5 flex h-16 items-center justify-between rounded-full border border-zinc-200 bg-white/70 px-6 shadow-lg backdrop-blur-xl"
      >

        <h1 class="text-xl font-bold">
          Farras<span class="text-blue-600">.</span>
        </h1>

        <!-- Desktop -->
        <nav class="hidden gap-8 lg:flex">
          <a
            v-for="menu in menus"
            :key="menu"
            :href="'#'+menu.toLowerCase()"
            class="text-zinc-600 transition hover:text-black"
          >
            {{ menu }}
          </a>
        </nav>

        <!-- Mobile Button -->
        <button
          class="lg:hidden"
          @click="open = !open"
        >
          <Menu v-if="!open" :size="24" />
          <X v-else :size="24" />
        </button>

      </div>

      <!-- Mobile Menu -->
      <transition name="fade">
        <div
          v-if="open"
          class="mt-3 rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl lg:hidden"
        >
          <a
            v-for="menu in menus"
            :key="menu"
            :href="'#'+menu.toLowerCase()"
            class="block py-3 text-zinc-700"
            @click="open = false"
          >
            {{ menu }}
          </a>
        </div>
      </transition>

    </Container>
  </header>
</template>