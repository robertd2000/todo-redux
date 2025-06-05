import type { Filter } from "../../../shared/types";
import { Empty } from "../../../shared/ui";
import { useTodoList } from "../model";
import style from "../styles/TodoList.module.scss";

interface Props {
  filter: Filter;
}

export function TodoList({ filter }: Props) {
  const { todos } = useTodoList(filter);

  return (
    <div className={style.todoList}>
      {todos.length ? (
        todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      ) : (
        <Empty />
      )}
    </div>
  );
}
