import type { RootState } from "../../../app/store";
import type { TodoItemType } from "../types";

export const selectAllTodos = (state: RootState) => state.todos;

export const selectCompletedTodos = (state: RootState) =>
  state.todos.filter((todo: TodoItemType) => todo.completed);

export const selectActiveTodos = (state: RootState) =>
  state.todos.filter((todo: TodoItemType) => !todo.completed);
