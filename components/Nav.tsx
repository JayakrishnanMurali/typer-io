import { GithubIcon } from "./icons";
import styles from "../styles/Nav.module.scss";
import { memo } from "react";

export const Nav = memo(function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.appName}>typer.io</div>
      <a
        href="https://github.com/jayakrishnanMurali/typer-io"
        target="_blank"
        rel="noreferrer"
        className={styles.github}
        aria-label="View on Github"
      >
        {GithubIcon}
      </a>
    </nav>
  );
});
