import { getAllPostMeta } from "$lib/utils/posts/posts";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const allProgramPosts = getAllPostMeta("program");
  return {
    allProgramPosts,
  };
};
