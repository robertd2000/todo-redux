import { useClearCompleted } from "../model";
import style from "../styles/ClearCompleted.module.scss";

export function ClearCompleted() {
  const { onClearCompleted } = useClearCompleted();

  return (
    <span onClick={onClearCompleted} className={style.clear}>
      Clear completed
    </span>
  );
}
