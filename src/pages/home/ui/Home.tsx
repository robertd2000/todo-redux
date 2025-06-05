import { TodoList } from "../../../widgets/todo-list";

export function Home() {
  return (
    <div>
      <TodoList filter="all" />
    </div>
  );
}
