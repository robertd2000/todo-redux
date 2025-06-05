import { useAppDispatch } from "../../../../app/store";
import { clearCompleted } from "../../../../entities/todos/model/slice";

export const useClearCompleted = () => {
  const dispatch = useAppDispatch();

  const onClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return { onClearCompleted };
};
