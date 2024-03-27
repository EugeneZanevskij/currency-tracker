import { PureComponent } from "react";

import { QUOTES_DATA } from "@constants/currencies";

import { Option, Select } from "./styled";

const CURRENCY_OPTION = QUOTES_DATA.map((listItem) => {
	const { id, title } = listItem;
	return <Option key={id}>{title}</Option>;
});

interface TimelineCurrencySelectProps {
	selectedCurrency: ICurrencyConst;
	onCurrencyChange: (selectedCurrency: ICurrencyConst) => void;
}

export class TimelineCurrencySelect extends PureComponent<TimelineCurrencySelectProps> {
	handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedCurrency = QUOTES_DATA.find(
			(currency) => currency.title === event.target.value
		);

		this.props.onCurrencyChange(selectedCurrency!);
	};

	render() {
		const { title } = this.props.selectedCurrency;

		return (
			<Select
				data-cy="currency-select"
				value={title}
				onChange={this.handleSelectChange}
			>
				{CURRENCY_OPTION}
			</Select>
		);
	}
}
