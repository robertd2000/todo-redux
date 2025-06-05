import { Link } from "react-router";
import { ClearCompleted } from "../../../features/clear-completed";
import { useItems } from "../model";
import { HeaderLink } from "./Link";
import style from "../style/Header.module.scss";

export function Header() {
  const { items } = useItems();

  return (
    <header className={style.header}>
      <nav>
        <div className={style.headerInner}>
          <Link to={"/"} className={style.homeLink}>
            <span>TODOS</span>
          </Link>
          <div className={style.controls}>
            <ClearCompleted />
            <span>{items} items left</span>
          </div>
          <div className={style.menu}>
            <ul>
              <HeaderLink title="All" url="/" />
              <HeaderLink title="Active" url="/active" />
              <HeaderLink title="Completed" url="/completed" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
