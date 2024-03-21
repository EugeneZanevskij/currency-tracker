const getRateValue = (rates, name) => {
	if (rates && rates[name]) {
		const value = `$ ${Number(rates[name].value).toFixed(2)}`;

		return value;
	}
	return "0.00";
};

export default getRateValue;
