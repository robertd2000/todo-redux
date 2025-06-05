import { DndProvider } from "react-dnd";
import type { Filter } from "../../../shared/types";
import { Empty } from "../../../shared/ui";
import { useTodoList } from "../model";
import { HTML5Backend } from "react-dnd-html5-backend";

import style from "../styles/TodoList.module.scss";
import { DraggableTodo } from "../../../features/draggable-todo";

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
