import { Component } from "react";
import { TimelineChart } from "./TimelineChart";
import { TimelineCurrencySelect } from "@components/TimelineSection/TimelineCurrencySelect";
import { CURRENCY_DEFAULT } from "@constants/currencies";

export class TimelineSection extends Component {
	state = {
		selectedCurrency: CURRENCY_DEFAULT,
	};

	handleCurrencyChange = (newCurrency: ICurrencyConst) => {
		this.setState({
			selectedCurrency: newCurrency,
		});
	};

	render() {
		const { selectedCurrency } = this.state;
		return (
			<>
				<TimelineCurrencySelect
					selectedCurrency={selectedCurrency}
					onCurrencyChange={this.handleCurrencyChange}
				/>
				<TimelineChart />
			</>
		);
	}
}
