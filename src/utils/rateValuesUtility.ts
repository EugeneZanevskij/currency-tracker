export function getValue(rates: ICurrencyData, id: string) {
	return rates[id].value;
}

export function getReversedValue(rates: ICurrencyData, id: string) {
	return 1 / getValue(rates, id);
}

export const getRateValue = (
	rates: ICurrencyData,
	name: string,
	rateValue: string | undefined
) => {
	if (rates && rates[name]) {
		return `$ ${(1 / getValue(rates, name)).toFixed(3)}`;
	}
	return rateValue || "0.00";
};
