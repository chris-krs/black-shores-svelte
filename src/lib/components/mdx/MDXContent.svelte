<script module>
  import pre from "$lib/components/mdx/pre.svelte";
  export { pre };
</script>

<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div class="iuno-markdown">
  {@render children()}
</div>

<style lang="postcss">
  .iuno-markdown {
    /* paragraph */
    :global(p) {
      @apply text-md;
      margin-bottom: 1rem;
    }
    /* heading */
    :global(h1, h2) {
      position: relative;
      margin-top: 2.5rem;
      margin-bottom: 2rem;
      font-weight: 700;
    }
    :global(h1) {
      font-size: 2.2rem;
    }
    :global(h2) {
      font-size: 1.8rem;
    }
    :global(h1:hover .anchor-link, h2:hover .anchor-link) {
      opacity: 1;
    }
    /* anchor */
    :global(.anchor-link) {
      position: absolute;
      left: -1.1em;
      top: 0.25em;
      color: rgb(100, 108, 255);
      opacity: 0;
      transition: all 300ms;
    }
    /* :global(.anchor-link) {
      display: flex;
      align-items: center;
    }
    :global(.anchor-link):hover {
      color: rgb(100, 108, 255);
      
    }
    :global(.anchor-icon) {
      font-size: calc(1em * 0.8);
      opacity: 0;
      transition: opacity 300ms;
      margin-left: 1rem;
    }
    :global(.anchor-link:hover .anchor-icon) {
      opacity: 1;
    } */
    /* highlight */
    :global(code:not(pre code)) {
      background-color: rgba(100, 108, 255, 0.14);
      color: rgb(100, 108, 255);
      @apply px-2 py-[0.2rem] rounded-sm mx-2 text-sm;
    }
    /* code block */
    :global(blockquote) {
      border-left: 0.4rem solid rgba(100, 108, 255);
      padding-left: 1rem;
      @apply my-4;
    }
    /* list */
    :global(ul, ol) {
      padding-left: 1.5rem;
    }
    :global(ol:not(li > ol), ul:not(li > ul)) {
      @apply my-4;
    }
    :global(ul) {
      list-style-type: disc;
    }
    :global(ol) {
      list-style-type: decimal;
    }
    :global(li > ul) {
      list-style: circle;
    }
    :global(li > ul > li ul) {
      list-style: square;
    }
    :global(li) {
      margin-top: 0.4rem;
    }
    :global(li:first-child:not(li li)) {
      margin-top: 0;
    }
  }
</style>
