import { XSquare } from "lucide-react";
import { useDeleteTodo } from "../model";
import type { DeleteTodoProps } from "../types";
import style from "../styles/DeleteTodo.module.scss";

export function DeleteTodo({ id }: DeleteTodoProps) {
  const { onDelete } = useDeleteTodo();

  return (
    <XSquare
      id={"delete"}
      onClick={() => onDelete(id)}
      className={style.delete}
    />
  );
}
