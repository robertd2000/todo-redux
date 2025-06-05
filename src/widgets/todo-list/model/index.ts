import { useEffect } from "react";
import { useAppSelector } from "../../../app/store";
import {
  selectActiveTodos,
  selectAllTodos,
  selectCompletedTodos,
} from "../../../entities/todos/model/selectors";
import type { Filter } from "../../../shared/types";
import { getTitle } from "../lib/title";

export function useTodoList(filter: Filter) {
  const allTodos = useAppSelector(selectAllTodos);
  const activeTodos = useAppSelector(selectActiveTodos);
  const completedTodos = useAppSelector(selectCompletedTodos);

  const getFilteredTodos = () => {
    switch (filter) {
      case "all":
        return allTodos;
      case "active":
        return activeTodos;
      case "completed":
        return completedTodos;
      default:
        return allTodos;
    }
  };

  useEffect(() => {
    document.title = getTitle(filter);
  }, [filter]);

  const filteredTodos = getFilteredTodos();

  return { todos: filteredTodos };
}
