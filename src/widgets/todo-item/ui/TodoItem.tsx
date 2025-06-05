import type { TodoItemProps } from "../types";
import style from "../styles/TodoItem.module.scss";

export function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className={style.todo} id={todo.id}>
      <div className={style.start}>{/* <CompleteTodo todo={todo} /> */}</div>
      <div className={style.middle}>{/* <EditTodo todo={todo} /> */}</div>
      <div className={style.end}>{/* <DeleteTodo id={todo.id} /> */}</div>
    </div>
  );
}
