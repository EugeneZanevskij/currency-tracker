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
}

export default class TimelineCurrencyData extends Component<ITimelineCurrencyDataProps> {
	render() {
		const { id, title, img } = this.props.selectedCurrency;
		return (
			<CurrencyContainer>
				<CurrencyImage src={img} alt={title} />
				<CurrencyTextContainer>
					<CurrencyTitle>{title}</CurrencyTitle>
					<CurrencyPrice>{id}</CurrencyPrice>
				</CurrencyTextContainer>
			</CurrencyContainer>
		);
	}
}
