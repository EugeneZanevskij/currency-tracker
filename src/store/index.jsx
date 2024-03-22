import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getCache, saveCache } from "../utils/cachingUtilities";
import getEnvVars from "../constants/env";

const CACHE_THEME_KEY = getEnvVars("cacheThemeKey");

const ThemeContext = createContext();

function AppThemeProvider({ children }) {
	const [theme, setTheme] = useState(getCache(CACHE_THEME_KEY) || "dark");

	useEffect(() => {
		saveCache(CACHE_THEME_KEY, theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

AppThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export { AppThemeProvider, ThemeContext };
