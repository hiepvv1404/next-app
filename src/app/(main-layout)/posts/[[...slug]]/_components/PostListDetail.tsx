"use client";

import { useEffect, useState } from "react";
import { Post } from "./PostList";

const PostDetailPage = ({ post: postId }: { post: string }) => {
  //url:/posts/chuyen-muc-1/bai-viet-1 thi dung [...slug] de lay mang slug
  // url co param ko bat buoc thi dung [[...slug]]
  // const [category, post] = slug;
  const [post, setPost] = useState<Post>({} as Post);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const getPostDetail = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_API}/posts/${postId}`,
        );
        if (!res.ok) {
          throw new Error("Failed to fetch post detail");
        }
        const data = await res.json();
        setPost(data);
      } catch (error: unknown) {
        setError(error as Error);
      }
    };
    getPostDetail();
  }, [postId]);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h1>Chi tiet bai viet</h1>
      <p>Title: {post.title}</p>
      <p>Content: {post.content}</p>
    </div>
  );
};

export default PostDetailPage;
