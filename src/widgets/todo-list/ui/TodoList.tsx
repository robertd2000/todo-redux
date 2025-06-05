import type { Filter } from "../../../shared/types";
import { useTodoList } from "../model";

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
