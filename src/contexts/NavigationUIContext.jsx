import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import PropTypes from "prop-types";

const NavigationUIContext = createContext();

const initialState = {
  isNavOpen: false,
  isSearchOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "toggle-nav":
      return { ...state, isNavOpen: !state.isNavOpen };
    case "toggle-search":
      return { ...state, isSearchOpen: !state.isSearchOpen };
    case "close-nav":
      return { ...state, isNavOpen: false };
    case "close-search":
      return { ...state, isSearchOpen: false };
    default:
      throw new Error("Unkown action type!");
  }
}

function NavigationUIProvider({ children }) {
  const [{ isNavOpen, isSearchOpen }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const sideBarRef = useRef();

  function toggleNav() {
    dispatch({ type: "toggle-nav" });
  }

  function toggleSearch() {
    dispatch({ type: "toggle-search" });
  }
  function closeNav() {
    dispatch({ type: "close-nav" });
  }
  function closeSearch() {
    dispatch({ type: "close-search" });
  }

  const handleClickOutside = useCallback((e) => {
    if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
      dispatch({ type: "close-nav" });
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <NavigationUIContext.Provider
      value={{
        isNavOpen,
        isSearchOpen,
        toggleNav,
        toggleSearch,
        sideBarRef,
        closeNav,
        closeSearch,
      }}
    >
      {children}
    </NavigationUIContext.Provider>
  );
}

NavigationUIProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useNavigationUI() {
  const context = useContext(NavigationUIContext);
  if (context === undefined)
    throw new Error(
      "NavigationUIContext was used outside the NavigationUIProvider"
    );
  return context;
}

export { NavigationUIProvider, useNavigationUI };
