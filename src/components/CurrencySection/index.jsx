import React, { useEffect, useState } from "react";
import CurrencySectionContainer from "./styled";
import CurrencyCards from "./CurrencyCards";
import { QUOTES_DATA, STOCKS_DATA } from "../../constants/currencies";
import getEnvVars from "../../constants/env";
import {
	isCurrencyCacheValid,
	getCache,
	saveCache,
} from "../../utils/cachingUtilities";
import getCurrencies from "../../services/currencyService";
import { getValue } from "../../utils/rateValuesUtility";
import CurrencyModal from "./CurrencyModal";

const CACHE_LIFETIME = getEnvVars("cacheLifetime");
const CACHE_CURRENCY_KEY = getEnvVars("cacheCurrencyKey");

function CurrencySection() {
	const [rates, setRates] = useState({
		expirationTime: new Date().getTime() + CACHE_LIFETIME,
		data: {},
	});

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [exchangeRate, setExchangeRate] = useState(0);
	const [currency, setCurrency] = useState({
		id: "",
		img: "",
	});

	const handleCardClick = (id, img) => {
		setIsModalOpen((prevState) => !prevState);
		setExchangeRate(getValue(rates.data, id));
		setCurrency({
			id,
			img,
		});
	};

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

		if (isCurrencyCacheValid(cachedRates)) {
			setRates(cachedRates);
		} else {
			getRatesValue();
		}
	}, []);

	return (
		<CurrencySectionContainer>
			<CurrencyCards title="Stocks" cardsData={STOCKS_DATA} />
			<CurrencyCards
				title="Currencies"
				ratesData={rates.data}
				cardsData={QUOTES_DATA}
				onClick={handleCardClick}
			/>
			{isModalOpen && (
				<CurrencyModal
					id={currency.id}
					img={currency.img}
					exchangeRate={exchangeRate}
					onClose={() => setIsModalOpen(false)}
				/>
			)}
		</CurrencySectionContainer>
	);
}

export default CurrencySection;
