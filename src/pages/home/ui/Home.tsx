import { NewTodo } from "../../../features/new-todo";
import { TodoList } from "../../../widgets/todo-list";

export function Home() {
  return (
    <div>
      <NewTodo />
      <TodoList filter="all" />
    </div>
  );
}
