export function getValue(rates, id) {
	return rates[id].value;
}

export function getReversedValue(rates, id) {
	return 1 / getValue(rates, id);
}

export const getRateValue = (rates, name, rateValue) => {
	if (rates && rates[name]) {
		return `$ ${(1 / getValue(rates, name)).toFixed(3)}`;
	}
	return rateValue || "0.00";
};
