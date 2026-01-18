const PostDetailPage = async ({
  category,
  post,
}: {
  category: string;
  post: string;
}) => {
  //url:/posts/chuyen-muc-1/bai-viet-1 thi dung [...slug] de lay mang slug
  // url co param ko bat buoc thi dung [[...slug]]
  // const [category, post] = slug;
  return (
    <div>
      <h1>Chi tiet bai viet</h1>
      <p>Post Detail Page for post: {post}</p>
      <p>Category: {category}</p>
    </div>
  );
};

export default PostDetailPage;
