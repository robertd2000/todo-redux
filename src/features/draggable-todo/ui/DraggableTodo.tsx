import type { DraggableTodoProps } from "../types";
import { TodoItem } from "../../../widgets/todo-item";
import { useDraggableTodo } from "../model";

export function DraggableTodo({ id, index, todo }: DraggableTodoProps) {
  const { drag, drop, isDragging } = useDraggableTodo(id, index);

  return (
    <div
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      ref={(node) => drag(drop(node))}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <TodoItem todo={todo} />
    </div>
  );
}
