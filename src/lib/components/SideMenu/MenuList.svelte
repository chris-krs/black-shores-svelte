<script lang="ts">
  import { page } from "$app/state";

  const menuItems = [
    {
      title: "编程",
      href: "/",
      icon: "i-iuno-react",
    },
    {
      title: "杂谈",
      href: "/other",
      icon: "i-iuno-game",
    },
    {
      title: "音乐",
      href: "/music",
      icon: "i-iuno-music",
    },
    {
      title: "关于",
      href: "/about",
      icon: "i-iuno-person",
    },
  ];
</script>

<div class="flx-col gap-3 px-3">
  {#each menuItems as { href, icon, title }}
    <a
      class="hover:(bg-[var(--bg-1)] text-[var(--text-0)]) p-2 rounded-lg flex gap-3 items-center transition-colors duration-300"
      class:active={page.url.pathname.includes(href.replace("/", ""))}
      {href}
    >
      <i class={icon}></i>
      <span>{title}</span>
    </a>
  {/each}
</div>

<style lang="postcss">
  .active {
    background-color: var(--bg-1);
    color: var(--text-0);
  }
</style>
