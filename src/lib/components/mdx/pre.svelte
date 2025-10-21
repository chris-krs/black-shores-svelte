<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    children,
    class: className,
    style,
    lang,
  }: {
    children: Snippet;
    class: string;
    style: string;
    lang: string;
  } = $props();
</script>

<div data-lang={lang} class={`${className} pb-4 rounded-xl my-4`} {style}>
  <div class="flex items-center justify-between bg-gray/10">
    <span class="px-4 border-b border-blue py-1">{lang}</span>
    <button
      aria-label="copy"
      class="flex items-center justify-center mr-4 py-1"
    >
      <i class="i-iuno-copy"></i>
    </button>
  </div>
  <pre class="px-4 mt-2">{@render children()}</pre>
</div>

<style>
</style>
