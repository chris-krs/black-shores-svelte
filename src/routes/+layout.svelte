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

<div class="flex gap-4 w-full max-w-screen-xl w-full h-full mx-auto px-6 pb-8">
  <SideMenu />
  <main class="pt-8">
    {@render children?.()}
  </main>
</div>
