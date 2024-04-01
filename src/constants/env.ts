const ENV_VARS = {
	cacheLifetime: String(process.env.CACHE_LIFETIME),
	cacheCurrencyKey: String(process.env.CACHE_CURRENCY_KEY),
	cacheThemeKey: String(process.env.CACHE_THEME_KEY),
	currencyApiKey: String(process.env.CURRENCY_API_KEY),
	currencyApiUrl: String(process.env.CURRENCY_API_URL),
	mapboxToken: String(process.env.MAPBOX_TOKEN),
};

export const getEnvVars = (key: keyof typeof ENV_VARS) => {
	return ENV_VARS[key];
};
