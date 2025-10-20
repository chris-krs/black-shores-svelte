<script lang="ts">
  import PostList from "$lib/components/PostList.svelte";
  import PostSlideBar from "$lib/components/PostSlideBar.svelte";

  const { data } = $props();
</script>

<div>
  <div>
    <h2 class="font-bold text-4xl mask-linear-b mask-linear-from-10 mb-4 mask-b-from-10%">
      置顶
    </h2>
    <PostSlideBar posts={data.allProgramPosts} />
  </div>
  <div class="mt-10">
    <h2 class="font-bold text-4xl mask-linear-b mask-linear-from-10 mb-4 mask-b-from-10%">
      文章列表
    </h2>
    <PostList posts={data.allProgramPosts} />
  </div>
</div>

<style>
</style>
