import Link from "next/link";
import TodoAdd from "./_components/TodoAdd";
import SearchForm from "./_components/SearchForm";

// Fectch data o server: lay data tu API va tra ve Component
const fetchTodos = async (keyword: string | "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/todos?title=${keyword}`,
  );

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
const TodoPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ title: string }>;
}) => {
  const title = (await searchParams).title || "";

  const todos = await fetchTodos(title); //search phía server
  return (
    <div>
      <h1>Todo Page</h1>
      <SearchForm />
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
