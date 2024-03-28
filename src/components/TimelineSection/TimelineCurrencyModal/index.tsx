import { Modal } from "@components/Modal";
import { INITIAL_INPUT_VALUES } from "@constants/timeline";
import { Component } from "react";
import { Button, Text } from "./styled";

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

	render() {
		return (
			<Modal onClose={this.props.onClose}>
				<>
					<Text>30 dates remains</Text>
					<p>{this.props.selectedCurrency.title}</p>
					<p>{this.props.selectedCurrency.id}</p>
					<Button
						onClick={() =>
							this.props.onTimelineAdd(
								this.state.currentDate,
								this.state.inputValue
							)
						}
					>
						Add date
					</Button>
				</>
			</Modal>
		);
	}
}
