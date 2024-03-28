interface ICurrencyCache {
	expirationTime: number;
	data: ICurrencyData;
}

interface ICurrencyData {
	[key: string]: {
		code: string;
		value: number;
	};
}

interface ICurrencyConst {
	id: string;
	title: string;
	img: string;
}

interface IInputValue {
	openPriceInput: string;
	highPriceInput: string;
	lowPriceInput: string;
	closePriceInput: string;
}

interface ICurrencyChartData {
	[key: string]: {
		open: number;
		high: number;
		low: number;
		close: number;
	};
}
