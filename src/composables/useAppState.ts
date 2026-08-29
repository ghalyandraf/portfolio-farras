import { ref } from "vue";

export type Language = "en" | "id";
export type Theme = "light" | "dark";

const savedLang = (localStorage.getItem("lang") as Language) || "en";
export const currentLang = ref<Language>(savedLang);

export function setLanguage(lang: Language) {
  currentLang.value = lang;
  localStorage.setItem("lang", lang);
}

export function toggleLanguage() {
  setLanguage(currentLang.value === "en" ? "id" : "en");
}

const savedTheme = (localStorage.getItem("theme") as Theme) || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
export const currentTheme = ref<Theme>(savedTheme);

export function setTheme(theme: Theme) {
  currentTheme.value = theme;
  localStorage.setItem("theme", theme);
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function toggleTheme() {
  setTheme(currentTheme.value === "light" ? "dark" : "light");
}

setTheme(savedTheme);
