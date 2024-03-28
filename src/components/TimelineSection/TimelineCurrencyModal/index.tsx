import { Modal } from "@components/Modal";
import { INITIAL_INPUT_VALUES, INPUT_CONFIGURATION } from "@constants/timeline";
import { Component } from "react";
import { Button, Text } from "./styled";
import { ModalInput } from "./ModalInput";
import { formatDate } from "@utils/timeUtilities";
import { getCache } from "@utils/cachingUtilities";

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
		remainItems: 0,
	};

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
		const cachedData: ICurrencyChartData = getCache(
			this.props.selectedCurrency.id
		);
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

	componentDidMount() {
		this.loadCachedData(this.state.currentDate);
	}

	render() {
		const { onClose, onTimelineAdd } = this.props;
		const { remainItems, inputValue, currentDate } = this.state;
		return (
			<Modal onClose={onClose}>
				<>
					<Text>{remainItems} dates remains</Text>
					{INPUT_CONFIGURATION.map(({ label, name }) => (
						<ModalInput
							key={name}
							label={label}
							name={name}
							value={inputValue[name as keyof IInputValue]}
							onChange={this.handleInputChange}
						/>
					))}
					<Button onClick={() => onTimelineAdd(currentDate, inputValue)}>
						Add date
					</Button>
				</>
			</Modal>
		);
	}
}
