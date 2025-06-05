import { TodoList } from "../../../widgets/todo-list";

export function Completed() {
  return (
    <div>
      <TodoList filter="completed" />
    </div>
  );
}
