import { useEditTodo } from "../model";
import type { EditTodoProps } from "../types";

export function EditTodo({ todo }: EditTodoProps) {
  const { isEditMode, title, setTitle, onEditModeOn, onEditModeOf, onEdit } =
    useEditTodo(todo);

  return (
    <div onClick={onEditModeOn}>
      {isEditMode ? (
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={onEdit}
          onBlur={onEditModeOf}
          autoFocus
        />
      ) : (
        <span
          className={`font-semibold break-all ${
            todo.done ? "line-through" : ""
          }`}
          data-testid="todo_content"
        >
          {todo.title}
        </span>
      )}
    </div>
  );
}
