<script lang="ts">
  const externalLinks = [
    {
      key: "github",
      icon: "i-iuno-github",
      href: "https://github.com/chris-krs",
    },
    {
      key: "mail",
      icon: "i-iuno-email",
      href: "mailto:xz985598341a@qq.com",
    },
    {
      key: "rss",
      icon: "i-iuno-rss",
      href: "/",
    },
    {
      key: "bilibili",
      icon: "i-iuno-bilibili",
      href: "https://space.bilibili.com/12877881?spm_id_from=333.1007.0.0",
    },
  ];
</script>

<div class="flex gap-2 w-fit">
  {#each externalLinks as { key, icon, href }}
    <a
      {href}
      class="rounded-full p-[0.3rem] hover:bg-[var(--bg-1)] transition-all duration-300 flex items-center justify-center"
      aria-label={key}
    >
      <i class={icon}></i>
    </a>
  {/each}
</div>
