import React, { useEffect, useState } from "react";
import CurrencySectionContainer from "./styled";
import CurrencyCards from "./CurrencyCards";
import { QUOTES_DATA } from "../../constants/currencies";
import getEnvVars from "../../constants/env";
import {
	isCacheValid,
	getCache,
	saveCache,
} from "../../utils/cachingUtilities";
import getCurrencies from "../../services/currencyService";

const CACHE_LIFETIME = getEnvVars("cacheLifetime");
const CACHE_CURRENCY_KEY = getEnvVars("cacheCurrencyKey");

function CurrencySection() {
	const [rates, setRates] = useState({
		expirationTime: new Date().getTime() + CACHE_LIFETIME,
		data: {},
	});

	const getRatesValue = async () => {
		const currentTime = new Date().getTime();
		const currencies = QUOTES_DATA.map((quote) => quote.id).join(",");
		const response = await getCurrencies(currencies);

		setRates({
			expirationDate: currentTime + CACHE_LIFETIME,
			data: response,
		});

		saveCache(CACHE_CURRENCY_KEY, {
			expirationTime: currentTime + CACHE_LIFETIME,
			data: response,
		});
	};

	useEffect(() => {
		const cachedRates = getCache(CACHE_CURRENCY_KEY);

		if (isCacheValid(cachedRates)) {
			setRates(cachedRates);
		} else {
			getRatesValue();
		}
	}, []);

	return (
		<CurrencySectionContainer>
			<CurrencyCards
				title="Currencies"
				ratesData={rates.data}
				cardsData={QUOTES_DATA}
			/>
		</CurrencySectionContainer>
	);
}

export default CurrencySection;
