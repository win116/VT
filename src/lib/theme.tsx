"use client";
// src/theme.js
if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
}

// Function to set theme to light
export function setThemeLight() {

  localStorage.theme = "light";
  document.body.classList.remove("dark");
}

// Function to set theme to dark
export function setThemeDark() {
  localStorage.theme = "dark";
  document.body.classList.add("dark");
}

// Function to set theme to system preference
export function setThemeSystem() {
  localStorage.removeItem("theme");
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}
