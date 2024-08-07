import { Component } from "react";
import { TimelineChart } from "./TimelineChart";
import { TimelineCurrencySelect } from "@components/TimelineSection/TimelineCurrencySelect";
import { CURRENCY_DEFAULT } from "@constants/currencies";
import TimelineCurrencyData from "./TimelineCurrencyData";
import TimelineCurrencyModal from "./TimelineCurrencyModal";
import { formatDate } from "@utils/timeUtilities";
import { getCache, removeCache, saveCache } from "@utils/cachingUtilities";
import { Button, Buttons, Container } from "./styled";
import { observer } from "@components/Observer";
import { NotificationsModal } from "./NotificationsModal";

export class TimelineSection extends Component {
	state = {
		selectedCurrency: CURRENCY_DEFAULT,
		isModalOpen: false,
		isDataProvided: false,
		showChart: false,
		notification: {
			message: "",
			color: "",
		},
		showNotification: false,
	};

	update() {
		this.setState({ showNotification: true });
		setTimeout(() => {
			this.setState({ showNotification: false });
		}, 3000);
	}

	handleShowChart = () => {
		this.setState({ showChart: true });
	};

	handleClearChartData = () => {
		this.setState({ showChart: false });
		removeCache(this.state.selectedCurrency.id);
		this.checkChartDataStatus();
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

		const currencyData: ICurrencyChartData = getCache(id) || {};

		const high = Number(inputValue.highPriceInput);
		const low = Number(inputValue.lowPriceInput);
		const open = Number(inputValue.openPriceInput);
		const close = Number(inputValue.closePriceInput);

		if (
			high < open ||
			high < low ||
			high < close ||
			low > open ||
			low > close
		) {
			this.setState({
				notification: {
					message: "Incorrect values",
					color: "red",
				},
			});
			observer.notify();
			return;
		}

		currencyData[formattedDate] = {
			open,
			high,
			low,
			close,
		};
		saveCache(id, currencyData);
		this.checkChartDataStatus();
	};

	checkChartDataStatus() {
		const selectedCurrencyId = this.state.selectedCurrency.id;
		const currencyData = getCache(selectedCurrencyId);
		const numberOfEntries = Object.keys(currencyData).length;

		if (numberOfEntries >= 30) {
			this.handleModalToggle();
			this.setState(
				{
					notification: {
						message: "Data for this currency is provided",
						color: "green",
					},
					isDataProvided: true,
				},
				() => {
					observer.notify();
				}
			);
		} else {
			this.setState({
				isDataProvided: false,
				notification: {
					message: `Date №${numberOfEntries} is added`,
					color: "green",
				},
			});
			observer.notify();
		}
	}

	componentDidMount(): void {
		observer.subscribe(this);
		this.checkChartDataStatus();
	}

	componentWillUnmount(): void {
		observer.unsubscribe(this);
	}

	render() {
		const {
			selectedCurrency,
			isModalOpen,
			showChart,
			isDataProvided,
			notification,
			showNotification,
		} = this.state;
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
				{isDataProvided && (
					<Buttons>
						<Button onClick={this.handleShowChart}>Show chart</Button>
						<Button onClick={this.handleClearChartData}>Clear chart</Button>
					</Buttons>
				)}
				{showChart && <TimelineChart id={selectedCurrency.id} />}
				{showNotification && <NotificationsModal notification={notification} />}
				<TimelineChart id={selectedCurrency.id} />
			</Container>
		);
	}
}
