import { Link } from "react-router-dom";
import styles from "../NavigationBar.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      Weather App
    </Link>
  );
}

export default Logo;
