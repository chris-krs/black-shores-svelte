import type { PostMeta, RawPostFile } from "./posts-type.js";

export const getAllPostMeta = (category: string) => {
  const posts: PostMeta[] = [];
  const files = import.meta.glob<RawPostFile>(`/src/content/**/*.md`, {
    eager: true,
  });
  for (const path in files) {
    if (!path.includes(category)) continue;
    const file = files[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");
    if (file && typeof file === "object" && "metadata" in file && slug) {
      posts.push({
        slug,
        ...file.metadata,
      });
    }
  }
  return posts;
};
