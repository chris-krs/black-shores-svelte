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

<div data-lang={lang} class={`${className} pb-4 rounded-xl my-4 overflow-hidden border border-[var(--border)]`} {style}>
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
  :global(.moon .shiki) ,
  :global(.moon .shiki pre span) {
    color: var(--shiki-dark) !important;
    background-color: var(--shiki-dark-bg) !important;
    /* Optional, if you also want font styles */
    font-style: var(--shiki-dark-font-style) !important;
    font-weight: var(--shiki-dark-font-weight) !important;
    text-decoration: var(--shiki-dark-text-decoration) !important;
  }
</style>
