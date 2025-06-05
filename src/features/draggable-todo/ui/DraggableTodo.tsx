import { memo, useCallback } from "react";
import { useDraggableTodo } from "../model";
import { TodoItem } from "../../../widgets/todo-item";
import type { DraggableTodoProps } from "../types";

export const DraggableTodo = memo(function DraggableTodo({
  id,
  index,
  todo,
}: DraggableTodoProps) {
  const { drag, drop, isDragging } = useDraggableTodo(id, index);

  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      drag(drop(node));
    },
    [drag, drop]
  );

  return (
    <div
      ref={setRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        transition: "opacity 0.2s ease",
      }}
    >
      <TodoItem todo={todo} />
    </div>
  );
});
