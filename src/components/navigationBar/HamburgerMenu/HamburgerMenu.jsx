import { useNavigationUI } from "../../../contexts/NavigationUIContext";
import styles from "../NavigationBar.module.css";

function HamburgerMenu() {
  const { isSearchOpen, closeSearch, toggleNav } = useNavigationUI();
  return (
    <i
      className={`uil uil-bars ${styles.navOpenBtn}`}
      onClick={() => {
        if (isSearchOpen) {
          closeSearch();
        }
        toggleNav();
      }}
    ></i>
  );
}

export default HamburgerMenu;
