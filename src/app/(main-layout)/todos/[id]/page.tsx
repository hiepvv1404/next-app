import Link from "next/link";
import { Todo } from "../page";
import { notFound } from "next/navigation";

const getTodoById = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/todos/${id}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
};

const TodoDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const todo: Todo = await getTodoById(id);
  if (!todo) {
    return notFound();
  }
  return (
    <div>
      <h1>Todo Detail Page</h1>
      <h2>{todo.title}</h2>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <Link href="/todos">Back to Todo List</Link>
    </div>
  );
};

export default TodoDetailPage;
