import { Component } from "react";
import { TimelineChart } from "./TimelineChart";
import { TimelineCurrencySelect } from "@components/TimelineSection/TimelineCurrencySelect";
import { CURRENCY_DEFAULT } from "@constants/currencies";
import TimelineCurrencyData from "./TimelineCurrencyData";
import TimelineCurrencyModal from "./TimelineCurrencyModal";

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

	render() {
		const { selectedCurrency, isModalOpen, showChart } = this.state;
		return (
			<>
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
						onClose={this.handleModalToggle}
					/>
				)}
				{showChart && <TimelineChart />}
				<TimelineChart />
			</>
		);
	}
}
