import ifix from "@assets/cards/IFIX.svg";
import bovespa from "@assets/cards/BovespaIcon.svg";
import usd from "@assets/cards/DollarIcon.svg";
import ars from "@assets/cards/PesoArgentinoIcon.svg";
import cad from "@assets/cards/CanadianDollarIcon.svg";
import jpy from "@assets/cards/YenIcon.svg";
import aud from "@assets/cards/AustralianDollarIcon.svg";
import cny from "@assets/cards/WonIcon.svg";
import eur from "@assets/cards/EuroIcon.svg";
import bitcoin from "@assets/cards/BitcoinIcon.svg";
import lbp from "@assets/cards/LibraIcon.svg";

export const STOCKS_DATA = [
	{
		id: "IBOV",
		title: "Bovespa Index",
		rateValue: "0.15%",
		img: bovespa,
	},
	{
		id: "IFIX",
		title: "IFIX",
		rateValue: "0.15%",
		img: ifix,
	},
];

export const QUOTES_DATA = [
	{
		id: "USD",
		title: "Commercial Dollar",
		img: usd,
	},
	{
		id: "ARS",
		title: "Argentine Peso",
		img: ars,
	},
	{
		id: "CAD",
		title: "Canadian Dollar",
		img: cad,
	},
	{
		id: "JPY",
		title: "Yen",
		img: jpy,
	},
	{
		id: "AUD",
		title: "Australian Dollar",
		img: aud,
	},
	{
		id: "CNY",
		title: "Yuan",
		img: cny,
	},
	{
		id: "EUR",
		title: "Euro",
		img: eur,
	},
	{
		id: "BTC",
		title: "Bitcoin",
		img: bitcoin,
	},
	{
		id: "LBP",
		title: "Libra",
		img: lbp,
	},
];
