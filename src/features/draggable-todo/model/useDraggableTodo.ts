import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
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

  const handleDrop = useCallback(
    (item: { id: string; index: number }) => {
      if (item.index !== index) {
        dispatch(
          moveTodo({
            from: item.index,
            to: index,
          })
        );
      }
    },
    [dispatch, index]
  );

  const [, drop] = useDrop(() => ({
    accept: "TODO",
    hover: handleDrop,
  }));

  return {
    drag,
    drop,
    isDragging,
  };
}
