<script lang="ts">
  import { afterNavigate } from "$app/navigation";
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
      class="hover:bg-slate-100 p-2 rounded-lg flex gap-3 items-center"
      class:bg-slate-100={page.route.id === href}
      {href}
    >
      <i class={icon}></i>
      <span>{title}</span>
    </a>
  {/each}
</div>
