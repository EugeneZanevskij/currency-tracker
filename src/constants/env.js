const ENV_VARS = {
	cacheLifetime: Number(process.env.CACHE_LIFETIME),
	cacheCurrencyKey: process.env.CACHE_CURRENCY_KEY,
	currencyApiKey: process.env.CURRENCY_API_KEY,
	currencyApiUrl: process.env.CURRENCY_API_URL,
};

const getEnvVars = (key) => {
	return ENV_VARS[key];
};

export default getEnvVars;
