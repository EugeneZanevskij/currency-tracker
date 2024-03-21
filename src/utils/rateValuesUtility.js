const getRateValue = (rates, name, rateValue) => {
	if (rates && rates[name]) {
		const value = `$ ${Number(rates[name].value).toFixed(2)}`;

		return value;
	}
	return rateValue || "0.00";
};

export default getRateValue;
