import { useAppSelector } from "../../../../app/store";
import { selectActiveTodos } from "../../../../entities/todos/model/selectors";

export const useItems = () => {
  const todos = useAppSelector(selectActiveTodos);

  return {
    items: todos?.length || 0,
  };
};
