import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../app/store";
import { toggleTodo } from "../../../../entities/todos/model/slice";

export const useCompleteTodo = (todoId: string) => {
  const dispatch = useDispatch();

  // Получаем текущее состояние задачи
  const todo = useAppSelector((state) =>
    state.todos.todos.find((todo) => todo.id === todoId)
  );

  // Переключение статуса выполнения
  const toggleComplete = useCallback(() => {
    dispatch(toggleTodo(todoId));
  }, [dispatch, todoId]);

  return {
    isCompleted: todo?.completed || false,
    toggleComplete,
  };
};
