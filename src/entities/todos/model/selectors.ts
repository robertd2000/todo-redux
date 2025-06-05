import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../../app/store";

const selectTodosState = (state: RootState) => state.todos;
const selectTodosItems = (state: RootState) => state.todos.todos;

export const selectActiveTodos = createSelector([selectTodosItems], (todos) =>
  todos.filter((todo) => !todo.completed)
);

export const selectCompletedTodos = createSelector(
  [selectTodosItems],
  (todos) => todos.filter((todo) => todo.completed)
);

export { selectTodosItems as selectAllTodos };

export { selectTodosState };
