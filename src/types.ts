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
	openPriceInput: number;
	highPriceInput: number;
	lowPriceInput: number;
	closePriceInput: number;
}

interface ICurrencyChartData {
	[key: string]: {
		open: number;
		high: number;
		low: number;
		close: number;
	};
}

interface INotification {
	message: string;
	color: string;
}

interface IMapboxMap {
	center: [number, number];
	style: string;
	zoom: number;
	attributionControl: boolean;
}

interface IBank {
	id: number;
	title: string;
	address: string;
	latitude: string;
	longitude: string;
	currencies: string[];
}
