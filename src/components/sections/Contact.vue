<script setup lang="ts">
const contacts = [
  {
    title: "Email",
    value: "ghalyandraf@gmail.com",
    href: "mailto:ghalyandraf@gmail.com",
    icon: "mail",
  },
  {
    title: "WhatsApp",
    value: "+62 887-2235-587",
    href: "https://wa.me/628872235587",
    icon: "phone",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/farras-ghalyandra",
    href: "https://linkedin.com/in/farras-ghalyandra",
    icon: "linkedin",
  },
  {
    title: "GitHub",
    value: "github.com/ghalyandraf",
    href: "https://github.com/ghalyandraf",
    icon: "github",
  },
];
</script>

<template>
  <section id="contact" class="bg-zinc-50 py-20 sm:py-24 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">

      <div class="mx-auto max-w-2xl text-center">
        <span class="rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-600 sm:py-2 sm:text-sm">Contact</span>
        <h2 class="mt-5 text-3xl font-black sm:mt-6 sm:text-4xl md:text-5xl">Let's Work Together</h2>
        <p class="mt-4 text-base leading-7 text-zinc-500 sm:mt-5 sm:text-lg sm:leading-8">I'm always open to discussing new opportunities, freelance projects, collaborations, or simply connecting.</p>
      </div>

      <div class="mt-12 grid gap-6 sm:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-8">

        <div class="rounded-3xl border border-zinc-200 bg-white p-6 shadow-lg sm:p-8 lg:p-10">
          <h3 class="text-2xl font-bold sm:text-3xl">Get In Touch</h3>
          <p class="mt-4 text-sm leading-6 text-zinc-500 sm:mt-6 sm:text-base sm:leading-8">Feel free to contact me if you have a project, business inquiry, internship opportunity, or just want to say hello.</p>
          <a href="mailto:ghalyandraf@gmail.com" class="mt-8 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg transition hover:-translate-y-1 sm:mt-10 sm:px-7 sm:py-3 sm:text-base">
            Let's Talk
            <svg class="ml-2 h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
        </div>

        <div class="space-y-4 sm:space-y-5">
          <a v-for="item in contacts" :key="item.title" :href="item.href" target="_blank" class="group flex items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-lg transition hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:p-6">
            <div class="flex min-w-0 items-center gap-3 sm:gap-5">
              <div class="shrink-0 rounded-xl bg-blue-50 p-3 sm:rounded-2xl sm:p-4">
                <svg v-if="item.icon === 'mail'" class="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </svg>
                <svg v-else-if="item.icon === 'phone'" class="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3l2 5-2 1a16 16 0 008 8l1-2 5 2v3a2 2 0 01-2 2h-1C9.82 22 2 14.18 2 5V5h1z" />
                </svg>
                <svg v-else-if="item.icon === 'linkedin'" class="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.5 8h3V22h-3V8zm7 0h2.9v1.9h.1c.4-.8 1.4-1.9 3-1.9 3.2 0 3.8 2.1 3.8 4.9V22h-3v-7.2c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V22h-3V8z" />
                </svg>
                <svg v-else class="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5A12 12 0 000 12.8c0 5.5 3.4 10.2 8.2 11.8.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.5-4-1.5-.5-1.4-1.3-1.8-1.3-1.8-1-.7.1-.7.1-.7 1.1.1 1.8 1.2 1.8 1.2 1 .1 1.6 2.1 1.6 2.1.9 1.5 2.3 1.1 2.9.9.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.4-5.5-6.2 0-1.4.5-2.5 1.2-3.4-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.3a11.4 11.4 0 016.2 0c2.4-1.6 3.4-1.3 3.4-1.3.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.4 0 4.8-2.9 5.9-5.6 6.2.5.4.8 1.2.8 2.5v3.7c0 .4.2.8.8.6A12 12 0 0024 12.8 12 12 0 0012 .5z" />
                </svg>
              </div>
              <div class="min-w-0">
                <p class="text-xs text-zinc-500 sm:text-sm">{{ item.title }}</p>
                <h4 class="break-all text-sm font-semibold sm:text-base">{{ item.value }}</h4>
              </div>
            </div>
            <svg class="h-5 w-5 shrink-0 text-zinc-400 transition group-hover:translate-x-1 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>

    </div>
  </section>
</template>