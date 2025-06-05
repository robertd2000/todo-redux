import { NavLink } from "react-router";
import style from "../../style/Header.module.scss";

interface Props {
  title: string;
  url: string;
}

export function HeaderLink({ title, url }: Props) {
  return (
    <li>
      <NavLink
        to={url}
        className={({ isActive, isPending }) =>
          isPending
            ? `${style.link}`
            : isActive
            ? `${style.link} underline text-black dark:text-white`
            : style.link
        }
        aria-current="page"
      >
        {title}
      </NavLink>
    </li>
  );
}
