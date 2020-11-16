import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";

import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return <div>ok</div>;
}

export async function getStaticProps({ params, preview = false }) {
  // const data = await getPostAndMorePosts(params.slug, preview);
  // const content = await markdownToHtml(data?.post?.content || "");

  return {
    // props: {
    //   preview,
    //   post: {
    //     ...data?.post,
    //     content,
    //   },
    //   morePosts: data?.morePosts,
    // },
  };
}

export async function getStaticPaths() {
  // const allPosts = await getAllPostsWithSlug();
  return {
    // paths: allPosts?.map((post) => `/projet/${post.slug}`) || [],
    paths: [],
    fallback: false,
  };
}
