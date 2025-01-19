import { NavLink } from "react-router-dom";
import { useNavigationUI } from "../../../contexts/NavigationUIContext";
import styles from "../NavigationBar.module.css";

function NavigationMenu() {
  const { isNavOpen, setIsNavOpen, isSearchOpen, toggleNav, sideBarRef } =
    useNavigationUI();

  return (
    <ul
      className={`${styles.navLinks} ${isNavOpen ? styles.open : ""} ${
        isSearchOpen ? styles.hideNavLinks : ""
      }`}
      ref={sideBarRef}
    >
      <i
        className={`uil uil-times ${styles.navCloseBtn}`}
        onClick={toggleNav}
      ></i>

      <li>
        <NavLink to="/" onClick={() => setIsNavOpen(false)}>
          Current Weather
        </NavLink>
      </li>
      <li>
        <NavLink to="/forecast" onClick={() => setIsNavOpen(false)}>
          Forecast
        </NavLink>
      </li>
      <li>
        <a
          href="https://openweathermap.org/current"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Weather API
        </a>
      </li>
    </ul>
  );
}

export default NavigationMenu;
