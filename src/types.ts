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
