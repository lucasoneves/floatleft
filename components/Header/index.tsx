import styles from "./Header.module.scss";
import { russoOne } from "@/fonts";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <div className="container">
        <h1 className={russoOne.className}>FloatLeft</h1>
      </div>
    </header>
  );
}
