"use client";

import { useRouter } from "next/navigation";

const TodoAdd = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title") as string;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API}/todos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, completed: false }),
      },
    );
    if (response.ok) {
      router.refresh();
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-add-form">
      <input
        type="text"
        name="title"
        placeholder="Enter todo title"
        className="form-control"
        required
      />
      <button type="submit" className="btn btn-danger">
        Add Todo
      </button>
    </form>
  );
};

export default TodoAdd;
