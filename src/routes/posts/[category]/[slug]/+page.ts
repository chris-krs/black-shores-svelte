import { getPost } from "$lib/utils/posts/posts";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  const post = await getPost(params.category, params.slug);
  return {
    ...post,
  };
};
