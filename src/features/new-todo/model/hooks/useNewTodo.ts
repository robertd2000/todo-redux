import { useState } from "react";
import { useAppDispatch } from "../../../../app/store";
import { addTodo } from "../../../../entities/todos/model/slice";

export const useNewTodo = () => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useAppDispatch();

  const createTodo = () => {
    if (todo.trim()) dispatch(addTodo(todo));
    setTodo("");
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createTodo();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      createTodo();
    }
  };

  return {
    todo,
    onSubmit,
    setTodo,
    handleKeyDown,
  };
};
