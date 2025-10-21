<script lang="ts">
  import { browser } from "$app/environment";
  import themejs from "$lib/components/SideMenu/theme";
  import { onMount } from "svelte";

  const thems = [
    {
      key: "light",
      icon: "i-iuno-sun",
    },
    {
      key: "system",
      icon: "i-iuno-computer",
    },
    {
      key: "moon",
      icon: "i-iuno-moon",
    },
  ] as const;
  const themejsStr = $derived(themejs.toString());
  let currentTheme: (typeof thems)[number]["key"] | "" = $derived.by(() => {
    if (browser) {
      return localStorage.getItem("theme") as (typeof thems)[number]["key"];
    } else {
      return "";
    }
  });

  const switchTheme = (targetTheme: (typeof thems)[number]["key"]) => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (currentTheme === "system") {
      document.documentElement.classList.remove(
        "system",
        isDark ? "moon" : "light"
      );
    } else if (currentTheme === "light") {
      document.documentElement.classList.remove("light");
    } else if (currentTheme === "moon") {
      document.documentElement.classList.remove("moon");
    }
    if (targetTheme === "system") {
      document.documentElement.classList.add(
        "system",
        isDark ? "moon" : "light"
      );
    } else {
      document.documentElement.classList.add(targetTheme);
    }
    currentTheme = targetTheme;
    localStorage.setItem("theme", targetTheme);
  };

  onMount(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        const isDark = e.matches;
        document.documentElement.classList.remove(isDark ? "light" : "moon");
        document.documentElement.classList.add(isDark ? "moon" : "light");
      });
  });
</script>

<div
  class="flex gap-2  p-1 w-fit rounded-full border border-[var(--border)]"
>
  {#each thems as { key, icon }}
    <button
      data-theme={key}
      aria-label={key}
      class="hover:bg-[var(--bg-1)] rounded-full items-center py-1 px-3"
      class:active={currentTheme === key}
      onclick={() => switchTheme(key)}
    >
      <i class={icon}></i>
    </button>
  {/each}
</div>
<!-- svelte-ignore hydration_html_changed -->
{@html `
<script>
  (${themejsStr})();
</script>`}

<style>
  .active {
    background-color: var(--bg-1);
  }
</style>
