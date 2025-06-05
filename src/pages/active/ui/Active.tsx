import { TodoList } from "../../../widgets/todo-list";

export function Active() {
  return (
    <div>
      <TodoList filter="active" />
    </div>
  );
}
