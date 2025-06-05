import type { TodoItemType } from "../../../entities/todos/types";

export interface DraggableTodoProps {
  id: string;
  index: number;
  todo: TodoItemType;
}
