"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type Post = {
  id: string;
  title: string;
  content: string;
};
const PostListPage = () => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [error, setError] = useState<Error>();

  const getListPost = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/posts`);
      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await res.json();
      setPostList(data);
    } catch (error: unknown) {
      setError(error as Error);
    }
  };

  useEffect(() => {
    getListPost();
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      {postList.map((post: Post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <p>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default PostListPage;
