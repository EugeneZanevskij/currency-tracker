import axios from "axios";
import { getEnvVars } from "@constants/env";

export async function getCurrencies(currencies: string) {
	const CURRENCY_API_URL = getEnvVars("currencyApiUrl");
	const CURRENCY_API_KEY = getEnvVars("currencyApiKey");
	const headers = {
		"Allow-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
		"Access-Control-Allow-Headers": "Content-Type",
	};

	const params = {
		currencies,
		apikey: CURRENCY_API_KEY,
	};
	const apiUrl = CURRENCY_API_URL;

	try {
		const response = await axios.get(apiUrl, { headers, params });
		const data = await response.data;
		return data.data as ICurrencyData;
	} catch (error) {
		console.log(error);
	}
}
