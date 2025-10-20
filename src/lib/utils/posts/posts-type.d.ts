import type { Snippet } from "svelte";

export type Frontmatter = {
  title: string;
  category: string;
  publishAt: Date;
  summary?: string;
  thumbnail?: string;
  tags?: string[];
};

export type PostMeta = {
  slug: string;
} & Frontmatter;

export type RawPostFile = {
  metadata: Frontmatter;
  default: Snippet;
};
