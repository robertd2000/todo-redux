import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { moveTodo } from "../../../entities/todos/model/slice";

export function useDraggableTodo(id: string, index: number) {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TODO",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: "TODO",
    hover: (item: { id: string; index: number }) => {
      if (item.index !== index) {
        dispatch(
          moveTodo({
            to: item.index,
            from: index,
          })
        );
        item.index = index;
      }
    },
  }));

  return {
    drag,
    drop,
    isDragging,
  };
}
