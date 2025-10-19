<script lang="ts">
  import ExternalLinks from "./ExternalLinks.svelte";
  import Intro from "./Intro.svelte";
  import MenuList from "./MenuList.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
</script>

<aside class="flx-col w-70 h-full pb-2">
  <Intro />
  <div class="flex-1 mt-8">
    <MenuList />
  </div>
  <div class="flx-col gap-2 items-center justify-center">
    <ThemeToggle />
    <ExternalLinks />
  </div>
</aside>

