<script lang="ts">
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
  let currentTheme: (typeof thems)[number]["key"] = $state("light");

  const switchTheme = (targetTheme: (typeof thems)[number]["key"]) => {
    currentTheme = targetTheme;
  };
</script>

<div
  class="flex gap-2 bg-slate-100 p-1 w-fit rounded-full border border-slate-200"
>
  {#each thems as { key, icon }}
    <button
      aria-label={key}
      class="hover:bg-white rounded-full  items-center  py-1 px-3"
      class:bg-white={key === currentTheme}
      onclick={() => switchTheme(key)}
    >
      <i class={icon}></i>
    </button>
  {/each}
</div>
