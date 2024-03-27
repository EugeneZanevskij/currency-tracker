import { Component } from "react";
import {
	CurrencyContainer,
	CurrencyPrice,
	CurrencyTextContainer,
	CurrencyTitle,
	CurrencyImage,
} from "./styled";

interface ITimelineCurrencyDataProps {
	selectedCurrency: ICurrencyConst;
	onClick: () => void;
}

export default class TimelineCurrencyData extends Component<ITimelineCurrencyDataProps> {
	render() {
		const { id, title, img } = this.props.selectedCurrency;
		return (
			<CurrencyContainer onClick={this.props.onClick}>
				<CurrencyImage src={img} alt={title} />
				<CurrencyTextContainer>
					<CurrencyTitle>{title}</CurrencyTitle>
					<CurrencyPrice>{id}</CurrencyPrice>
				</CurrencyTextContainer>
			</CurrencyContainer>
		);
	}
}
