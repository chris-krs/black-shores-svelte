import { mdsvex, escapeSvelte } from "mdsvex";
import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { join } from "path";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { createHighlighter } from "shiki";
import { bundledLanguagesInfo } from "shiki/langs";

const highlighter = await createHighlighter({
  themes: ["dracula"],
  lang: bundledLanguagesInfo.map((lang) => lang.id),
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".md"],
      layout: join(process.cwd(), "./src/lib/components/mdx/MDXContent.svelte"),
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            // 自定义锚点链接样式和行为
            behavior: "prepend", // 锚点链接包裹标题（可选：'prepend' 前缀，'append' 后缀）
            properties: {
              class: "anchor-link", // 添加 CSS 类，用于自定义样式
              ariaLabel: "链接到标题", // 无障碍标签
            },
            // 自定义锚点符号（如 #）
            content: {
              type: "element",
              tagName: "span",
              properties: {
                class: "anchor-icon",
              },
              children: [
                {
                  type: "element",
                  tagName: "i",
                  properties: {
                    class: "i-iuno-paperclip"
                  }
                },
              ],
            },
          },
        ],
      ],
      highlight: {
        highlighter: async (code, lang = "text") => {
          await highlighter.loadLanguage(lang);
          const html = escapeSvelte(
            highlighter.codeToHtml(code, { lang, theme: "dracula" })
          );
          const classAndStylePattern =
            /<pre\s+class="([^"]+)"\s+style="([^"]+)"/;
          const contentPattern = /<pre[^>]*>([\s\S]*?)<\/pre>/i;
          const classAndStyle = html.match(classAndStylePattern);
          const content = html.match(contentPattern);
          return `<Components.pre lang=${lang} class=${classAndStyle?.[1]} style=${classAndStyle?.[2]}>{@html \`${content?.[1]}\`}</Components.pre>`;
        },
      },
    }),
  ],
  kit: {
    adapter: adapter(),
  },
  extensions: [".svelte", ".svx", ".md"],
};

export default config;
