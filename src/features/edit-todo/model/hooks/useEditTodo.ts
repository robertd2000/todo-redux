import { useState } from "react";
import type { TodoItemType } from "../../../../entities/todos/types";
import { useAppDispatch } from "../../../../app/store";
import { editTodo } from "../../../../entities/todos/model/slice";

export const useEditTodo = (todo: TodoItemType) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [title, setTitle] = useState<string>("");

  const dispatch = useAppDispatch();

  const onEditModeOn = () => {
    if (!todo.completed) {
      setIsEditMode(true);
      setTitle(todo.title);
    }
  };

  const onEditModeOf = () => {
    if (!todo.completed) {
      saveTodos();
    }
  };

  const saveTodos = () => {
    dispatch(
      editTodo({
        id: todo.id,
        newText: title,
      })
    );
  };

  const onEdit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      saveTodos();
    }
  };

  return {
    isEditMode,
    title,
    setTitle,
    onEditModeOn,
    onEditModeOf,
    onEdit,
  };
};
