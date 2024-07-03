import { Modal } from "@components/Modal";
import {
	INITIAL_INPUT_VALUES,
	INPUT_CONFIGURATION,
	MAX_INPUT_VALUE,
	MIN_INPUT_VALUE,
} from "@constants/timeline";
import { Component } from "react";
import { Button, Text } from "./styled";
import { ModalInput } from "./ModalInput";
import { formatDate } from "@utils/timeUtilities";
import { getCache } from "@utils/cachingUtilities";
import { DateChanger } from "../DateChanger";

interface TimelineCurrencyModalProps {
	selectedCurrency: ICurrencyConst;
	onTimelineAdd: (currentDate: Date, inputValue: IInputValue) => void;
	onClose: () => void;
}

interface TimelineCurrencyModalState {
	currentDate: Date;
	inputValue: IInputValue;
	remainItems: number;
}

export default class TimelineCurrencyModal extends Component<
	TimelineCurrencyModalProps,
	TimelineCurrencyModalState
> {
	state = {
		currentDate: new Date(),
		inputValue: INITIAL_INPUT_VALUES,
		remainItems: this.getNumberOfRemainItems(),
	};

	getNumberOfRemainItems() {
		const selectedCurrencyId = this.props.selectedCurrency.id;
		const currencyData = getCache(selectedCurrencyId);
		const numberOfEntries = Object.keys(currencyData).length;
		const remainItems = 30 - numberOfEntries;
		return Math.max(0, remainItems);
	}

	handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		this.setState((prevState) => ({
			inputValue: {
				...prevState.inputValue,
				[name]: value,
			},
		}));
	};

	loadCachedData(date: Date) {
		const formattedDate = formatDate(date);
		const cachedData: ICurrencyChartData =
			getCache(this.props.selectedCurrency.id) || {};
		const cachedDataDate = cachedData[formattedDate];

		if (cachedDataDate) {
			this.setState({
				inputValue: {
					openPriceInput: cachedDataDate.open,
					highPriceInput: cachedDataDate.high,
					lowPriceInput: cachedDataDate.low,
					closePriceInput: cachedDataDate.close,
				},
			});
		} else {
			this.setState({ inputValue: INITIAL_INPUT_VALUES });
		}
	}

	checkValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		if (
			isNaN(+value) ||
			+value < MIN_INPUT_VALUE ||
			+value > MAX_INPUT_VALUE ||
			value.trim() === ""
		) {
			this.setState((prevState) => ({
				inputValue: {
					...prevState.inputValue,
					[name]: 0,
				},
			}));
		}
	};

	handleCLickAddDate = () => {
		this.props.onTimelineAdd(this.state.currentDate, this.state.inputValue);
		const remainingItems = this.getNumberOfRemainItems();
		if (remainingItems !== this.state.remainItems) {
			this.setState({ remainItems: remainingItems });
			this.handleUpdateDate(1);
		}
	};

	handleUpdateDate = (change: number) => {
		const { currentDate } = this.state;
		const updatedDate = new Date(currentDate);
		updatedDate.setDate(updatedDate.getDate() + change);
		this.setState({ currentDate: updatedDate });
		this.loadCachedData(updatedDate);
	};

	componentDidMount() {
		this.loadCachedData(this.state.currentDate);
	}

	componentDidUpdate() {
		console.log("componentDidUpdate");
	}

	render() {
		const { onClose } = this.props;
		const { remainItems, inputValue, currentDate } = this.state;
		return (
			<Modal id={"timeline-modal-root"} onClose={onClose}>
				<>
					<Text>{remainItems} dates remains</Text>
					<DateChanger
						currentDate={currentDate}
						onDateChange={this.handleUpdateDate}
					/>
					{INPUT_CONFIGURATION.map(
						(
							{ label, name } // TODO:протипизировать
						) => (
							<ModalInput
								key={name}
								label={label}
								name={name}
								value={inputValue[name as keyof IInputValue]}
								onChange={this.handleInputChange}
								checkValue={this.checkValue}
							/>
						)
					)}
					<Button onClick={this.handleCLickAddDate}>Add date</Button>
				</>
			</Modal>
		);
	}
}
