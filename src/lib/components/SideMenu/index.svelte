<script lang="ts">
  import ExternalLinks from "./ExternalLinks.svelte";
  import Intro from "./Intro.svelte";
  import MenuList from "./MenuList.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import menuBg from "$lib/assets/menu-bg.png";
</script>

<aside class="flx-col w-70 h-full pb-4">
  <Intro />
  <div class="flex-1 mt-8">
    <MenuList />
  </div>
  <div class="flx-col gap-2 items-center justify-center">
    <ThemeToggle />
    <ExternalLinks />
  </div>
  <img
    src={menuBg}
    alt="bg"
    class="absolute top-3 right-0 -z-10 select-none mask-l-from-10% w-42 mask-r-from-10% mask-b-from-10%"
  />
</aside>
