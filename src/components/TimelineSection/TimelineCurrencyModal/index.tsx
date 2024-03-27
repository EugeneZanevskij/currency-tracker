import { Modal } from "@components/Modal";
import { Component } from "react";

interface TimelineCurrencyModalProps {
	selectedCurrency: ICurrencyConst;
	onClose: () => void;
}

export default class TimelineCurrencyModal extends Component<TimelineCurrencyModalProps> {
	render() {
		return (
			<Modal onClose={this.props.onClose}>
				<>
					<p>{this.props.selectedCurrency.title}</p>
					<p>{this.props.selectedCurrency.id}</p>
				</>
			</Modal>
		);
	}
}
