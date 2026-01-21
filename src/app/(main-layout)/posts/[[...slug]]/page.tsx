import PostListPage from "./_components/PostList";
import PostDetailPage from "./_components/PostListDetail";

const PostPage = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  //url:/posts/chuyen-muc-1/bai-viet-1 thi dung [...slug] de lay mang slug
  // url co param ko bat buoc thi dung [[...slug]]
  // const [category, post] = slug;
  const { slug } = await params;
  return <>{slug ? <PostDetailPage post={slug[0]} /> : <PostListPage />}</>;
};

export default PostPage;
