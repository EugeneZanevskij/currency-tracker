import React, { createContext, useState, useEffect, useMemo } from "react";
import { getCache, saveCache } from "@utils/cachingUtilities";
import { getEnvVars } from "../constants/env";

interface IThemeContext {
	theme: "light" | "dark";
	setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const CACHE_THEME_KEY = getEnvVars("cacheThemeKey");

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

function AppThemeProvider({ children }: { children: JSX.Element }) {
	const [theme, setTheme] = useState<IThemeContext["theme"]>(
		(getCache(CACHE_THEME_KEY) as IThemeContext["theme"]) || "dark"
	);

	useEffect(() => {
		saveCache(CACHE_THEME_KEY, theme);
	}, [theme]);

	const themeMemo = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

	return (
		<ThemeContext.Provider value={themeMemo}>{children}</ThemeContext.Provider>
	);
}

export { AppThemeProvider, ThemeContext };
