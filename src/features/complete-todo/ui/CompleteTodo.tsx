import { useCompleteTodo } from "../model";
import style from "../styles/CompleteTodo.module.scss";
import type { CompleteTodoProps } from "../types";

export function CompleteTodo({ todo }: CompleteTodoProps) {
  const { isCompleted, toggleComplete } = useCompleteTodo(todo);

  return (
    <input
      id={"complete"}
      type="checkbox"
      checked={isCompleted}
      onChange={toggleComplete}
      className={style.input}
    />
  );
}
