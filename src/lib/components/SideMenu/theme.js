export default function themejs() {
  let theme = localStorage.getItem("theme");
  if (!theme) {
    localStorage.setItem("theme", "light");
    theme = "light";
  }
  const themeButton = document.querySelector(`[data-theme=${theme}]`);
  themeButton?.classList.add("active");
  if (theme === "system") {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDark) {
      document.documentElement.classList.add("system", "moon");
    } else {
      document.documentElement.classList.add("system", "light");
    }
  } else {
    document.documentElement.classList.add(theme);
  }
}
