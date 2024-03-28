import { Component } from "react";
import { TimelineChart } from "./TimelineChart";
import { TimelineCurrencySelect } from "@components/TimelineSection/TimelineCurrencySelect";
import { CURRENCY_DEFAULT } from "@constants/currencies";
import TimelineCurrencyData from "./TimelineCurrencyData";
import TimelineCurrencyModal from "./TimelineCurrencyModal";
import { formatDate } from "@utils/timeUtilities";
import { getCache, saveCache } from "@utils/cachingUtilities";
import { Container } from "./styled";

export class TimelineSection extends Component {
	state = {
		selectedCurrency: CURRENCY_DEFAULT,
		isModalOpen: false,
		showChart: false,
	};

	handleCurrencyChange = (newCurrency: ICurrencyConst) => {
		this.setState({
			selectedCurrency: newCurrency,
		});
	};

	handleModalToggle = () => {
		this.setState({ isModalOpen: !this.state.isModalOpen });
	};

	handleTimelineAdd = (currentDate: Date, inputValue: IInputValue) => {
		const formattedDate = formatDate(currentDate);
		const { id } = this.state.selectedCurrency;

		console.log(id, formattedDate, inputValue);

		const currencyData: ICurrencyChartData = getCache(id) || {};

		const high = Number(inputValue.highPriceInput);
		const low = Number(inputValue.lowPriceInput);
		const open = Number(inputValue.openPriceInput);
		const close = Number(inputValue.closePriceInput);

		if (high < open || high < low || high < close || low > open || low > close)
			return;

		console.log(currencyData);
		currencyData[formattedDate] = {
			open,
			high,
			low,
			close,
		};

		console.log(currencyData[formattedDate]);

		saveCache(id, currencyData);
	};

	render() {
		const { selectedCurrency, isModalOpen, showChart } = this.state;
		return (
			<Container>
				<TimelineCurrencySelect
					selectedCurrency={selectedCurrency}
					onCurrencyChange={this.handleCurrencyChange}
				/>
				<TimelineCurrencyData
					selectedCurrency={selectedCurrency}
					onClick={this.handleModalToggle}
				/>
				{isModalOpen && (
					<TimelineCurrencyModal
						selectedCurrency={selectedCurrency}
						onTimelineAdd={this.handleTimelineAdd}
						onClose={this.handleModalToggle}
					/>
				)}
				{showChart && <TimelineChart id={selectedCurrency.id} />}
				<TimelineChart id={selectedCurrency.id} />
			</Container>
		);
	}
}
