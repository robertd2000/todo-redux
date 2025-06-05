import type { Filter } from "../../../shared/types";

export const getTitle = (title: Filter) => {
  switch (title) {
    case "completed":
      return "TODOS: Completed";
    case "active":
      return "TODOS: Active";

    default:
      return "TODOS";
  }
};
