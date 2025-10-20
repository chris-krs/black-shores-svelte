<script lang="ts">
  import type { PostMeta } from "$lib/utils/posts/posts-type";

  const { posts }: { posts: PostMeta[] } = $props();
</script>

<div class="flx-col gap-4">
  {#each posts as post}
    <div
      class="flex justify-between h-36 overflow-hidden rounded-xl shadow-[0_.1em_.2em_hsl(220deg_20%_20%/10%)] bg-white"
    >
      <div class="p-4 flx-col justify-center">
        <a
          href={`/posts/program/${post.slug}`}
          class="group font-bold text-lg flex items-center hover:text-blue transition-color duration-300"
        >
          <div class="w-1 h-6 rounded-full mr-2 bg-blue-500"></div>
          <span class="text-xl">{post.title}</span>
          <i class="group-hover:opacity-100 opacity-0 transition-all duration-300 i-iuno-right text-blue-500 w-6 h-6"></i>
        </a>
        <p class="mt-4 text-sm text-gray-500">{post.summary}</p>
        <div class="mt-1 flex gap-4">
          <div class="flex items-center gap-2 text-gray-500 text-sm">
            <i class="i-iuno-calendar"></i>
            <span>{new Date(post.publishAt).toLocaleDateString()}</span>
          </div>
          <div class="flex items-center gap-2 text-gray-500 text-sm">
            <i class="i-iuno-folder"></i>
            <span>{post.category}</span>
          </div>
          <div class="flex items-center gap-2 text-gray-500 text-sm">
            <i class="i-iuno-tag"></i>
            {#each post.tags as tag}
              <a href="/" class="hover:text-blue">#{tag}</a>
            {/each}
          </div>
        </div>
      </div>
      <a
        class="group relative m-4 rounded-xl overflow-hidden aspect-video"
        href={`/posts/program/${post.slug}`}
        aria-label={post.slug}
      >
        <img
          class="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
          src={post.thumbnail}
          alt={`thumbnail of ${post.title}`}
          fetchpriority="high"
        />
        <div
          class="absolute left-0 top-0 w-full h-full bg-black hover:opacity-50 opacity-0 transition-all duration-300 flex items-center justify-center"
        >
          <i class="i-iuno-right w-12 h-12 color-white"></i>
        </div>
      </a>
    </div>
  {/each}
</div>

