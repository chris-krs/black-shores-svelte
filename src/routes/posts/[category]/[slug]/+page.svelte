<script lang="ts">
  const { data } = $props();
</script>

<svelte:head>
  <title>{data.meta.title}</title>
</svelte:head>
<div>
  <div
    class="group relative h-64 w-full flx-col justify-between rounded-xl text-white overflow-hidden text-shadow-2xs cursor-pointer"
  >
    <img
      src={data.meta.thumbnail}
      alt={data.meta.title}
      class="group-hover:scale-110 absolute top-0 left-0 h-64 w-full object-cover z-1 transition-all duration-300"
    />
    <div class="flex gap-2 p-4 meta z-2">
      <div
        class="rounded-lg border border-[hsla(0,0%,100%,.5)] px-2 flex items-center gap-2 shadow-2xs"
      >
        <i class="i-iuno-calendar"></i>
        {new Date(data.meta.publishAt).toLocaleDateString()}
      </div>
      <div
        class="rounded-lg border border-[hsla(0,0%,100%,.5)] px-2 flex items-center gap-2 shadow-2xs"
      >
        <i class="i-iuno-folder"></i>
        {data.meta.category}
      </div>
    </div>
    <div class="post-title text-3xl font-bold z-2">
      {data.meta.title}
    </div>
  </div>
  <div class="mt-8">
    <data.content />
  </div>
</div>

<style>
  .meta {
    text-shadow:
      0 1px 1px rgba(0, 0, 0, 0.2),
      0 1px 2px rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to bottom, #0005, #0003, transparent);
  }
  .post-title {
    background-image: linear-gradient(transparent, #0003, #0005);
    text-shadow:
      0 1px 1px rgba(0, 0, 0, 0.2),
      0 1px 2px rgba(0, 0, 0, 0.2);
    padding: 1rem;
  }
</style>
