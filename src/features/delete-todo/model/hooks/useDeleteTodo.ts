import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../../../entities/todos/model/slice";

export const useDeleteTodo = () => {
  const dispatch = useDispatch();

  const onDelete = useCallback(
    (id: string) => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  return { onDelete };
};
