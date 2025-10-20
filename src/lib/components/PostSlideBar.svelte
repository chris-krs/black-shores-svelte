<script lang="ts">
  import type { PostMeta } from "$lib/utils/posts/posts-type";
  import { browser } from "$app/environment";

  const { posts }: { posts: PostMeta[] } = $props();

  let x = $state(0);
  const step = $derived.by(() => (browser ? visiableArea.clientWidth / 2 : 0));
  let hoverd = $state(false);

  let visiableArea: HTMLDivElement;
  let realArea: HTMLDivElement;

  const toRight = () => {
    let _x = x;
    _x -= step;
    if (_x <= -realArea.scrollWidth + realArea.clientWidth) {
      _x = -realArea.scrollWidth + realArea.clientWidth;
    }
    x = _x;
  };

  const toLeft = () => {
    let _x = x;
    _x += step;
    if (_x >= 0) {
      _x = 0;
    }
    x = _x;
  };

  const mouseenter = () => {
    hoverd = true;
  };

  const mouseleave = () => {
    hoverd = false;
  };
</script>

<div
  role="row"
  tabindex="0"
  class="relative"
  onmouseenter={mouseenter}
  onmouseleave={mouseleave}
>
  <div
    class="overflow-hidden mask-radial-[50%_200%] mask-radial-from-50%"
    bind:this={visiableArea}
  >
    <div
      class="flex gap-3 transition-all duration-300"
      style:transform={`translateX(${x}px)`}
      bind:this={realArea}
    >
      {#each posts as post}
        <a
          href={`/post/program/${post.slug}`}
          aria-label={post.slug}
          title={post.title}
          class="relative flex-shrink-0 w-[max(5%,clamp(13rem,20vw,13rem))] aspect-ratio-video overflow-hidden rounded-xl overflow-hidden"
        >
          <img
            src={post.thumbnail}
            alt={`thumbnail of ${post.title}`}
            class="w-64 h-full object-cover"
            fetchpriority="high"
          />
          <div
            class="absolute bottom-0 z-10 text-gray-100 font-bold backdrop-blur-3xl w-full flex justify-center px-1 pt-3 pb-1 inset-a mask-t-from-50%"
          >
            {post.title}
          </div>
        </a>
      {/each}
    </div>
  </div>
  {#if hoverd}
    <button
      aria-label="left"
      class="px-1 py-3 rounded-lg absolute left-0 top-1/2 -translate-y-50% flex items-center bg-black opacity-50 color-white"
      onclick={toLeft}
    >
      <i class="i-iuno-left"></i>
    </button>
    <button
      aria-label="right"
      class="px-1 py-3 rounded-lg absolute right-0 top-1/2 -translate-y-50% bg-black opacity-50 color-white"
      onclick={toRight}
    >
      <i class="i-iuno-right"></i>
    </button>
  {/if}
</div>

<style>
</style>
