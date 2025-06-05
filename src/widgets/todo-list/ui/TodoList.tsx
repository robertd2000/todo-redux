import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import type { Filter } from "../../../shared/types";
import { Empty } from "../../../shared/ui";
import { useTodoList } from "../model";
import { DraggableTodo } from "../../../features/draggable-todo";
import style from "../styles/TodoList.module.scss";

interface Props {
  filter: Filter;
}

export function TodoList({ filter }: Props) {
  const { todos } = useTodoList(filter);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={style.todoList}>
        {todos.length ? (
          todos.map((todo, index) => (
            <DraggableTodo
              key={todo.id}
              id={todo.id}
              index={index}
              todo={todo}
            />
          ))
        ) : (
          <Empty />
        )}
      </div>
    </DndProvider>
  );
}
