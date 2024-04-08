import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const ThemeContext = createContext({
  theme: true,
  toggleTheme: () => {},
});

export default function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("currency-tracker-theme") === "light" ? false : true);

  const toggleThemeHandler = () => {
    setTheme((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleThemeHandler }}>{children}</ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
	children: PropTypes.node
}