import Link from "next/link";
import TodoAdd from "./_components/TodoAdd";

// Fectch data o server: lay data tu API va tra ve Component
const fetchTodos = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/todos`);

  if (!res.ok) {
    throw new Error("Failed to load todos");
  }

  return res.json();
};

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
const TodoPage = async () => {
  const todos = await fetchTodos();
  return (
    <div>
      <h1>Todo Page</h1>
      <ul>
        {todos.map((todo: Todo) => (
          <Link key={todo.id} href={`/todos/${todo.id}`}>
            <li>{todo.title}</li>
          </Link>
        ))}
      </ul>
      <TodoAdd />
    </div>
  );
};
export default TodoPage;
