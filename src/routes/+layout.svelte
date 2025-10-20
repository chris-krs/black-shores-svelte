<script lang="ts">
  import favicon from "$lib/assets/favicon.webp";
  import SideMenu from "$lib/components/SideMenu/index.svelte";
  import "virtual:uno.css";
  import "$lib/styles/global.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta name="description" content="blog of Kriz.." />
</svelte:head>

<div
  class="flex gap-8 w-full max-w-5xl w-full mx-auto px-6 relative"
>
  <div class="hidden md:block h-[100vh] sticky top-0">
    <SideMenu />
  </div>
  <main class="flx-col flex-1 pt-8 pb-10">
    <div class="flex-1">
      {@render children?.()}
    </div>
    <footer
      class="mt-16 pt-10 border-t-slate-200 border-t border-dashed text-sm text-gray-500 flx-col gap-2 items-center justify-center"
    >
      <div>&copy;All rights reserverd by Kriz</div>
      <div>CC BY-NC-SA 4.0</div>
    </footer>
  </main>
</div>
